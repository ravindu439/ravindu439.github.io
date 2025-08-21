// Main Application Logic
class PortfolioApp {
    constructor() {
        this.projects = [];
        this.filteredProjects = [];
        this.availableTags = new Set();
        this.activeTags = new Set();
        this.searchTerm = '';
        this.metrics = null;
        
        this.init();
    }

    async init() {
        this.setupEventListeners();
        await this.loadData();
        this.render();
    }

    setupEventListeners() {
        // Search input
        const searchInput = document.getElementById('searchInput');
        if (searchInput) {
            searchInput.addEventListener('input', (e) => {
                this.searchTerm = e.target.value.toLowerCase();
                this.filterProjects();
            });
        }

        // Modal controls
        const modalOverlay = document.getElementById('modalOverlay');
        const modalClose = document.getElementById('modalClose');
        
        if (modalOverlay) {
            modalOverlay.addEventListener('click', () => this.closeModal());
        }
        
        if (modalClose) {
            modalClose.addEventListener('click', () => this.closeModal());
        }

        // Keyboard events
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape') {
                this.closeModal();
            }
        });

        // Smooth scrolling for anchor links
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
    }

    async loadData() {
        await Promise.all([
            this.loadProjects(),
            this.loadMetrics()
        ]);
    }

    async loadProjects() {
        try {
            const response = await fetch('data/projects.json');
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            this.projects = await response.json();
            this.extractTags();
            this.filteredProjects = [...this.projects];
        } catch (error) {
            console.error('Error loading projects:', error);
            this.projects = this.getFallbackProjects();
            this.extractTags();
            this.filteredProjects = [...this.projects];
        }
    }

    async loadMetrics() {
        try {
            // Try to fetch from the main metrics endpoint
            const response = await fetch('https://raw.githubusercontent.com/ravindu439/ravindu439/main/metrics.json');
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            this.metrics = await response.json();
        } catch (error) {
            console.warn('Could not fetch live metrics, using fallback:', error);
            try {
                // Fallback to local metrics file
                const fallbackResponse = await fetch('data/metrics-fallback.json');
                if (fallbackResponse.ok) {
                    this.metrics = await fallbackResponse.json();
                } else {
                    throw new Error('Fallback metrics not available');
                }
            } catch (fallbackError) {
                console.error('Error loading fallback metrics:', fallbackError);
                this.metrics = this.getFallbackMetrics();
            }
        }
    }

    extractTags() {
        this.availableTags.clear();
        this.projects.forEach(project => {
            if (project.tags && Array.isArray(project.tags)) {
                project.tags.forEach(tag => this.availableTags.add(tag));
            }
        });
    }

    filterProjects() {
        this.filteredProjects = this.projects.filter(project => {
            // Search filter
            const matchesSearch = !this.searchTerm || 
                project.name.toLowerCase().includes(this.searchTerm) ||
                project.description.toLowerCase().includes(this.searchTerm) ||
                (project.tech && project.tech.some(tech => tech.toLowerCase().includes(this.searchTerm)));

            // Tag filter
            const matchesTags = this.activeTags.size === 0 || 
                (project.tags && project.tags.some(tag => this.activeTags.has(tag)));

            return matchesSearch && matchesTags;
        });

        this.renderProjects();
    }

    toggleTag(tag) {
        if (this.activeTags.has(tag)) {
            this.activeTags.delete(tag);
        } else {
            this.activeTags.add(tag);
        }
        this.filterProjects();
        this.renderFilterTags();
    }

    render() {
        this.renderMetrics();
        this.renderFilterTags();
        this.renderProjects();
    }

    renderMetrics() {
        const metricsGrid = document.getElementById('metricsGrid');
        if (!metricsGrid || !this.metrics) return;

        const metricCards = metricsGrid.querySelectorAll('.metric-card');
        const metricsData = [
            { value: this.metrics.repositories || 0, label: 'Repositories' },
            { value: this.metrics.stars || 0, label: 'Stars' },
            { value: this.metrics.followers || 0, label: 'Followers' },
            { value: this.metrics.commits || 0, label: 'Commits' }
        ];

        metricCards.forEach((card, index) => {
            if (metricsData[index]) {
                card.classList.remove('loading');
                const valueElement = card.querySelector('.metric-value');
                const labelElement = card.querySelector('.metric-label');
                
                if (valueElement) {
                    valueElement.textContent = this.formatNumber(metricsData[index].value);
                }
                if (labelElement) {
                    labelElement.textContent = metricsData[index].label;
                }
            }
        });
    }

    renderFilterTags() {
        const filterTagsContainer = document.getElementById('filterTags');
        if (!filterTagsContainer) return;

        filterTagsContainer.innerHTML = '';
        
        Array.from(this.availableTags).sort().forEach(tag => {
            const tagButton = document.createElement('button');
            tagButton.className = `filter-tag ${this.activeTags.has(tag) ? 'active' : ''}`;
            tagButton.textContent = tag;
            tagButton.addEventListener('click', () => this.toggleTag(tag));
            filterTagsContainer.appendChild(tagButton);
        });
    }

    renderProjects() {
        const projectsGrid = document.getElementById('projectsGrid');
        if (!projectsGrid) return;

        if (this.filteredProjects.length === 0) {
            projectsGrid.innerHTML = `
                <div style="grid-column: 1 / -1; text-align: center; padding: 2rem; color: var(--color-text-secondary);">
                    <h3>No projects found</h3>
                    <p>Try adjusting your search terms or filters.</p>
                </div>
            `;
            return;
        }

        projectsGrid.innerHTML = this.filteredProjects.map(project => this.createProjectCard(project)).join('');
        
        // Add click listeners to project cards
        projectsGrid.querySelectorAll('.project-card').forEach((card, index) => {
            card.addEventListener('click', () => this.openProjectModal(this.filteredProjects[index]));
        });
    }

    createProjectCard(project) {
        const techTags = project.tech ? project.tech.map(tech => 
            `<span class="tech-tag">${tech}</span>`
        ).join('') : '';

        const projectTags = project.tags ? project.tags.map(tag => 
            `<span class="project-tag">${tag}</span>`
        ).join('') : '';

        return `
            <div class="project-card" data-project="${project.slug}">
                <h4 class="project-title">${project.name}</h4>
                <p class="project-description">${project.description}</p>
                ${techTags ? `<div class="project-tech">${techTags}</div>` : ''}
                ${projectTags ? `<div class="project-tags">${projectTags}</div>` : ''}
            </div>
        `;
    }

    openProjectModal(project) {
        const modal = document.getElementById('projectModal');
        const modalBody = document.getElementById('modalBody');
        
        if (!modal || !modalBody) return;

        const techList = project.tech ? project.tech.map(tech => `<li>${tech}</li>`).join('') : '';
        const tagList = project.tags ? project.tags.map(tag => `<span class="project-tag">${tag}</span>`).join('') : '';
        
        modalBody.innerHTML = `
            <h2>${project.name}</h2>
            <p class="modal-description">${project.description}</p>
            
            ${project.longDescription ? `<div class="modal-long-description">${project.longDescription}</div>` : ''}
            
            ${project.tech ? `
                <div class="modal-section">
                    <h3>Technologies Used</h3>
                    <ul class="tech-list">${techList}</ul>
                </div>
            ` : ''}
            
            ${project.features ? `
                <div class="modal-section">
                    <h3>Key Features</h3>
                    <ul class="feature-list">
                        ${project.features.map(feature => `<li>${feature}</li>`).join('')}
                    </ul>
                </div>
            ` : ''}
            
            ${project.tags ? `
                <div class="modal-section">
                    <h3>Tags</h3>
                    <div class="project-tags">${tagList}</div>
                </div>
            ` : ''}
            
            <div class="modal-actions">
                ${project.repo ? `<a href="${project.repo}" target="_blank" class="btn btn-primary">View Code</a>` : ''}
                ${project.demo ? `<a href="${project.demo}" target="_blank" class="btn btn-secondary">Live Demo</a>` : ''}
            </div>
        `;

        modal.classList.add('active');
        document.body.style.overflow = 'hidden';
    }

    closeModal() {
        const modal = document.getElementById('projectModal');
        if (modal) {
            modal.classList.remove('active');
            document.body.style.overflow = '';
        }
    }

    formatNumber(num) {
        if (num >= 1000000) {
            return (num / 1000000).toFixed(1) + 'M';
        } else if (num >= 1000) {
            return (num / 1000).toFixed(1) + 'K';
        }
        return num.toString();
    }

    getFallbackProjects() {
        return [
            {
                name: "Embedded System Monitor",
                slug: "embedded-monitor",
                description: "Real-time monitoring system for embedded devices with custom hardware interface.",
                longDescription: "A comprehensive monitoring solution designed for embedded systems, featuring real-time data collection, custom hardware interfaces, and low-level system optimization.",
                tech: ["C", "ARM Cortex-M", "FreeRTOS", "I2C", "SPI"],
                tags: ["embedded", "hardware", "real-time"],
                features: [
                    "Real-time sensor data collection",
                    "Custom PCB design integration",
                    "Low power consumption optimization",
                    "Wireless data transmission"
                ],
                repo: "https://github.com/ravindu439/embedded-monitor",
                demo: null
            },
            {
                name: "RISC-V Processor Design",
                slug: "riscv-processor",
                description: "Custom RISC-V processor implementation with pipeline optimization and cache design.",
                longDescription: "A complete RISC-V processor implementation focusing on performance optimization through advanced pipelining techniques and efficient cache hierarchy design.",
                tech: ["Verilog", "RISC-V ISA", "SystemVerilog", "ModelSim"],
                tags: ["computer-architecture", "processor", "verilog"],
                features: [
                    "5-stage pipeline implementation",
                    "Branch prediction optimization",
                    "L1/L2 cache hierarchy",
                    "Performance analysis tools"
                ],
                repo: "https://github.com/ravindu439/riscv-processor",
                demo: null
            }
        ];
    }

    getFallbackMetrics() {
        return {
            repositories: 25,
            stars: 150,
            followers: 45,
            commits: 1200
        };
    }
}

// Initialize the application when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    window.portfolioApp = new PortfolioApp();
});

// Export for module use
if (typeof module !== 'undefined' && module.exports) {
    module.exports = PortfolioApp;
}
