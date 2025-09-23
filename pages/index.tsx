import React, { useState, useEffect } from 'react';
import { Menu, X } from "lucide-react"; 
import { Particles } from "@/components/ui/shadcn-io/particles/index";

import { Github, ExternalLink, Mail, MapPin, Phone, FileText, Award, BookOpen } from 'lucide-react';

// Loading Component with S Icon
const LoadingScreen = ({ isLoading }: { isLoading: boolean }) => {
  if (!isLoading) return null;
  
  return (
    <div className="fixed inset-0 bg-[#5B2333] flex items-center justify-center z-50">
      <div className="relative">
        <div className="text-6xl font-bold text-[#F7F4F3] animate-pulse">S</div>
        <div className="absolute inset-0 border-4 border-[#F24333] rounded-full animate-spin opacity-50"></div>
      </div>
    </div>
  );
};

// Navigation Component
type NavigationProps = {
  activeSection: string;
  setActiveSection: (section: string) => void;
};

const Navigation = ({ activeSection, setActiveSection }: NavigationProps) => {
    const [menuOpen, setMenuOpen] = useState(false);

  const navItems = [
    { id: 'about', label: 'About' },
    { id: 'projects', label: 'Projects' },
    { id: 'blogs', label: 'Blogs' },
    { id: 'badges', label: 'Badges' },
    { id: 'certificates', label: 'Certificates' },
    { id: 'contact', label: 'Contact' }
  ];

  return (
 <nav className="fixed top-0 left-0 right-0 bg-[#5B2333]/95 backdrop-blur-sm z-40 border-b border-[#564D4A]">
      <div className="max-w-6xl mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="text-2xl font-bold text-[#F7F4F3]">SG</div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-6">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => setActiveSection(item.id)}
                className={`text-md font-medium transition-colors ${
                  activeSection === item.id
                    ? "text-[#F24333]"
                    : "text-[#F7F4F3] hover:text-[#F24333]"
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>

          {/* Mobile Hamburger */}
          <button
            className="md:hidden text-[#F7F4F3] focus:outline-none"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {menuOpen && (
        <div className="md:hidden bg-[#5B2333]/95 border-t border-[#564D4A] px-6 py-4 space-y-4">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => {
                setActiveSection(item.id);
                setMenuOpen(false);
              }}
              className={`block w-full text-left text-lg font-medium transition-colors ${
                activeSection === item.id
                  ? "text-[#F24333]"
                  : "text-[#F7F4F3] hover:text-[#F24333]"
              }`}
            >
              {item.label}
            </button>
          ))}
        </div>
      )}
    </nav>
  );
};

// Hero Section
const HeroSection = () => (
  <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
    {/* Dust Background Effect */}
    <div className="absolute inset-0">
      {[...Array(50)].map((_, i) => (
        <div
          key={i}
          className="absolute w-1 h-1 bg-[#F7F4F3] opacity-20 animate-pulse"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 2}s`
          }}
        />
      ))}
    </div>
    
    <div className="text-center z-10 px-6">
      <h1 className="text-6xl md:text-8xl font-bold text-[#F7F4F3] mb-6">
        Salome Githinji
      </h1>
      <p className="text-xl md:text-2xl text-[#564D4A] mb-8 max-w-2xl mx-auto">
        Software Engineer crafting innovative solutions with full-stack expertise
      </p>
      <div className="flex justify-center space-x-4">
        <button className="bg-[#F24333] text-[#F7F4F3] px-8 py-3 rounded-lg font-medium hover:bg-opacity-90 transition-all">
          Get Resume
        </button>
        <button className="border border-[#F24333] text-[#F24333] px-8 py-3 rounded-lg font-medium hover:bg-[#F24333] hover:text-[#F7F4F3] transition-all">
          Contact Me
        </button>
      </div>
    </div>
  </section>
);

