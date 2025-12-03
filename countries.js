// Countries Page JavaScript
function loadCountryScholarships(country) {
    const section = document.getElementById('countryScholarshipsSection');
    const grid = document.getElementById('countryScholarshipsGrid');
    const title = document.getElementById('countryTitle');

    if (!section || !grid || !title) return;

    // Filter scholarships by country
    const countryScholarships = scholarshipsDatabase.filter(s => s.country === country);

    // Update title
    title.textContent = `${country} Scholarships (${countryScholarships.length})`;

    // Display scholarships
    if (countryScholarships.length === 0) {
        grid.innerHTML = `
            <div style="grid-column: 1/-1; text-align: center; padding: 40px;">
                <h3>No scholarships found for ${country}</h3>
                <p>Check back later for updates!</p>
            </div>
        `;
    } else {
        grid.innerHTML = countryScholarships.map(scholarship => createCountryScholarshipCard(scholarship)).join('');
    }

    // Show section and scroll to it
    section.style.display = 'block';
    section.scrollIntoView({ behavior: 'smooth' });
}

function createCountryScholarshipCard(scholarship) {
    return `
        <div class="scholarship-card">
            <div class="scholarship-header">
                <h3>${scholarship.title}</h3>
                <span class="scholarship-badge">${scholarship.funding}</span>
            </div>
            <div class="scholarship-info">
                <div class="info-item">
                    <i class="fas fa-university"></i>
                    <span>${scholarship.university}</span>
                </div>
                <div class="info-item">
                    <i class="fas fa-graduation-cap"></i>
                    <span>${scholarship.level}</span>
                </div>
                <div class="info-item">
                    <i class="fas fa-book"></i>
                    <span>${scholarship.field}</span>
                </div>
                <div class="info-item">
                    <i class="fas fa-calendar"></i>
                    <span>Deadline: ${scholarship.deadline}</span>
                </div>
            </div>
            <p style="margin: 15px 0; color: #666; font-size: 0.9rem;">${scholarship.description}</p>
            <div style="margin: 10px 0;">
                <strong>Benefits:</strong>
                <ul style="margin: 5px 0; padding-left: 20px; font-size: 0.9rem;">
                    ${scholarship.benefits.map(b => `<li>${b}</li>`).join('')}
                </ul>
            </div>
            <div class="scholarship-footer">
                <a href="${scholarship.link}" target="_blank" class="btn-apply">Apply Now</a>
            </div>
        </div>
    `;
}

// Check URL parameters on load
document.addEventListener('DOMContentLoaded', function() {
    const urlParams = new URLSearchParams(window.location.search);
    const country = urlParams.get('country');
    
    if (country) {
        // Convert to proper case
        const countryName = country.charAt(0).toUpperCase() + country.slice(1).toLowerCase();
        const countryMap = {
            'usa': 'USA',
            'uk': 'UK',
            'canada': 'Canada',
            'australia': 'Australia',
            'germany': 'Germany',
            'netherlands': 'Netherlands',
            'sweden': 'Sweden',
            'norway': 'Norway',
            'france': 'France',
            'switzerland': 'Switzerland'
        };
        
        const actualCountry = countryMap[country.toLowerCase()] || countryName;
        loadCountryScholarships(actualCountry);
    }
});
