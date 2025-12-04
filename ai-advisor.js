// AI Advisor JavaScript with Claude API Integration
let conversationHistory = [];

document.addEventListener('DOMContentLoaded', function() {
    const userInput = document.getElementById('userInput');
    const sendButton = document.getElementById('sendButton');

    if (userInput) {
        userInput.addEventListener('keypress', function(e) {
            if (e.key === 'Enter' && !e.shiftKey) {
                e.preventDefault();
                sendMessage();
            }
        });
    }

    if (sendButton) {
        sendButton.addEventListener('click', sendMessage);
    }
});

function fillExample(exampleText) {
    const userInput = document.getElementById('userInput');
    if (userInput) {
        userInput.value = exampleText;
        userInput.focus();
    }
}

async function sendMessage() {
    const userInput = document.getElementById('userInput');
    const sendButton = document.getElementById('sendButton');
    const loadingIndicator = document.getElementById('loadingIndicator');
    const chatMessages = document.getElementById('chatMessages');

    if (!userInput || !userInput.value.trim()) return;

    const userMessage = userInput.value.trim();
    
    // Disable input while processing
    userInput.disabled = true;
    sendButton.disabled = true;
    loadingIndicator.style.display = 'block';

    // Add user message to chat
    addMessageToChat('user', userMessage);
    
    // Clear input
    userInput.value = '';

    // Add user message to conversation history
    conversationHistory.push({
        role: 'user',
        content: userMessage
    });

    try {
        // Call Claude API
        const aiResponse = await getAIResponse(userMessage);
        
        // Add AI response to conversation history
        conversationHistory.push({
            role: 'assistant',
            content: aiResponse
        });

        // Add AI message to chat
        addMessageToChat('ai', aiResponse);
    } catch (error) {
        console.error('Error getting AI response:', error);
        addMessageToChat('ai', "I apologize, but I'm having trouble connecting right now. Please try again in a moment, or browse our scholarships directly using the navigation menu above.");
    } finally {
        // Re-enable input
        userInput.disabled = false;
        sendButton.disabled = false;
        loadingIndicator.style.display = 'none';
        userInput.focus();
    }
}

async function getAIResponse(userMessage) {
    // Create context with scholarship database
    const systemPrompt = `You are a helpful scholarship advisor. You help students find the best scholarship opportunities based on their profile.

Here is our scholarship database with ${scholarshipsDatabase.length} scholarships:
${JSON.stringify(scholarshipsDatabase.slice(0, 20), null, 2)}

When a user asks about scholarships:
1. Ask clarifying questions about their education level, field of study, preferred countries, GPA, and any other relevant information
2. Recommend specific scholarships from our database that match their profile
3. Provide direct links to apply
4. Be encouraging and supportive
5. If they ask about a specific country or field, filter recommendations accordingly

Always format your recommendations clearly with:
- Scholarship name
- Country and university
- Level (Undergraduate/Masters/PhD)
- Brief description
- Application link

Be conversational and helpful. Don't just list scholarships - explain WHY each one is a good fit for them.`;

    try {
        const response = await fetch("https://api.anthropic.com/v1/messages", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                model: "claude-sonnet-4-20250514",
                max_tokens: 2000,
                messages: [
                    {
                        role: "user",
                        content: systemPrompt
                    },
                    {
                        role: "assistant",
                        content: "I understand. I'm a scholarship advisor with access to a database of fully funded scholarships. I'll help students find the best opportunities based on their profile, ask clarifying questions when needed, and provide personalized recommendations with clear explanations and direct application links."
                    },
                    ...conversationHistory
                ]
            })
        });

        if (!response.ok) {
            throw new Error(`API request failed: ${response.status}`);
        }

        const data = await response.json();
        return data.content[0].text;
    } catch (error) {
        console.error('Claude API Error:', error);
        // Fallback to rule-based recommendations
        return getFallbackResponse(userMessage);
    }
}

function getFallbackResponse(userMessage) {
    const lowerMessage = userMessage.toLowerCase();
    
    // Extract information from user message
    let recommendedScholarships = [];
    
    // Check for country mentions
    const countries = ['usa', 'uk', 'canada', 'australia', 'germany', 'netherlands', 'sweden', 'france'];
    const mentionedCountry = countries.find(c => lowerMessage.includes(c));
    
    // Check for level mentions
    let level = '';
    if (lowerMessage.includes('master') || lowerMessage.includes('msc') || lowerMessage.includes('graduate')) {
        level = 'Masters';
    } else if (lowerMessage.includes('phd') || lowerMessage.includes('doctoral')) {
        level = 'PhD';
    } else if (lowerMessage.includes('undergraduate') || lowerMessage.includes('bachelor')) {
        level = 'Undergraduate';
    }
    
    // Check for field mentions
    const fields = ['engineering', 'computer science', 'cs', 'medicine', 'business', 'sciences', 'arts'];
    const mentionedField = fields.find(f => lowerMessage.includes(f));
    
    // Filter scholarships
    recommendedScholarships = scholarshipsDatabase.filter(s => {
        let matches = true;
        if (mentionedCountry) {
            matches = matches && s.country.toLowerCase().includes(mentionedCountry);
        }
        if (level) {
            matches = matches && s.level === level;
        }
        if (mentionedField) {
            matches = matches && (s.field.toLowerCase().includes(mentionedField) || s.field === 'All Fields');
        }
        return matches;
    });
    
    // If no specific criteria, show popular scholarships
    if (recommendedScholarships.length === 0) {
        recommendedScholarships = scholarshipsDatabase.slice(0, 5);
    } else {
        recommendedScholarships = recommendedScholarships.slice(0, 5);
    }
    
    // Generate response
    let response = `Based on your inquiry, here are some excellent scholarship opportunities I recommend:\n\n`;
    
    recommendedScholarships.forEach((s, index) => {
        response += `**${index + 1}. ${s.title}**\n`;
        response += `- Country: ${s.country}\n`;
        response += `- University: ${s.university}\n`;
        response += `- Level: ${s.level}\n`;
        response += `- Field: ${s.field}\n`;
        response += `- Funding: ${s.funding}\n`;
        response += `- Deadline: ${s.deadline}\n`;
        response += `- Description: ${s.description}\n`;
        response += `- Apply here: ${s.link}\n\n`;
    });
    
    response += `\n\nWould you like more specific recommendations? Please tell me about:\n`;
    response += `- Your current education level and field of study\n`;
    response += `- Your GPA or academic achievements\n`;
    response += `- Your preferred study destinations\n`;
    response += `- What level you want to study (Undergraduate, Masters, PhD)`;
    
    return response;
}

function addMessageToChat(sender, message) {
    const chatMessages = document.getElementById('chatMessages');
    if (!chatMessages) return;

    const messageDiv = document.createElement('div');
    messageDiv.className = sender === 'user' ? 'message user-message' : 'message ai-message';
    
    const avatar = document.createElement('div');
    avatar.className = 'message-avatar';
    avatar.innerHTML = sender === 'user' ? '<i class="fas fa-user"></i>' : '<i class="fas fa-robot"></i>';
    
    const content = document.createElement('div');
    content.className = 'message-content';
    
    // Format the message (convert markdown-like formatting to HTML)
    let formattedMessage = message
        .replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>')
        .replace(/\n/g, '<br>');
    
    content.innerHTML = formattedMessage;
    
    messageDiv.appendChild(avatar);
    messageDiv.appendChild(content);
    
    chatMessages.appendChild(messageDiv);
    
    // Scroll to bottom
    chatMessages.scrollTop = chatMessages.scrollHeight;
}