// About Section
const AboutSection = () => (
  <section className="py-20 px-6">
    <div className="max-w-6xl mx-auto">
      <h2 className="text-4xl font-bold text-[#F7F4F3] mb-12 text-center">About Me</h2>
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div>
          <div className="w-80 h-80 bg-[#564D4A] rounded-lg mx-auto mb-6 flex items-center justify-center">
            <span className="text-[#F7F4F3] text-lg">Your Photo Here</span>
          </div>
        </div>
        <div className="space-y-6">
          <p className="text-[#F7F4F3] text-lg leading-relaxed">
            Results-driven Software Engineer with expertise in full-stack development and IT support. 
            I&apos;m passionate about leveraging technology to create innovative solutions that solve real-world problems.
          </p>
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <MapPin className="w-5 h-5 text-[#F24333]" />
              <span className="text-[#F7F4F3]">Nairobi, Kenya</span>
            </div>
            <div className="flex items-center space-x-3">
              <Phone className="w-5 h-5 text-[#F24333]" />
              <span className="text-[#F7F4F3]">+254742466933</span>
            </div>
            <div className="flex items-center space-x-3">
              <Mail className="w-5 h-5 text-[#F24333]" />
              <span className="text-[#F7F4F3]">sallygithinji72@gmail.com</span>
            </div>
          </div>
          
          <div className="pt-6">
            <h3 className="text-xl font-semibold text-[#F7F4F3] mb-4">Skills</h3>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <h4 className="text-[#F24333] font-medium mb-2">Languages</h4>
                <ul className="text-[#F7F4F3] space-y-1 text-sm">
                  <li>Python</li>
                  <li>JavaScript (ES6+)</li>
                  <li>TypeScript</li>
                </ul>
              </div>
              <div>
                <h4 className="text-[#F24333] font-medium mb-2">Frameworks</h4>
                <ul className="text-[#F7F4F3] space-y-1 text-sm">
                  <li>Django/DRF</li>
                  <li>React.js/Next.js</li>
                  <li>Express.js</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <Particles
      className="absolute inset-0"
      quantity={50}
      ease={100}
      staticity={100}
      color="#ffffff"
      size={0.5}
    />  
  </section>
);

