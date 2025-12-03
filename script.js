//Mobile Navigation Toggle
document.addEventListener('DOMContentLoaded', function() {
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');

    if (hamburger && navMenu) {
        hamburger.addEventListener('click', function() {
            navMenu.classList.toggle('active');
            hamburger.classList.toggle('active');
        });

        // Close menu when clicking on a link
        document.querySelectorAll('.nav-menu a').forEach(link => {
            link.addEventListener('click', () => {
                navMenu.classList.remove('active');
                hamburger.classList.remove('active');
            });
        });
    }

    // Load featured scholarships on home page
    if (window.location.pathname.endsWith('index.html') || window.location.pathname === '/') {
        loadFeaturedScholarships();
    }
});

// Load Featured Scholarships
function loadFeaturedScholarships() {
    const grid = document.getElementById('featuredScholarships');
    if (!grid) return;

    // Get 6 random featured scholarships
    const featured = scholarshipsDatabase
        .sort(() => 0.5 - Math.random())
        .slice(0, 6);

    grid.innerHTML = featured.map(scholarship => createScholarshipCard(scholarship)).join('');
}

// Create Scholarship Card HTML
function createScholarshipCard(scholarship) {
    return `
        <div class="scholarship-card">
            <div class="scholarship-header">
                <h3>${scholarship.title}</h3>
                <span class="scholarship-badge">${scholarship.funding}</span>
            </div>
            <div class="scholarship-info">
                <div class="info-item">
                    <i class="fas fa-map-marker-alt"></i>
                    <span>${scholarship.country}</span>
                </div>
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
            <div class="scholarship-footer">
                <a href="${scholarship.link}" target="_blank" class="btn-apply">Apply Now</a>
            </div>
        </div>
    `;
}

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Add animation on scroll
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe elements with animation
document.querySelectorAll('.scholarship-card, .country-card, .stat-item').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(20px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(el);
});
