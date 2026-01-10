'use client';

import React, { useState, useEffect } from 'react';
import ProjectCard from './ProjectCard';
import FilterBar from './FilterBar';
import ProjectModal from './ProjectModal';

interface Project {
  id: number;
  title: string;
  category: string;
  description: string;
  fullDescription: string;
  image: string;
  alt: string;
  technologies: string[];
  liveDemo?: string;
  github?: string;
  metrics: {
    label: string;
    value: string;
  }[];
  challenges: string[];
  solutions: string[];
  impact: string;
}

const PortfolioInteractive = () => {
  const [isHydrated, setIsHydrated] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedTechnology, setSelectedTechnology] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  useEffect(() => {
    setIsHydrated(true);
  }, []);

  const projects: Project[] = [
  {
    id: 1,
    title: "Safe Plus - Smart Safety Helmet",
    category: "Embedded Systems",
    description: "Advanced smart safety helmet integrating real-time monitoring, impact detection, and emergency alert systems for industrial workplaces.",
    fullDescription: "Designed an advanced smart safety helmet with real-time monitoring, impact detection, and emergency alerts for industrial workplaces. The system enhances worker safety by enabling immediate hazard detection (toxic gas, impacts, falls) and automated supervisor connectivity via a cloud-based dashboard. Handled complete hardware development, including sensor integration into the helmet, and wrote firmware for all real-time monitoring features.",
    image: "https://images.unsplash.com/photo-1581092160562-40aa08e78837",
    alt: "Industrial safety helmet with integrated sensors and monitoring technology",
    technologies: ["Arduino/ESP32", "MQTT", "AWS IoT", "React", "Node.js", "Express.js", "MongoDB", "Embedded C"],
    github: "https://github.com/cepdnaclk/e20-3yp-SafePlus",
    liveDemo: "https://cepdnaclk.github.io/e20-3yp-SafePlus/",
    metrics: [
    { label: "Project Type", value: "Final Year" },
    { label: "Timeline", value: "8 Months" },
    { label: "Team Role", value: "Hardware Lead" },
    { label: "Status", value: "In Progress" }],

    challenges: [
    "Integrating multiple sensors (gas, accelerometer, GPS) into compact helmet form factor",
    "Ensuring real-time data transmission with low latency in industrial environments",
    "Designing power-efficient system for extended battery life"],

    solutions: [
    "Developed custom PCB design for optimized sensor integration and minimal size",
    "Implemented MQTT protocol with AWS IoT for reliable real-time communication",
    "Created adaptive power management firmware to extend operation time"],

    impact: "The Safe Plus helmet project addresses critical workplace safety issues by providing real-time monitoring and immediate emergency response. The system can detect toxic gas exposure, impact events, and worker falls, automatically alerting supervisors through a web dashboard. This technology has potential to significantly reduce workplace accidents and improve emergency response times in industrial settings."
  },
  {
    id: 2,
    title: "Denture Design Studio",
    category: "Web Development",
    description: "Interactive dental education platform for real-time denture design practice with self-evaluation capabilities.",
    fullDescription: "Developed a comprehensive graphical platform for real-time denture design practice for dental students at the Faculty of Dental Sciences, University of Peradeniya. The platform provides a safe learning environment where students can practice denture design techniques, track their progress, and receive self-evaluation feedback by comparing with model answers. Implemented student activity tracking, developed the Assessor page frontend, and built the complete backend logic using Node.js/Express.js.",
    image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef",
    alt: "Modern web application interface for dental education with design tools",
    technologies: ["React.js", "Next.js", "Express.js", "MongoDB", "Node.js"],
    github: "https://github.com/cepdnaclk/e20-co227-Denture-Design-Studio",
    liveDemo: "https://cepdnaclk.github.io/e20-co227-Denture-Design-Studio/",
    metrics: [
    { label: "Project Type", value: "Course Project" },
    { label: "Timeline", value: "4 Months" },
    { label: "Team Role", value: "Full Stack Dev" },
    { label: "Status", value: "Completed" }],

    challenges: [
    "Creating intuitive real-time design interface for complex dental procedures",
    "Implementing accurate activity tracking without impacting user experience",
    "Developing fair self-evaluation system with model answer comparison"],

    solutions: [
    "Built responsive canvas-based design interface with real-time updates",
    "Implemented non-intrusive background tracking with MongoDB time-series data",
    "Created intelligent comparison algorithm that highlights key design differences"],

    impact: "The Denture Design Studio has been adopted by the Faculty of Dental Sciences, University of Peradeniya, providing dental students with a practical learning platform. The system enables students to practice complex denture design procedures in a risk-free environment, improving their technical skills before working with actual patients. The self-evaluation feature helps students identify areas for improvement independently."
  },
  {
    id: 3,
    title: "RV32IM Pipeline Processor",
    category: "Hardware Design",
    description: "Complete RISC-V 32-bit processor pipeline implementation in Verilog HDL with hazard handling and verification.",
    fullDescription: "Implemented a complete RISC-V (RV32IM) processor pipeline in Verilog HDL for the CO502 Advanced Computer Architecture course. The design includes all five pipeline stages (IF, ID, EX, MEM, WB) with comprehensive hazard detection and handling mechanisms including data forwarding and pipeline stalling. Developed extensive testbench to verify processor functionality across various instruction types and edge cases.",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475",
    alt: "Digital circuit design and processor architecture visualization",
    technologies: ["Verilog HDL", "RISC-V ISA", "Vivado", "ModelSim"],
    github: "https://github.com/cepdnaclk/e20-co502-RV32IM-Pipeline-Implementation",
    metrics: [
    { label: "Project Type", value: "Course Project" },
    { label: "Pipeline Stages", value: "5 Stages" },
    { label: "Instructions", value: "RV32IM Set" },
    { label: "Status", value: "Completed" }],

    challenges: [
    "Implementing efficient hazard detection for data and control hazards",
    "Ensuring correct data forwarding between pipeline stages",
    "Creating comprehensive testbench for verification of complex scenarios"],

    solutions: [
    "Designed forwarding unit that detects RAW hazards and forwards data from EX/MEM stages",
    "Implemented stall logic for load-use hazards and branch prediction",
    "Developed systematic testbench covering all instruction types and hazard cases"],

    impact: "The RV32IM processor implementation demonstrates deep understanding of computer architecture principles including pipelining, hazard handling, and instruction set architecture. The project provides a working RISC-V processor core that can execute complex programs efficiently. This hands-on experience with hardware design is fundamental for future work in computer architecture and embedded systems."
  },
  {
    id: 4,
    title: "NeuroDrive - Driver Behavior Monitoring",
    category: "Computer Vision",
    description: "Real-time driver behavior monitoring system using computer vision and deep learning for safety enhancement.",
    fullDescription: "Developed an advanced driver behavior monitoring system that uses computer vision and deep learning to detect drowsiness, distraction, and unsafe driving behaviors in real-time. The system analyzes facial landmarks, eye aspect ratio, and head pose to identify signs of driver fatigue or distraction, providing timely alerts to prevent accidents. Implemented using Python with OpenCV and TensorFlow.",
    image: "https://images.unsplash.com/photo-1449965408869-eaa3f722e40d",
    alt: "Driver monitoring system with computer vision overlay showing facial landmarks",
    technologies: ["Python", "OpenCV", "TensorFlow", "MediaPipe", "NumPy"],
    github: "https://github.com/ravindu439/NeuroDrive",
    metrics: [
    { label: "Accuracy", value: "90%+" },
    { label: "Real-time", value: "30+ FPS" },
    { label: "Detection", value: "Multi-class" },
    { label: "Status", value: "Completed" }],

    challenges: [
    "Achieving real-time processing speed while maintaining high accuracy",
    "Handling varying lighting conditions and camera angles",
    "Detecting subtle signs of drowsiness before critical moments"],

    solutions: [
    "Optimized model architecture for efficient inference on standard hardware",
    "Implemented adaptive preprocessing pipeline for lighting normalization",
    "Combined multiple indicators (EAR, MAR, head pose) for robust detection"],

    impact: "NeuroDrive demonstrates the application of computer vision and machine learning to address real-world safety challenges. The system can detect driver drowsiness and distraction with high accuracy in real-time, potentially preventing accidents caused by impaired driver attention. The project showcases expertise in computer vision, deep learning, and real-time system development."
  },
  {
    id: 5,
    title: "Shadow Removal using Computer Vision",
    category: "Computer Vision",
    description: "Advanced shadow detection and removal system using computer vision techniques for image enhancement.",
    fullDescription: "Implemented a sophisticated shadow removal system using computer vision and image processing techniques. The project focuses on detecting shadow regions in images and removing them while preserving the underlying texture and color information. The system uses a combination of illumination-invariant color spaces, shadow detection algorithms, and adaptive recovery techniques to produce high-quality shadow-free images.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71",
    alt: "Computer vision image processing showing before and after shadow removal",
    technologies: ["Python", "OpenCV", "NumPy", "scikit-learn"],
    github: "https://github.com/ravindu439/shadow-removal",
    metrics: [
    { label: "Detection Rate", value: "85%+" },
    { label: "Quality", value: "High PSNR" },
    { label: "Technique", value: "CV-based" },
    { label: "Status", value: "Completed" }],

    challenges: [
    "Accurately distinguishing shadows from dark objects and textures",
    "Recovering original color and intensity under shadow regions",
    "Maintaining image quality while removing shadow artifacts"],

    solutions: [
    "Developed multi-stage pipeline using illumination-invariant color space transformation",
    "Implemented adaptive recovery algorithm based on surrounding pixel statistics",
    "Applied post-processing filters to ensure smooth shadow-free transitions"],

    impact: "The shadow removal project demonstrates advanced understanding of computer vision principles and image processing techniques. The system can significantly improve image quality for applications such as object detection, scene analysis, and image enhancement. This work showcases skills in algorithm design, implementation, and optimization for practical computer vision applications."
  }];


  const categories = ['All', ...Array.from(new Set(projects.map((p) => p.category)))];
  const allTechnologies = Array.from(new Set(projects.flatMap((p) => p.technologies)));
  const technologies = ['All', ...allTechnologies];

  const filteredProjects = projects.filter((project) => {
    const matchesCategory = selectedCategory === 'All' || project.category === selectedCategory;
    const matchesTechnology = selectedTechnology === 'All' || project.technologies.includes(selectedTechnology);
    const matchesSearch = searchQuery === '' ||
    project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    project.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
    project.technologies.some((tech) => tech.toLowerCase().includes(searchQuery.toLowerCase()));

    return matchesCategory && matchesTechnology && matchesSearch;
  });

  const handleClearFilters = () => {
    setSelectedCategory('All');
    setSelectedTechnology('All');
    setSearchQuery('');
  };

  const handleViewDetails = (id: number) => {
    const project = projects.find((p) => p.id === id);
    if (project) {
      setSelectedProject(project);
    }
  };

  if (!isHydrated) {
    return (
      <div className="min-h-screen bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="animate-pulse space-y-8">
            <div className="h-32 bg-muted rounded-lg"></div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[1, 2, 3, 4, 5, 6].map((i) =>
              <div key={i} className="h-96 bg-muted rounded-lg"></div>
              )}
            </div>
          </div>
        </div>
      </div>);

  }

  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Filter Bar */}
        <FilterBar
          categories={categories}
          technologies={technologies}
          selectedCategory={selectedCategory}
          selectedTechnology={selectedTechnology}
          searchQuery={searchQuery}
          onCategoryChange={setSelectedCategory}
          onTechnologyChange={setSelectedTechnology}
          onSearchChange={setSearchQuery}
          onClearFilters={handleClearFilters} />


        {/* Projects Grid */}
        {filteredProjects.length > 0 ?
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProjects.map((project) =>
          <ProjectCard
            key={project.id}
            project={project}
            onViewDetails={handleViewDetails} />

          )}
          </div> :

        <div className="text-center py-16">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-muted rounded-full mb-4">
              <span className="text-3xl">🔍</span>
            </div>
            <h3 className="text-xl font-headline font-bold text-foreground mb-2">
              No Projects Found
            </h3>
            <p className="text-base font-body text-muted-foreground mb-6">
              Try adjusting your filters or search query
            </p>
            <button
            onClick={handleClearFilters}
            className="px-6 py-3 bg-primary text-primary-foreground rounded-md text-sm font-cta font-semibold hover:bg-primary/90 transition-smooth shadow-card">

              Clear All Filters
            </button>
          </div>
        }
      </div>

      {/* Project Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)} />

    </div>);

};

export default PortfolioInteractive;