// Projects Section
const ProjectsSection = () => {
  const projects = [
    {
      title: "Employee Recruitment Management System",
      description: "Full-stack recruitment system to streamline hiring processes",
      tech: ["Django", "HTML/CSS", "SQLite"],
      github: "https://github.com/salome",
      live: "https://fouriqtechnologies-employee-recruitment.onrender.com"
    },
    {
      title: "HonorHub",
      description: "Platform for families to create digital memorials, preserving legacies through shared stories",
      tech: ["React", "Tailwind CSS", "TypeScript"],
      github: "https://github.com/salome/honorhub",
      live: null
    }
  ];

  return (
    <section className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="flex justify-between items-center mb-12">
          <h2 className="text-4xl font-bold text-[#F7F4F3]">Projects</h2>
          <button className="flex items-center space-x-2 text-[#F24333] hover:text-[#F7F4F3] transition-colors">
            <Github className="w-5 h-5" />
            <span>View All on GitHub</span>
          </button>
        </div>
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="bg-[#564D4A] rounded-lg p-6 hover:bg-opacity-80 transition-all">
              <h3 className="text-xl font-semibold text-[#F7F4F3] mb-3">{project.title}</h3>
              <p className="text-[#F7F4F3] opacity-80 mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tech.map(tech => (
                  <span key={tech} className="bg-[#F24333] text-[#F7F4F3] px-3 py-1 rounded-full text-sm">
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex space-x-4">
                <a href={project.github} className="flex items-center space-x-1 text-[#F24333] hover:text-[#F7F4F3] transition-colors">
                  <Github className="w-4 h-4" />
                  <span>Code</span>
                </a>
                {project.live && (
                  <a href={project.live} className="flex items-center space-x-1 text-[#F24333] hover:text-[#F7F4F3] transition-colors">
                    <ExternalLink className="w-4 h-4" />
                    <span>Live</span>
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Blogs Section
const BlogsSection = () => (
  <section className="py-20 px-6">
    <div className="max-w-6xl mx-auto">
      <div className="flex justify-between items-center mb-12">
        <h2 className="text-4xl font-bold text-[#F7F4F3]">Latest Blogs</h2>
        <button className="flex items-center space-x-2 text-[#F24333] hover:text-[#F7F4F3] transition-colors">
          <BookOpen className="w-5 h-5" />
          <span>View All on Hashnode</span>
        </button>
      </div>
      <div className="grid md:grid-cols-3 gap-8">
        {[1, 2, 3].map(i => (
          <div key={i} className="bg-[#564D4A] rounded-lg p-6 hover:bg-opacity-80 transition-all cursor-pointer">
            <div className="w-full h-48 bg-[#5B2333] rounded-lg mb-4 flex items-center justify-center">
              <span className="text-[#F7F4F3]">Blog Image</span>
            </div>
            <h3 className="text-lg font-semibold text-[#F7F4F3] mb-2">Blog Title {i}</h3>
            <p className="text-[#F7F4F3] opacity-80 text-sm">Blog excerpt goes here...</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

// Badges Section
const BadgesSection = () => (
  <section className="py-20 px-6">
    <div className="max-w-6xl mx-auto">
      <h2 className="text-4xl font-bold text-[#F7F4F3] mb-12 text-center">Badges & Recognition</h2>
      <div className="grid md:grid-cols-4 gap-6">
        {[1, 2, 3, 4, 5, 6, 7, 8].map(i => (
          <div key={i} className="bg-[#564D4A] rounded-lg p-6 text-center hover:bg-opacity-80 transition-all">
            <div className="w-20 h-20 bg-[#F24333] rounded-full mx-auto mb-4 flex items-center justify-center">
              <Award className="w-10 h-10 text-[#F7F4F3]" />
            </div>
            <h3 className="text-[#F7F4F3] font-medium">Badge {i}</h3>
          </div>
        ))}
      </div>
    </div>
  </section>
);

// Certificates Section
const CertificatesSection = () => {
  const certificates = [
    { name: "Certified in Cyber Security", issuer: "ISC2" },
    { name: "AWS Cloud Practitioner", issuer: "AWS" },
    { name: "Cloud and Network Security", issuer: "Cyber Shujaa" }
  ];

  return (
    <section className="py-20 px-6">

      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-[#F7F4F3] mb-12 text-center">Certifications</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {certificates.map((cert, index) => (
            <div key={index} className="bg-[#564D4A] rounded-lg p-8 text-center hover:bg-opacity-80 transition-all">
              <div className="w-16 h-16 bg-[#F24333] rounded-lg mx-auto mb-4 flex items-center justify-center">
                <FileText className="w-8 h-8 text-[#F7F4F3]" />
              </div>
              <h3 className="text-lg font-semibold text-[#F7F4F3] mb-2">{cert.name}</h3>
              <p className="text-[#F24333]">{cert.issuer}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Contact Section
const ContactSection = () => (
  <section className="py-20 px-6">
    <div className="max-w-4xl mx-auto text-center">
      <h2 className="text-4xl font-bold text-[#F7F4F3] mb-8">Let&apos;s Work Together</h2>
      <p className="text-[#F7F4F3] opacity-80 mb-12 text-lg">
        I&apos;m always open to discussing new opportunities and interesting projects.
      </p>
      <div className="flex justify-center space-x-6">
        <a href="mailto:sallygithinji72@gmail.com" className="bg-[#F24333] text-[#F7F4F3] px-8 py-4 rounded-lg font-medium hover:bg-opacity-90 transition-all flex items-center space-x-2">
          <Mail className="w-5 h-5" />
          <span>Get In Touch</span>
        </a>
        <a href="tel:+254742466933" className="border border-[#F24333] text-[#F24333] px-8 py-4 rounded-lg font-medium hover:bg-[#F24333] hover:text-[#F7F4F3] transition-all flex items-center space-x-2">
          <Phone className="w-5 h-5" />
          <span>Call Me</span>
        </a>
      </div>
    </div>
  </section>
);

// Main Portfolio Component
const Portfolio = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [activeSection, setActiveSection] = useState('about');

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2500);
    return () => clearTimeout(timer);
  }, []);

  const renderSection = () => {
    switch(activeSection) {
      case 'about': return <AboutSection />;
      case 'projects': return <ProjectsSection />;
      case 'blogs': return <BlogsSection />;
      case 'badges': return <BadgesSection />;
      case 'certificates': return <CertificatesSection />;
      case 'contact': return <ContactSection />;
      default: return <AboutSection />;
    }
  };

  return (
    <div className="bg-[#5B2333] min-h-screen text-white">
      <LoadingScreen isLoading={isLoading} />
      
      {!isLoading && (
        <>
          <Navigation activeSection={activeSection} setActiveSection={setActiveSection} />
          <div className="pt-20">
            {activeSection === 'about' && <HeroSection />}
            {renderSection()}
          </div>
          
          {/* Footer */}
          <footer className="py-8 px-6 border-t border-[#564D4A]">
            <div className="max-w-6xl mx-auto text-center">
              <p className="text-[#F7F4F3] opacity-60">
                © 2025 Salome Githinji. All rights reserved.
              </p>
            </div>
          </footer>
            <Particles
        className="absolute inset-0"
        quantity={100}
        ease={80}
        staticity={50}
        color="#ffffff"
        size={0.8}
      />
        </>
      )}
    </div>
  );
};

export default Portfolio;