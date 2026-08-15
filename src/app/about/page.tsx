import type { Metadata } from 'next';
import Header from '@/components/common/Header';
import HeroSection from './components/HeroSection';
import OriginStory from './components/OriginStory';
import CareerTimeline from './components/CareerTimeline';
import PersonalMission from './components/PersonalMission';
import CallToAction from './components/CallToAction';

export const metadata: Metadata = {
  title: 'About - TechFolio Pro',
  description: 'Discover the engineering journey, philosophy, and mission of a passionate computer engineering professional dedicated to building innovative solutions that bridge technical excellence with real-world impact.'
};

interface StoryMilestone {
  year: string;
  title: string;
  description: string;
  icon: string;
}

interface PhilosophyPrinciple {
  title: string;
  description: string;
  icon: string;
}

interface TimelineEvent {
  id: number;
  year: string;
  title: string;
  organization: string;
  description: string;
  skills: string[];
  icon: string;
  type: 'education' | 'work' | 'achievement';
}

interface MissionValue {
  title: string;
  description: string;
  icon: string;
}

interface Achievement {
  title: string;
  institution: string;
  year: string;
  gpa: string;
  description: string;
  icon: string;
}

export default function AboutPage() {
  const heroData = {
    name: "Ravindu Lakshan",
    tagline: "Computer Architecture & Embedded Systems Enthusiast",
    image: "/assets/images/profile.png",
    imageAlt: "Ravindu Lakshan - Computer Engineering Undergraduate at University of Peradeniya"
  };

  const originStory = "I am a motivated 4th-year Computer Engineering undergraduate with a broad and applied technical skill set. My core academic interests are rooted in Computer Architecture, Embedded Systems, and futuristic fields like Neuromorphic Computing. I possess hands-on proficiency in advanced software domains, including Machine Learning, Computer Vision, and Web/Software Development. I am passionate about leveraging this diverse knowledge base to engineer innovative solutions, and I bring strong collaborative teamwork capabilities to challenging projects.";

  const milestones: StoryMilestone[] = [
  {
    year: "2020",
    title: "Academic Excellence",
    description: "Secured national rank 831 out of 29,737 in G.C.E. A/L with Z-score 2.0596, District rank 12/1947.",
    icon: "AcademicCapIcon"
  },
  {
    year: "2022",
    title: "University Journey",
    description: "Started B.Sc. Engineering (Hons.) in Computer Engineering at University of Peradeniya.",
    icon: "SparklesIcon"
  },
  {
    year: "2024",
    title: "Teaching & Leadership",
    description: "Served as Casual Instructor and Vice President of Hackers Club, organizing technical workshops.",
    icon: "UserGroupIcon"
  },
  {
    year: "2025",
    title: "Innovation & Projects",
    description: "Leading multiple projects in embedded systems, computer vision, and RISC-V processor design.",
    icon: "RocketLaunchIcon"
  },
  {
    year: "2026",
    title: "Software Engineering Internship",
    description: "Joined WSO2 as a Software Engineering Intern, contributing SCIM 2.0 support to the Thunder Go-based open-source IAM platform.",
    icon: "BriefcaseIcon"
  }];


  const principles: PhilosophyPrinciple[] = [
  {
    title: "Problem-First Approach",
    description: "Focus on understanding the problem deeply before jumping to solutions. Technology should serve real needs.",
    icon: "LightBulbIcon"
  },
  {
    title: "Learn by Building",
    description: "Hands-on experience with hardware and software projects builds deeper understanding than theory alone.",
    icon: "WrenchScrewdriverIcon"
  },
  {
    title: "Collaborative Growth",
    description: "Working with peers, sharing knowledge through teaching, and learning from others accelerates development.",
    icon: "UserGroupIcon"
  },
  {
    title: "Full-Stack Mindset",
    description: "From low-level hardware (Verilog, embedded systems) to high-level web apps - understanding the complete stack matters.",
    icon: "CubeTransparentIcon"
  }];


  const timelineEvents: TimelineEvent[] = [
  {
    id: 1,
    year: "2022-Present",
    title: "B.Sc. Engineering (Hons.) Computer Engineering",
    organization: "University of Peradeniya",
    description: "Current GPA: 3.64/4.0. Focused on Computer Architecture, Embedded Systems, Machine Learning, and Software Development. Active in technical societies and research projects.",
    skills: ["Computer Architecture", "Verilog HDL", "Python", "C/C++", "React.js", "Machine Learning"],
    icon: "AcademicCapIcon",
    type: "education"
  },
  {
    id: 7,
    year: "Apr 2026-Present",
    title: "Software Engineering Intern",
    organization: "WSO2 - Thunder IAM Platform",
    description: "Implementing SCIM 2.0 (RFC 7643/7644) support for Thunder, WSO2's Go-based open-source IAM platform, including Users, Groups, Schemas, ServiceProviderConfig and ResourceTypes endpoints. Built RFC-compliant REST endpoints with request validation, error handling, and multi-valued/complex attribute support, integrated into the auth middleware with CORS and permission-scoped authorization. Wrote unit tests using Go Mockery for service interfaces, achieving high coverage across handler, service, and resource layers.",
    skills: ["Go", "REST APIs", "SCIM 2.0", "Go Mockery", "Git"],
    icon: "CpuChipIcon",
    type: "work"
  },
  {
    id: 8,
    year: "2024-Present",
    title: "Freelance Software Developer",
    organization: "Self-Employed",
    description: "Delivered custom software solutions end-to-end (requirements to deployment) for diverse clients, building responsive web apps and automation scripts using modern tools while meeting deadlines and quality expectations.",
    skills: ["React", "Node.js", "Express.js", "MongoDB", "Electron"],
    icon: "BriefcaseIcon",
    type: "work"
  },
  {
    id: 2,
    year: "2025-2026",
    title: "Neuromorphic Hardware Research",
    organization: "Final Year Research Project, University of Peradeniya",
    description: "Conducting research on energy-efficient neuromorphic accelerator design for spiking neural networks with on-chip learning capabilities. Exploring hardware-software co-design for AI at the edge.",
    skills: ["Neuromorphic Computing", "RTL/HDL", "SNN", "FPGA", "RISC-V"],
    icon: "CpuChipIcon",
    type: "achievement"
  },
  {
    id: 3,
    year: "2024-2025",
    title: "Casual Instructor",
    organization: "Department of Computer Engineering, University of Peradeniya",
    description: "Supervised weekly 3-hour lab sessions for GP106 and CO224 courses, assisting students in Python, Assembly, and Verilog. Helped students understand complex course material and strengthened their programming skills.",
    skills: ["Python", "Assembly", "Verilog", "Teaching", "Mentoring"],
    icon: "CodeBracketIcon",
    type: "work"
  },
  {
    id: 4,
    year: "2024-2025",
    title: "Vice President - Hackers Club",
    organization: "University of Peradeniya",
    description: "Managed executive functions and coordinated technical skill development events. Organized Web Development and Machine Learning training series. Served as resource person teaching HTML/CSS, JavaScript, and React.js.",
    skills: ["Leadership", "Event Management", "Web Development", "Teaching"],
    icon: "UserGroupIcon",
    type: "work"
  },
  {
    id: 5,
    year: "2020",
    title: "G.C.E. Advanced Level (A/L)",
    organization: "National Rank: 831/29,737",
    description: "Achieved Z-score 2.0596 in Physical Science stream, securing admission to Computer Engineering at University of Peradeniya, one of Sri Lanka's premier engineering programs.",
    skills: ["Physics", "Chemistry", "Combined Mathematics"],
    icon: "AcademicCapIcon",
    type: "education"
  },
{
    id: 6,
    year: "2017",
    title: "G.C.E. Ordinary Level (O/L)",
    organization: "Distinction in 9 Subjects",
    description: "Excelled in G.C.E. O/L examinations with distinctions in Mathematics, Science, Sinhala, Buddhism, Art, History, English, Geography, and Agriculture.Secured a strong foundation for advanced studies in Physical Science stream.",
    skills: ["Mathematics", "Science", "Sinhala", "Buddhism", "Art","History", "English", "Geography","Agriculture"],
    icon: "AcademicCapIcon",
    type: "education"
}];


  const missionData = {
    mission: "To leverage my technical skills in Computer Architecture, Embedded Systems, and Software Development to build innovative solutions that solve real-world problems, particularly in hardware-software integration and intelligent systems.",
    vision: "Exploring cutting-edge fields like Neuromorphic Computing and RISC-V architectures while building practical systems that bridge low-level hardware with modern software applications.",
    values: [
    {
      title: "Hands-On Learning",
      description: "Building real projects - from RISC-V processors to smart helmets - provides deeper understanding than theory alone.",
      icon: "WrenchScrewdriverIcon"
    },
    {
      title: "Teaching & Sharing",
      description: "As a Casual Instructor and Hackers Club VP, I believe in learning by teaching and growing together.",
      icon: "AcademicCapIcon"
    },
    {
      title: "Full-Stack Approach",
      description: "From Verilog HDL to React.js - understanding both hardware and software enables better solutions.",
      icon: "CpuChipIcon"
    },
    {
      title: "Real-World Impact",
      description: "Projects like Safe Plus helmet show how technology can directly improve safety and save lives.",
      icon: "ShieldCheckIcon"
    }]

  };


  return (
    <main className="min-h-screen bg-background">
      <Header />
      <HeroSection {...heroData} />
      <OriginStory story={originStory} milestones={milestones} />
      <CareerTimeline events={timelineEvents} />
      <PersonalMission {...missionData} />
      <CallToAction />
    </main>);

}