# Ravindu's Portfolio - Computer Engineer

A modern, responsive portfolio website showcasing expertise in computer architecture and embedded systems.

## 🚀 Features

### Core Functionality
- **Dark/Light/Auto Theme Toggle**: Automatically detects system preference and persists user choice
- **Dynamic Projects Grid**: Loads projects from JSON with filtering and search capabilities
- **Interactive Modal System**: Detailed project views with comprehensive information
- **Live GitHub Metrics**: Fetches real-time stats with fallback support
- **Responsive Design**: Optimized for all device sizes

### Technical Features
- **Modern CSS Variables**: Dynamic theming system
- **JavaScript Modules**: Clean, maintainable code architecture
- **Accessibility**: ARIA labels, keyboard navigation, and reduced motion support
- **Performance**: Optimized loading and smooth animations

## 📁 Project Structure

```
ravindu439.github.io/
├── index.html              # Main HTML file
├── styles.css              # Complete CSS with themes
├── scripts/
│   ├── app.js              # Main application logic
│   └── theme.js            # Theme management system
├── data/
│   ├── projects.json       # Project data
│   └── metrics-fallback.json # Fallback metrics
└── README.md               # This file
```

## 🛠️ Technology Stack

- **Frontend**: HTML5, CSS3, Vanilla JavaScript
- **Styling**: CSS Variables, Flexbox, Grid
- **Data**: JSON files for content management
- **Icons**: Unicode emojis for lightweight icons

## 🎨 Design System

### Color Scheme
- **Light Theme**: Clean whites and blues
- **Dark Theme**: Modern dark grays with blue accents
- **Auto Theme**: Follows system preference

### Typography
- **Primary Font**: Inter (Google Fonts)
- **Fallbacks**: System fonts for reliability

## 📱 Responsive Breakpoints

- **Desktop**: 1200px+ (max-width container)
- **Tablet**: 768px - 1199px
- **Mobile**: < 768px

## 🚀 Getting Started

1. **Clone the repository**:
   ```bash
   git clone https://github.com/ravindu439/ravindu439.github.io.git
   ```

2. **Open locally**:
   - Simply open `index.html` in a web browser
   - Or use a local server: `npx serve .`

3. **Deploy to GitHub Pages**:
   - Repository is automatically served at `https://ravindu439.github.io`

## 📊 Data Management

### Projects (`data/projects.json`)
Add new projects with this structure:
```json
{
  "name": "Project Name",
  "slug": "project-slug",
  "description": "Short description",
  "longDescription": "Detailed description",
  "tech": ["Technology", "Stack"],
  "tags": ["category", "type"],
  "features": ["Feature 1", "Feature 2"],
  "repo": "https://github.com/username/repo",
  "demo": "https://demo-url.com"
}
```

### Metrics
- **Live**: Fetches from `https://raw.githubusercontent.com/ravindu439/ravindu439/main/metrics.json`
- **Fallback**: Uses `data/metrics-fallback.json` if live data unavailable

## 🎯 Key Areas of Focus

### Computer Architecture
- RISC-V processor implementations
- Cache memory systems
- Pipeline optimization
- Hardware description languages (Verilog/VHDL)

### Embedded Systems
- Real-time operating systems
- Microcontroller programming
- IoT and sensor networks
- Motor control systems
- Signal processing

### System Design
- Low-level optimization
- Hardware-software integration
- Performance analysis
- Power consumption optimization

## 🌟 Features in Detail

### Theme System
- **Light Mode**: Professional daytime appearance
- **Dark Mode**: Easy on eyes for night coding
- **Auto Mode**: Follows system dark/light preference
- **Persistent**: Remembers user choice across sessions

### Project Filtering
- **Search**: Find projects by name, description, or technology
- **Tag Filtering**: Filter by categories (embedded, fpga, etc.)
- **Real-time**: Instant filtering as you type

### Performance Optimizations
- **Lazy Loading**: Projects load on demand
- **Caching**: Metrics cached in session storage
- **Smooth Animations**: 60fps animations with reduced motion support
- **Lightweight**: No external dependencies beyond Google Fonts

## 📈 Future Enhancements

- [ ] Timeline section for career milestones
- [ ] Blog system for technical articles
- [ ] Service Worker for offline capability
- [ ] Performance metrics dashboard
- [ ] Contact form integration

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

**Built with passion for embedded systems and computer architecture** 🚀