// Main Portfolio Application
class PortfolioApp {
    constructor() {
        this.projects = [];
        this.academics = null;
        this.filteredProjects = [];
        this.activeFilter = 'all';
        this.searchTerm = '';
        this.modal = null;
        this.observer = null;
        
        this.init();
    }

    async init() {
        this.setupBasicFunctionality();
        await this.loadData();
        this.render();
        this.setupAnimations();
    }

    setupBasicFunctionality() {
        // Set current year in footer
        const yearElement = document.getElementById('year');
        if (yearElement) {
            yearElement.textContent = new Date().getFullYear();
        }

        // Setup smooth scrolling for navigation links
        this.setupSmoothScrolling();
        
        // Setup modal functionality
        this.setupModal();
        
        // Setup search and filter functionality
        this.setupSearchAndFilter();
    }

    setupSmoothScrolling() {
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', (e) => {
                e.preventDefault();
                const target = document.querySelector(anchor.getAttribute('href'));
                if (target) {
                    const navHeight = document.querySelector('.nav').offsetHeight;
                    const targetPosition = target.offsetTop - navHeight - 20;
                    
                    window.scrollTo({
                        top: targetPosition,
                        behavior: 'smooth'
                    });
                }
            });
        });
    }

    setupModal() {
        this.modal = document.getElementById('project-modal');
        const closeBtn = document.getElementById('modal-close');
        
        if (closeBtn) {
            closeBtn.addEventListener('click', () => this.closeModal());
        }

        // Close modal on backdrop click
        if (this.modal) {
            this.modal.addEventListener('click', (e) => {
                if (e.target === this.modal) {
                    this.closeModal();
                }
            });
        }

        // Close modal on Escape key
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && this.modal && this.modal.open) {
                this.closeModal();
            }
        });
    }

    setupSearchAndFilter() {
        const searchInput = document.getElementById('search-input');
        if (searchInput) {
            searchInput.addEventListener('input', (e) => {
                this.searchTerm = e.target.value.toLowerCase().trim();
                this.filterAndRenderProjects();
            });
        }
    }

    async loadData() {
        await Promise.all([
            this.loadProjects(),
            this.loadAcademics()
        ]);
    }

    async loadProjects() {
        try {
            const response = await fetch('data/projects.json');
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            this.projects = await response.json();
            this.filteredProjects = [...this.projects];
        } catch (error) {
            console.error('Error loading projects:', error);
            this.projects = [];
            this.filteredProjects = [];
        }
    }

    async loadAcademics() {
        try {
            const response = await fetch('data/academics.json');
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            this.academics = await response.json();
        } catch (error) {
            console.error('Error loading academics:', error);
            this.academics = null;
        }
    }

    render() {
        this.renderAcademics();
        this.renderFilterButtons();
        this.renderProjects();
    }

    renderAcademics() {
        const container = document.getElementById('academics-content');
        if (!container || !this.academics) {
            if (container) {
                container.innerHTML = '<div class="loading-placeholder">Failed to load academic information.</div>';
            }
            return;
        }

        let html = '';

        // Ordinary Level
        if (this.academics.ol_exam) {
            html += this.renderOLSection(this.academics.ol_exam);
        }

        // Advanced Level
        if (this.academics.al_exam) {
            html += this.renderALSection(this.academics.al_exam);
        }

        // University
        if (this.academics.university) {
            html += this.renderUniversitySection(this.academics.university);
        }

        container.innerHTML = html;
    }

    renderOLSection(olData) {
        const resultsTable = olData.results ? olData.results.map(result => 
            `<tr><td>${result.subject}</td><td>${result.grade}</td></tr>`
        ).join('') : '';

        return `
            <div class="academic-section">
                <h3>Ordinary Level (G.C.E. O/L)</h3>
                <div class="academic-info">
                    <div class="academic-meta">
                        <span class="academic-year">Year: ${olData.year}</span>
                        <span class="academic-school">${olData.school}</span>
                    </div>
                    ${resultsTable ? `
                        <div class="table-scroll">
                            <table>
                                <thead>
                                    <tr>
                                        <th>Subject</th>
                                        <th>Grade</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    ${resultsTable}
                                </tbody>
                            </table>
                        </div>
                    ` : '<p>Results data not available.</p>'}
                </div>
            </div>
        `;
    }

    renderALSection(alData) {
        const resultsTable = alData.results ? alData.results.map(result => 
            `<tr><td>${result.subject}</td><td>${result.grade}</td></tr>`
        ).join('') : '';

        const extrasHtml = (alData.z_score || alData.district_rank || alData.island_rank) ? `
            <div class="al-extras">
                ${alData.z_score ? `<strong>Z-Score:</strong> ${alData.z_score}<br>` : ''}
                ${alData.district_rank ? `<strong>District Rank:</strong> ${alData.district_rank}<br>` : ''}
                ${alData.island_rank ? `<strong>Island Rank:</strong> ${alData.island_rank}` : ''}
            </div>
        ` : '';

        return `
            <div class="academic-section">
                <h3>Advanced Level (G.C.E. A/L)</h3>
                <div class="academic-info">
                    <div class="academic-meta">
                        <span class="academic-year">Year: ${alData.year}</span>
                        <span class="academic-school">Stream: ${alData.stream}</span>
                    </div>
                    ${resultsTable ? `
                        <div class="table-scroll">
                            <table>
                                <thead>
                                    <tr>
                                        <th>Subject</th>
                                        <th>Grade</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    ${resultsTable}
                                </tbody>
                            </table>
                        </div>
                    ` : '<p>Results data not available.</p>'}
                    ${extrasHtml}
                </div>
            </div>
        `;
    }

    renderUniversitySection(uniData) {
        const highlightsList = uniData.highlights ? uniData.highlights.map(highlight => 
            `<li>${highlight}</li>`
        ).join('') : '';

        return `
            <div class="academic-section">
                <h3>University</h3>
                <div class="academic-info">
                    <div class="academic-meta">
                        <span class="academic-year">${uniData.name}</span>
                        <span class="academic-school">${uniData.degree}</span>
                    </div>
                    <div style="margin: 1rem 0;">
                        <p><strong>Current GPA:</strong> ${uniData.current_gpa}</p>
                        <p><strong>Credits Completed:</strong> ${uniData.credits_completed}</p>
                        <p><strong>Expected Graduation:</strong> ${uniData.expected_graduation}</p>
                    </div>
                    ${highlightsList ? `
                        <div>
                            <h4 style="color: var(--accent); margin-bottom: 0.5rem;">Key Highlights</h4>
                            <ul class="university-highlights">
                                ${highlightsList}
                            </ul>
                        </div>
                    ` : ''}
                </div>
            </div>
        `;
    }

    renderFilterButtons() {
        const container = document.getElementById('filter-buttons');
        if (!container) return;

        // Extract unique tags from projects
        const allTags = new Set();
        this.projects.forEach(project => {
            if (project.tags && Array.isArray(project.tags)) {
                project.tags.forEach(tag => allTags.add(tag));
            }
        });

        const tags = ['all', ...Array.from(allTags).sort()];
        
        container.innerHTML = tags.map(tag => `
            <button class="filter-btn ${tag === this.activeFilter ? 'active' : ''}" 
                    data-filter="${tag}">
                ${tag.charAt(0).toUpperCase() + tag.slice(1)}
            </button>
        `).join('');

        // Add click listeners
        container.querySelectorAll('.filter-btn').forEach(btn => {
            btn.addEventListener('click', (e) => {
                this.activeFilter = e.target.dataset.filter;
                this.updateFilterButtons();
                this.filterAndRenderProjects();
            });
        });
    }

    updateFilterButtons() {
        document.querySelectorAll('.filter-btn').forEach(btn => {
            btn.classList.toggle('active', btn.dataset.filter === this.activeFilter);
        });
    }

    filterAndRenderProjects() {
        this.filteredProjects = this.projects.filter(project => {
            // Filter by active filter
            const matchesFilter = this.activeFilter === 'all' || 
                (project.tags && project.tags.includes(this.activeFilter));

            // Filter by search term
            const matchesSearch = !this.searchTerm || 
                project.name.toLowerCase().includes(this.searchTerm) ||
                project.summary.toLowerCase().includes(this.searchTerm) ||
                (project.tech && project.tech.some(tech => 
                    tech.toLowerCase().includes(this.searchTerm)));

            return matchesFilter && matchesSearch;
        });

        this.renderProjects();
    }

    renderProjects() {
        const container = document.getElementById('projects-grid');
        if (!container) return;

        if (this.filteredProjects.length === 0) {
            container.innerHTML = `
                <div style="grid-column: 1 / -1; text-align: center; padding: 3rem; color: var(--text-dim);">
                    <h3>No projects found</h3>
                    <p>Try adjusting your search terms or filters.</p>
                </div>
            `;
            return;
        }

        container.innerHTML = this.filteredProjects.map(project => this.createProjectCard(project)).join('');
        
        // Add click listeners
        container.querySelectorAll('.project-card').forEach((card, index) => {
            card.addEventListener('click', () => this.openProjectModal(this.filteredProjects[index]));
        });

        // Setup animations for new cards
        this.setupCardAnimations();
    }

    createProjectCard(project) {
        const techTags = project.tech ? project.tech.map(tech => 
            `<span class="tech-tag">${tech}</span>`
        ).join('') : '';

        return `
            <div class="project-card" data-project="${project.slug}">
                <h3 class="project-title">${project.name}</h3>
                <p class="project-summary">${project.summary}</p>
                ${techTags ? `<div class="tech-stack">${techTags}</div>` : ''}
                <div class="project-actions">
                    <a href="${project.repo}" target="_blank" rel="noopener" class="btn btn-small btn-outline" onclick="event.stopPropagation()">
                        Repository
                    </a>
                    <button class="btn btn-small btn-primary">Details</button>
                </div>
            </div>
        `;
    }

    openProjectModal(project) {
        if (!this.modal) return;

        const modalTitle = document.getElementById('modal-title');
        const modalBody = document.getElementById('modal-body');

        if (modalTitle) {
            modalTitle.textContent = project.name;
        }

        if (modalBody) {
            const techList = project.tech ? project.tech.map(tech => 
                `<span class="tech-tag">${tech}</span>`
            ).join('') : '';

            modalBody.innerHTML = `
                <div class="modal-description">
                    <p><strong>Summary:</strong> ${project.summary}</p>
                    <p><strong>Description:</strong> ${project.description}</p>
                </div>
                
                ${project.tech ? `
                    <div class="modal-tech">
                        <h4>Technologies Used</h4>
                        <div class="tech-stack">${techList}</div>
                    </div>
                ` : ''}
                
                <div class="modal-actions">
                    <a href="${project.repo}" target="_blank" rel="noopener" class="btn btn-primary">
                        View Repository
                    </a>
                </div>
            `;
        }

        this.modal.showModal();
    }

    closeModal() {
        if (this.modal && this.modal.open) {
            this.modal.close();
        }
    }

    setupAnimations() {
        // Setup intersection observer for card animations
        if ('IntersectionObserver' in window && 
            !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
            
            this.observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('fade-in');
                        this.observer.unobserve(entry.target);
                    }
                });
            }, {
                threshold: 0.1,
                rootMargin: '50px'
            });
        }

        this.setupCardAnimations();
    }

    setupCardAnimations() {
        if (!this.observer) return;

        // Observe all project cards
        document.querySelectorAll('.project-card:not(.fade-in)').forEach(card => {
            this.observer.observe(card);
        });
    }
}

// Initialize the application when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    window.portfolioApp = new PortfolioApp();
});

// Export for module use if needed
if (typeof module !== 'undefined' && module.exports) {
    module.exports = PortfolioApp;
}
