'use client';

import { useState, useEffect } from 'react';
import SkillCategory from './SkillCategory';
import CertificationCard from './CertificationCard';
import LearningJourneyTimeline from './LearningJourneyTimeline';
import TechnicalMetrics from './TechnicalMetrics';
import Icon from '@/components/ui/AppIcon';

interface Skill {
  name: string;
  level: number;
  yearsOfExperience: number;
  projects: number;
}

interface SkillCategoryData {
  title: string;
  icon: string;
  skills: Skill[];
  color: string;
}

interface Certification {
  title: string;
  issuer: string;
  date: string;
  credentialId: string;
  image: string;
  alt: string;
  verificationUrl: string;
}

interface TimelineEvent {
  year: string;
  title: string;
  description: string;
  type: 'education' | 'certification' | 'skill' | 'achievement';
}

interface Metric {
  label: string;
  value: string;
  icon: string;
  color: string;
}


export default function SkillsInteractive() {
  const [isHydrated, setIsHydrated] = useState(false);
  const [activeTab, setActiveTab] = useState<'skills' | 'certifications' | 'journey'>('skills');
  const [selectedCertification, setSelectedCertification] = useState<Certification | null>(null);
  const [timelineEvents, setTimelineEvents] = useState<TimelineEvent[]>([]);

  useEffect(() => {
    setIsHydrated(true);
    // Fetch timeline from JSON
    fetch('/data/timeline.json')
      .then(res => res.json())
      .then(data => setTimelineEvents(data.timeline))
      .catch(err => console.error('Error loading timeline:', err));
  }, []);

  const skillCategories: SkillCategoryData[] = [
  {
    title: "Hardware & Embedded Systems",
    icon: "🔧",
    color: "bg-orange-500",
    skills: [
    { name: "Verilog HDL", level: 85, yearsOfExperience: 3, projects: 2 },
    { name: "Arduino/ESP32", level: 75, yearsOfExperience: 2, projects: 1 },
    { name: "Embedded C", level: 82, yearsOfExperience: 2, projects: 1 },
    { name: "RISC-V Architecture", level: 80, yearsOfExperience: 2, projects: 2 },
    { name: "Digital Design", level: 80, yearsOfExperience: 2, projects: 2 }]

  },
  {
    title: "Web Development",
    icon: "🌐",
    color: "bg-blue-500",
    skills: [
    { name: "React.js", level: 88, yearsOfExperience: 2, projects: 3 },
    { name: "Next.js", level: 85, yearsOfExperience: 2, projects: 3 },
    { name: "Node.js", level: 82, yearsOfExperience: 2, projects: 3 },
    { name: "Express.js", level: 85, yearsOfExperience: 2, projects: 4 },
    { name: "MongoDB", level: 80, yearsOfExperience: 2, projects: 4 },
    { name: "Flask", level: 72, yearsOfExperience: 1, projects: 1 },
    { name: "REST APIs", level: 85, yearsOfExperience: 2, projects: 5 },
  {name:"streamlit", level: 75, yearsOfExperience: 0.5, projects: 1 }]

  },
  {
    title: "Programming Languages",
    icon: "💻",
    color: "bg-emerald-500",
    skills: [
    { name: "Go", level: 75, yearsOfExperience: 0.5, projects: 1 },
    { name: "Python", level: 90, yearsOfExperience: 3, projects: 3 },
    { name: "Java", level: 75, yearsOfExperience: 2, projects: 1 },
    { name: "C/C++", level: 85, yearsOfExperience: 3, projects: 2 },
    { name: "JavaScript", level: 88, yearsOfExperience: 2, projects: 4 },
    { name: "TypeScript", level: 80, yearsOfExperience: 1, projects: 1 },
    { name: "SQL", level: 75, yearsOfExperience: 2, projects: 2 },
    { name: "Assembly", level: 75, yearsOfExperience: 2, projects: 0 }]

  },
  {
    title: "Machine Learning & Computer Vision",
    icon: "🤖",
    color: "bg-purple-500",
    skills: [
    { name: "TensorFlow", level: 80, yearsOfExperience: 1, projects: 2 },
    { name: "OpenCV", level: 85, yearsOfExperience: 2, projects: 2 },
    { name: "Scikit-learn", level: 78, yearsOfExperience: 1, projects: 2 },
    { name: "NumPy/Pandas", level: 85, yearsOfExperience: 2, projects: 3 },
    { name: "Matplotlib", level: 78, yearsOfExperience: 1, projects: 2 },
    { name: "YOLOv8", level: 75, yearsOfExperience: 1, projects: 1 }]

  },
  {
    title: "IoT, Cloud & DevOps",
    icon: "☁️",
    color: "bg-cyan-500",
    skills: [
    { name: "AWS IoT", level: 75, yearsOfExperience: 1, projects: 1 },
    { name: "MQTT Protocol", level: 80, yearsOfExperience: 1, projects: 2 },
    { name: "Docker", level: 78, yearsOfExperience: 1, projects: 2 },
    { name: "Google Cloud Platform", level: 70, yearsOfExperience: 1, projects: 1 },
    { name: "Linux", level: 80, yearsOfExperience: 2, projects: 3 },
    { name: "Firebase", level: 70, yearsOfExperience: 1, projects: 1 }]

  },
  {
    title: "Tools & Version Control",
    icon: "🛠️",
    color: "bg-red-500",
    skills: [
    { name: "Git/GitHub", level: 92, yearsOfExperience: 3, projects: 8 },
    { name: "VS Code", level: 90, yearsOfExperience: 3, projects: 10},
    { name: "Go Mockery", level: 75, yearsOfExperience: 0.5, projects: 1 },
    { name: "JUnit", level: 70, yearsOfExperience: 1, projects: 1 },
    { name: "Postman", level: 80, yearsOfExperience: 2, projects: 3 },
    { name: "Synopsys EDA (ICC2/PrimePower)", level: 72, yearsOfExperience: 1, projects: 1 },
    { name: "Vivado/Modelsim", level: 75, yearsOfExperience: 1, projects: 1 }]

  }];


  const certifications: Certification[] = [
  {
    title: "Python for Beginners",
    issuer: "University of Moratuwa (CODL)",
    date: "December 2025",
    credentialId: "vzizJBNK5E",
    image: "/assets/certification/python-for-beginer-uom.png",
    alt: "Python programming certificate from University of Moratuwa online learning programme",
    verificationUrl: "https://open.uom.lk/verify"
  },
  {
    title: "Frontend Developer (React)",
    issuer: "HackerRank",
    date: "December 2024",
    credentialId: "B4AF0E7A0AB7",
    image: "/assets/certification/front-end-dev.png",
    alt: "HackerRank Frontend Developer React certification showing role certification test completion",
    verificationUrl: "#"
  },
  {
    title: "Introduction to Python",
    issuer: "Sololearn",
    date: "March 2024",
    credentialId: "CC-IGFUF15B",
    image: "/assets/certification/intro-to-python-solo.png",
    alt: "Sololearn Python course completion certificate",
    verificationUrl: "#"
  },
  {
    title: "C Intermediate",
    issuer: "Sololearn",
    date: "December 2023",
    credentialId: "CC-J7C6AA27",
    image: "/assets/certification/c-intermidiate.png",
    alt: "Sololearn C intermediate programming course certificate",
    verificationUrl: "#"
  },
  {
    title: "Introduction to C",
    issuer: "Sololearn",
    date: "November 2023",
    credentialId: "CC-S50UZFC08",
    image: "/assets/certification/introduction-to-c.png",
    alt: "Sololearn C programming introduction course certificate",
    verificationUrl: "#"
  }];


  const metrics: Metric[] = [
  {
    label: "Current GPA",
    value: "3.64/4.0",
    icon: "AcademicCapIcon",
    color: "bg-primary"
  },
  {
    label: "Projects Completed",
    value: "8",
    icon: "CheckBadgeIcon",
    color: "bg-success"
  },
  {
    label: "Hardware Projects",
    value: "3",
    icon: "CpuChipIcon",
    color: "bg-accent"
  },
  {
    label: "Study Year",
    value: "4th Year",
    icon: "ClockIcon",
    color: "bg-secondary"
  }];

  if (!isHydrated) {
    return (
      <div className="min-h-screen bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="animate-pulse space-y-8">
            <div className="h-12 bg-muted rounded w-1/3" />
            <div className="h-6 bg-muted rounded w-2/3" />
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[1, 2, 3, 4, 5].map((i) =>
              <div key={i} className="h-64 bg-muted rounded-lg" />
              )}
            </div>
          </div>
        </div>
      </div>);

  }

  return (
    <div className="space-y-16">
      {/* Hero Section */}
      <section className="text-center space-y-6">
        <div className="inline-flex items-center space-x-2 px-4 py-2 bg-primary/10 rounded-full">
          <Icon name="SparklesIcon" size={20} variant="solid" className="text-primary" />
          <span className="text-sm font-body font-semibold text-primary">Technical Expertise</span>
        </div>
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-headline font-bold text-foreground">
          Skills & Technical Expertise
        </h1>
        <p className="text-lg sm:text-xl text-secondary max-w-3xl mx-auto font-body leading-relaxed">
          Technical skills developed through coursework, projects, and hands-on experience in hardware design, embedded systems, and software development.
        </p>
      </section>

      {/* Technical Metrics */}
      <section>
        <TechnicalMetrics metrics={metrics} />
      </section>

      {/* Tab Navigation */}
      <section>
        <div className="flex items-center justify-center space-x-4 mb-12">
          <button
            onClick={() => setActiveTab('skills')}
            className={`px-6 py-3 rounded-lg font-body font-semibold transition-smooth ${
            activeTab === 'skills' ? 'bg-primary text-primary-foreground shadow-card' : 'bg-card text-foreground hover:bg-muted'}`
            }>

            <div className="flex items-center space-x-2">
              <Icon name="CodeBracketIcon" size={20} variant={activeTab === 'skills' ? 'solid' : 'outline'} />
              <span>Technical Skills</span>
            </div>
          </button>
          <button
            onClick={() => setActiveTab('certifications')}
            className={`px-6 py-3 rounded-lg font-body font-semibold transition-smooth ${
            activeTab === 'certifications' ?
            'bg-primary text-primary-foreground shadow-card' : 'bg-card text-foreground hover:bg-muted'}`
            }>

            <div className="flex items-center space-x-2">
              <Icon name="AcademicCapIcon" size={20} variant={activeTab === 'certifications' ? 'solid' : 'outline'} />
              <span>Roles ,Experience & certifications</span>
            </div>
          </button>
          <button
            onClick={() => setActiveTab('journey')}
            className={`px-6 py-3 rounded-lg font-body font-semibold transition-smooth ${
            activeTab === 'journey' ? 'bg-primary text-primary-foreground shadow-card' : 'bg-card text-foreground hover:bg-muted'}`
            }>

            <div className="flex items-center space-x-2">
              <Icon name="MapIcon" size={20} variant={activeTab === 'journey' ? 'solid' : 'outline'} />
              <span>Project Timeline</span>
            </div>
          </button>
        </div>

        {/* Skills Tab */}
        {activeTab === 'skills' &&
        <div className="space-y-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {skillCategories.map((category, index) =>
            <SkillCategory
              key={index}
              title={category.title}
              icon={category.icon}
              skills={category.skills}
              color={category.color} />

            )}
            </div>
          </div>
        }

        {/* Certifications Tab */}
        {activeTab === 'certifications' &&
        <div>
            <div className="text-center mb-12">
              <h2 className="text-3xl font-headline font-bold text-foreground mb-4">
                Professional Certifications
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {certifications.map((cert, index) =>
            <CertificationCard 
              key={index} 
              certification={cert} 
              onClick={() => setSelectedCertification(cert)}
            />
            )}
            </div>
          </div>
        }

        {/* Learning Journey Tab */}
        {activeTab === 'journey' &&
        <div>
            <div className="text-center mb-12">
              <h2 className="text-3xl font-headline font-bold text-foreground mb-4">
                Learning Journey Timeline
              </h2>
              <p className="text-lg text-secondary font-body max-w-2xl mx-auto">
                A chronological view of my professional development, skill acquisition, and key milestones in my computer engineering career.
              </p>
            </div>
            <div className="max-w-4xl mx-auto">
              <LearningJourneyTimeline events={timelineEvents} />
            </div>
          </div>
        }
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-primary to-accent rounded-2xl p-12 text-center">
        <h2 className="text-3xl font-headline font-bold text-white mb-4">
          Ready to Collaborate?
        </h2>
        <p className="text-lg text-white/90 font-body mb-8 max-w-2xl mx-auto">
          Let's discuss how my technical expertise can contribute to your next project or team.
        </p>
        <div className="flex items-center justify-center space-x-4">
          <a
            href="/contact"
            className="px-8 py-3 bg-white text-primary rounded-lg font-cta font-semibold hover:bg-white/90 transition-smooth shadow-card">

            Get in Touch
          </a>
          <a
            href="/portfolio"
            className="px-8 py-3 bg-transparent border-2 border-white text-white rounded-lg font-cta font-semibold hover:bg-white/10 transition-smooth">

            View Projects
          </a>
        </div>
      </section>

      {/* Certification Modal */}
      {selectedCertification && (
        <div 
          className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4 animate-in fade-in duration-200"
          onClick={() => setSelectedCertification(null)}
        >
          <div 
            className="relative max-w-4xl w-full bg-background rounded-lg overflow-hidden shadow-elevated"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedCertification(null)}
              className="absolute top-4 right-4 z-10 w-10 h-10 bg-black/50 hover:bg-black/70 text-white rounded-full flex items-center justify-center transition-smooth"
            >
              <Icon name="XMarkIcon" size={24} variant="outline" />
            </button>
            <div className="p-6">
              <div className="mb-4">
                <h3 className="text-2xl font-headline font-bold text-foreground mb-2">
                  {selectedCertification.title}
                </h3>
                <p className="text-lg font-body text-secondary mb-1">
                  {selectedCertification.issuer}
                </p>
                <p className="text-sm font-mono text-muted-foreground">
                  {selectedCertification.date} • ID: {selectedCertification.credentialId}
                </p>
              </div>
              <div className="relative w-full bg-muted rounded-lg overflow-hidden">
                <img
                  src={selectedCertification.image}
                  alt={selectedCertification.alt}
                  className="w-full h-auto"
                />
              </div>
              {selectedCertification.verificationUrl !== "#" && (
                <div className="mt-4 text-center">
                  <a
                    href={selectedCertification.verificationUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center space-x-2 px-6 py-3 bg-primary text-primary-foreground rounded-lg font-cta font-semibold hover:bg-primary/90 transition-smooth"
                  >
                    <Icon name="CheckBadgeIcon" size={20} variant="solid" />
                    <span>Verify Certificate</span>
                  </a>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </div>);

}