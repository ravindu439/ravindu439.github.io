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
    description: "Current GPA: 3.59/4.0. Focused on Computer Architecture, Embedded Systems, Machine Learning, and Software Development. Active in technical societies and research projects.",
    skills: ["Computer Architecture", "Verilog HDL", "Python", "C/C++", "React.js", "Machine Learning"],
    icon: "AcademicCapIcon",
    type: "education"
  },
  {
    id: 2,
    year: "2024-2025",
    title: "Casual Instructor",
    organization: "Department of Computer Engineering, University of Peradeniya",
    description: "Supervised weekly 3-hour lab sessions for GP106 and CO224 courses, assisting students in Python, Assembly, and Verilog. Helped students understand complex course material and strengthened their programming skills.",
    skills: ["Python", "Assembly", "Verilog", "Teaching", "Mentoring"],
    icon: "CodeBracketIcon",
    type: "work"
  },
  {
    id: 3,
    year: "2024-2025",
    title: "Safe Plus - Smart Safety Helmet",
    organization: "University Final Year Project",
    description: "Designed advanced smart safety helmet with real-time monitoring, impact detection, and emergency alerts for industrial workplaces. Handled complete hardware development and firmware for all monitoring features.",
    skills: ["Arduino/ESP32", "MQTT", "AWS IoT", "Embedded Systems", "MERN Stack"],
    icon: "CpuChipIcon",
    type: "achievement"
  },
  {
    id: 4,
    year: "2024",
    title: "Denture Design Studio",
    organization: "University Group Project",
    description: "Developed graphical platform for real-time denture design practice for dental students. Implemented student activity tracking, assessor page frontend, and backend logic using Node.js/Express.js.",
    skills: ["React.js", "Next.js", "Express.js", "MongoDB"],
    icon: "CodeBracketIcon",
    type: "achievement"
  },
  {
    id: 5,
    year: "2024-2025",
    title: "Vice President - Hackers Club",
    organization: "University of Peradeniya",
    description: "Managed executive functions and coordinated technical skill development events. Organized Web Development and Machine Learning training series. Served as resource person teaching HTML/CSS, JavaScript, and React.js.",
    skills: ["Leadership", "Event Management", "Web Development", "Teaching"],
    icon: "UserGroupIcon",
    type: "work"
  },
  {
    id: 6,
    year: "2024-2025",
    title: "RV32IM Pipeline Implementation",
    organization: "CO502 Course Project",
    description: "Implemented RISC-V (RV32IM) processor pipeline in Verilog including IF, ID, EX, MEM, WB stages with hazard handling. Developed comprehensive testbench to verify processor functionality.",
    skills: ["Verilog HDL", "Computer Architecture", "RISC-V", "Hardware Design"],
    icon: "CpuChipIcon",
    type: "achievement"
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