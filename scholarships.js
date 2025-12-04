// Scholarships Page JavaScript
let allScholarships = scholarshipsDatabase;
let filteredScholarships = allScholarships;

document.addEventListener('DOMContentLoaded', () => {
    displayScholarships(allScholarships);

    const searchInput = document.getElementById('searchInput');
    const countryFilter = document.getElementById('countryFilter');
    const levelFilter = document.getElementById('levelFilter');
    const fieldFilter = document.getElementById('fieldFilter');

    [searchInput, countryFilter, levelFilter, fieldFilter].forEach(el => {
        if (!el) return;
        el.addEventListener('input', applyFilters);
        if (el.tagName === 'SELECT') el.addEventListener('change', applyFilters);
    });

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
                <p>Try adjusting your filters or search terms.</p>
            </div>
        `;
        resultsCount.textContent = 'No scholarships found';
        return;
    }

    const sorted = scholarships.slice().sort((a, b) => b.id - a.id);

    grid.innerHTML = sorted.map(createScholarshipCard).join('');

    resultsCount.textContent = `Showing ${scholarships.length} scholarship${scholarships.length !== 1 ? 's' : ''}`;
}

function createScholarshipCard(s) {
    const applyLink = s.link && s.link.trim() !== ""
        ? s.link
        : "https://globalscholarshiphub.org"; // fallback link

    return `
        <div class="scholarship-card">
            <div class="scholarship-header">
                <h3>${s.title}</h3>
                <span class="scholarship-badge">${s.funding}</span>
            </div>

            <div class="scholarship-info">
                <div class="info-item"><i class="fas fa-map-marker-alt"></i><span>${s.country}</span></div>
                <div class="info-item"><i class="fas fa-university"></i><span>${s.university}</span></div>
                <div class="info-item"><i class="fas fa-graduation-cap"></i><span>${s.level}</span></div>
                <div class="info-item"><i class="fas fa-book"></i><span>${s.field}</span></div>
                <div class="info-item"><i class="fas fa-calendar"></i><span>Deadline: ${s.deadline}</span></div>
            </div>

            <p class="scholarship-desc">${s.description}</p>

            <div class="scholarship-footer">
                <a href="${applyLink}" target="_blank" class="btn-apply">Apply Now</a>
            </div>
        </div>
    `;
}


function applyFilters() {
    const searchTerm = document.getElementById('searchInput').value.toLowerCase();
    const country = document.getElementById('countryFilter').value;
    const level   = document.getElementById('levelFilter').value;
    const field   = document.getElementById('fieldFilter').value;

    filteredScholarships = allScholarships.filter(s => {
        const searchMatch =
            !searchTerm ||
            s.title.toLowerCase().includes(searchTerm) ||
            s.description.toLowerCase().includes(searchTerm) ||
            s.country.toLowerCase().includes(searchTerm) ||
            s.university.toLowerCase().includes(searchTerm);

        const countryMatch = !country || s.country === country;
        const levelMatch = !level || s.level === level;
        const fieldMatch = !field || s.field === field || s.field === 'All Fields';

        return searchMatch && countryMatch && levelMatch && fieldMatch;
    });

    displayScholarships(filteredScholarships);
}

function resetFilters() {
    ['searchInput', 'countryFilter', 'levelFilter', 'fieldFilter'].forEach(id => {
        const el = document.getElementById(id);
        if (el) el.value = '';
    });
    applyFilters();
}
