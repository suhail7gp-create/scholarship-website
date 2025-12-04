// Scholarships Page JavaScript
let allScholarships = scholarshipsDatabase;
let filteredScholarships = allScholarships;

document.addEventListener('DOMContentLoaded', function() {
    // Load all scholarships
    displayScholarships(allScholarships);

    // Set up event listeners for filters
    const searchInput = document.getElementById('searchInput');
    const countryFilter = document.getElementById('countryFilter');
    const levelFilter = document.getElementById('levelFilter');
    const fieldFilter = document.getElementById('fieldFilter');

    if (searchInput) {
        searchInput.addEventListener('input', applyFilters);
    }
    if (countryFilter) {
        countryFilter.addEventListener('change', applyFilters);
    }
    if (levelFilter) {
        levelFilter.addEventListener('change', applyFilters);
    }
    if (fieldFilter) {
        fieldFilter.addEventListener('change', applyFilters);
    }

    // Check URL parameters for pre-filtering
    const urlParams = new URLSearchParams(window.location.search);
    const levelParam = urlParams.get('level');
    if (levelParam && levelFilter) {
        levelFilter.value = levelParam.charAt(0).toUpperCase() + levelParam.slice(1);
        applyFilters();
    }
});

function displayScholarships(scholarships) {
    const grid = document.getElementById('scholarshipsGrid');
    const resultsCount = document.getElementById('resultsCount');

    if (!grid) return;

    if (scholarships.length === 0) {
        grid.innerHTML = `
            <div style="grid-column: 1/-1; text-align: center; padding: 40px;">
                <i class="fas fa-search" style="font-size: 4rem; color: #ddd; margin-bottom: 20px;"></i>
                <h3>No scholarships found</h3>
                <p>Try adjusting your filters or search terms</p>
            </div>
        `;
        if (resultsCount) {
            resultsCount.textContent = 'No scholarships found';
        }
        return;
    }

    // Sort scholarships: newest first (by ID in reverse)
    const sortedScholarships = scholarships.slice().sort((a, b) => b.id - a.id);

    grid.innerHTML = sortedScholarships.map(scholarship => createScholarshipCard(scholarship)).join('');

    if (resultsCount) {
        resultsCount.textContent = `Showing ${scholarships.length} scholarship${scholarships.length !== 1 ? 's' : ''}`;
    }

    // Add animation to cards
    const cards = grid.querySelectorAll('.scholarship-card');
    cards.forEach((card, index) => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        setTimeout(() => {
            card.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
        }, index * 50);
    });
}

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
            <p style="margin: 15px 0; color: #666; font-size: 0.9rem;">${scholarship.description}</p>
            <div class="scholarship-footer">
                <a href="${scholarship.applyLink}" target="_blank" class="btn-apply">Apply Now</a>
            </div>
        </div>
    `;
}

function applyFilters() {
    const searchTerm = document.getElementById('searchInput')?.value.toLowerCase() || '';
    const countryValue = document.getElementById('countryFilter')?.value || '';
    const levelValue = document.getElementById('levelFilter')?.value || '';
    const fieldValue = document.getElementById('fieldFilter')?.value || '';

    filteredScholarships = allScholarships.filter(scholarship => {
        const matchesSearch = searchTerm === '' || 
            scholarship.title.toLowerCase().includes(searchTerm) ||
            scholarship.description.toLowerCase().includes(searchTerm) ||
            scholarship.country.toLowerCase().includes(searchTerm) ||
            scholarship.university.toLowerCase().includes(searchTerm);

        const matchesCountry = countryValue === '' || scholarship.country === countryValue;
        const matchesLevel = levelValue === '' || scholarship.level === levelValue;
        const matchesField = fieldValue === '' || scholarship.field === fieldValue || scholarship.field === 'All Fields';

        return matchesSearch && matchesCountry && matchesLevel && matchesField;
    });

    displayScholarships(filteredScholarships);
}

function resetFilters() {
    document.getElementById('searchInput').value = '';
    document.getElementById('countryFilter').value = '';
    document.getElementById('levelFilter').value = '';
    document.getElementById('fieldFilter').value = '';
    applyFilters();
}
