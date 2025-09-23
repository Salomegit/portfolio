import React, { useState, useEffect } from 'react';
import { Menu, X } from "lucide-react"; 
import { Particles } from "@/components/ui/shadcn-io/particles/index";

import { Github, ExternalLink, Mail, MapPin, Phone, FileText, Award, BookOpen } from 'lucide-react';

// Loading Component with S Icon
const LoadingScreen = ({ isLoading }: { isLoading: boolean }) => {
  if (!isLoading) return null;
  
  return (
    <div className="fixed inset-0 bg-[#5B2333] flex items-center justify-center z-50">
<div className="relative w-24 h-24 flex items-center justify-center">
  {/* Text */}
  <div className="text-3xl font-bold text-[#F7F4F3] animate-pulse z-10">S</div>

  {/* Hexagon border */}
  <div className="absolute inset-0 border-4 border-[#F24333] opacity-50 animate-spin [clip-path:polygon(25%_5%,75%_5%,100%_50%,75%_95%,25%_95%,0%_50%)]"></div>
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
 <nav className="p-2 top-0 fixed  left-0 right-0  bg-[#5B2333]/90 backdrop-blur-lg z-50 border-b border-[#564D4A]/50 shadow-lg">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="flex justify-between items-center h-16">
      {/* Logo */}
      <div className="text-2xl font-bold bg-gradient-to-r from-[#F24333] to-[#F7F4F3] bg-clip-text text-transparent">
        SG
      </div>

      {/* Desktop Menu */}
      <div className="hidden md:flex items-center space-x-8">
        {navItems.map((item) => (
          <button
            key={item.id}
            onClick={() => setActiveSection(item.id)}
            className={`relative text-sm font-medium transition-all duration-300 ${
              activeSection === item.id
                ? "text-[#F24333]"
                : "text-[#F7F4F3] hover:text-[#F24333]"
            }`}
          >
            {item.label}
            {/* Animated underline */}
            <span className={`absolute bottom-0 left-0 w-0 h-0.5 bg-[#F24333] transition-all duration-300 ${
              activeSection === item.id ? "w-full" : "group-hover:w-full"
            }`} />
          </button>
        ))}
        {/* CTA Button */}

      </div>

      {/* Mobile Hamburger */}
      <button
        className="md:hidden text-[#F7F4F3] hover:text-[#F24333] transition-colors duration-300 p-2 rounded-lg hover:bg-[#5B2333]/50"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        {menuOpen ? (
          <div className="w-6 h-6 relative">
            <div className="absolute top-1/2 left-1/2 w-5 h-0.5 bg-current transform -translate-x-1/2 -translate-y-1/2 rotate-45" />
            <div className="absolute top-1/2 left-1/2 w-5 h-0.5 bg-current transform -translate-x-1/2 -translate-y-1/2 -rotate-45" />
          </div>
        ) : (
          <div className="w-6 h-6 flex flex-col justify-between">
            <div className="w-full h-0.5 bg-current" />
            <div className="w-full h-0.5 bg-current" />
            <div className="w-full h-0.5 bg-current" />
          </div>
        )}
      </button>
    </div>
  </div>

  {/* Mobile Menu Dropdown */}
  {menuOpen && (
    <div className="md:hidden bg-[#5B2333]/95 backdrop-blur-lg border-t border-[#564D4A]/50 px-6 py-4 space-y-3 animate-in slide-in-from-top duration-300">
      {navItems.map((item) => (
        <button
          key={item.id}
          onClick={() => {
            setActiveSection(item.id);
            setMenuOpen(false);
          }}
          className={`block w-full text-left py-3 px-4 text-base font-medium rounded-lg transition-all duration-300 ${
            activeSection === item.id
              ? "text-[#F24333] bg-[#564D4A]/30"
              : "text-[#F7F4F3] hover:text-[#F24333] hover:bg-[#564D4A]/20"
          }`}
        >
          {item.label}
        </button>
      ))}
      {/* Mobile CTA Button */}
     
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
      <h1 className="text-6xl md:text-8xl font-bold text-[#F7F4F3] mb-4">
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
  <section className="py-24 px-6 relative overflow-hidden">
    <div className="max-w-6xl mx-auto">
      <div className="text-center mb-16">
        <h2 className="text-5xl font-bold text-[#F7F4F3] mb-4 bg-gradient-to-r from-[#F7F4F3] via-[#F24333] to-[#F7F4F3] bg-clip-text text-transparent">
          About Me
        </h2>
        <div className="w-24 h-1 bg-gradient-to-r from-[#F24333] to-[#564D4A] mx-auto rounded-full"></div>
      </div>
      
      <div className="grid lg:grid-cols-2 gap-12 items-center">
        {/* Image Section */}
        <div className="relative group">
          <div className="relative w-80 h-80 mx-auto">
            <div className="absolute inset-0 bg-gradient-to-r from-[#F24333] to-[#564D4A] rounded-2xl blur-lg opacity-50 group-hover:opacity-75 transition-all duration-500"></div>
            <div className="relative w-full h-full bg-[#564D4A] rounded-2xl flex items-center justify-center border-2 border-[#564D4A]/50 group-hover:border-[#F24333]/30 transition-all duration-500">
              <span className="text-[#F7F4F3] text-lg font-medium">Your Photo Here</span>
            </div>
          </div>
        </div>

        {/* Content Section */}
        <div className="space-y-8">
          <div className="text-[#F7F4F3] text-lg leading-relaxed space-y-6">
            {/* Intro paragraph */}
            <p className="text-xl leading-8">
              I&apos;m a Software Engineer with expertise in building responsive, user-friendly full stack web applications using 
              <span className="font-semibold text-[#38bdf8]"> React.js</span>, 
              <span className="font-semibold text-[#38bdf8]"> Next.js</span>,
              <span className="font-semibold text-[#38bdf8]"> Django</span>, and 
              <span className="font-semibold text-[#38bdf8]"> Tailwind CSS</span>. 
              I love crafting seamless digital experiences that make ideas and designs come alive.
            </p>

            {/* Background section */}
            <div className="bg-[#564D4A]/20 p-6 rounded-2xl border-l-4 border-[#F24333]">
              <h2 className="text-xl font-bold mb-4 text-[#E0E0E0]">Background:</h2>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="text-[#F24333] mr-3 mt-1">•</span>
                  Skilled in React.js, Next.js, Tailwind CSS, and modern frontend tools.
                </li>
                <li className="flex items-start">
                  <span className="text-[#F24333] mr-3 mt-1">•</span>
                  Experience with backend development using Django and RESTful APIs.
                </li>
                <li className="flex items-start">
                  <span className="text-[#F24333] mr-3 mt-1">•</span>
                  Strong understanding of responsive design and cross-browser compatibility.
                </li>
                <li className="flex items-start">
                  <span className="text-[#F24333] mr-3 mt-1">•</span>
                  Committed to writing clean, maintainable, and well-documented code.
                </li>
              </ul>
            </div>

            {/* Closing paragraph */}
            <p className="text-xl leading-8 italic border-l-4 border-[#38bdf8] pl-4 py-2">
              When not coding, I enjoy shooting hoops 🏀, reading 📚, and hiking Kenya&apos;s stunning trails 🥾🏔️ 
              adventures that keep me energized and inspired!
            </p>
          </div>

          {/* Contact Info */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="flex items-center space-x-3 p-3 bg-[#564D4A]/20 rounded-lg hover:bg-[#564D4A]/30 transition-all duration-300">
              <MapPin className="w-5 h-5 text-[#F24333] flex-shrink-0" />
              <span className="text-[#F7F4F3]">Nairobi, Kenya</span>
            </div>
            <div className="flex items-center space-x-3 p-3 bg-[#564D4A]/20 rounded-lg hover:bg-[#564D4A]/30 transition-all duration-300">
              <Phone className="w-5 h-5 text-[#F24333] flex-shrink-0" />
              <span className="text-[#F7F4F3]">+254742466933</span>
            </div>
            <div className="flex items-center space-x-3 p-3 bg-[#564D4A]/20 rounded-lg hover:bg-[#564D4A]/30 transition-all duration-300 col-span-1 sm:col-span-2">
              <Mail className="w-5 h-5 text-[#F24333] flex-shrink-0" />
              <span className="text-[#F7F4F3]">sallygithinji72@gmail.com</span>
            </div>
          </div>
          
          {/* Skills Section */}
          <div className="pt-6">
            <h3 className="text-2xl font-bold text-[#F7F4F3] mb-6 text-center">Skills & Technologies</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-[#564D4A]/20 p-5 rounded-2xl hover:bg-[#564D4A]/30 transition-all duration-300">
                <h4 className="text-[#F24333] font-semibold mb-3 text-lg">Languages</h4>
                <ul className="text-[#F7F4F3] space-y-2">
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-[#F24333] rounded-full mr-3"></span>
                    Python
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-[#F24333] rounded-full mr-3"></span>
                    JavaScript (ES6+)
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-[#F24333] rounded-full mr-3"></span>
                    TypeScript
                  </li>
                </ul>
              </div>
              <div className="bg-[#564D4A]/20 p-5 rounded-2xl hover:bg-[#564D4A]/30 transition-all duration-300">
                <h4 className="text-[#F24333] font-semibold mb-3 text-lg">Frameworks</h4>
                <ul className="text-[#F7F4F3] space-y-2">
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-[#F24333] rounded-full mr-3"></span>
                    Django/DRF
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-[#F24333] rounded-full mr-3"></span>
                    React.js/Next.js
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-[#F24333] rounded-full mr-3"></span>
                    Express.js
                  </li>
                </ul>
              </div>
              <div className="bg-[#564D4A]/20 p-5 rounded-2xl hover:bg-[#564D4A]/30 transition-all duration-300">
                <h4 className="text-[#F24333] font-semibold mb-3 text-lg">Tools & Platforms</h4>
                <ul className="text-[#F7F4F3] space-y-2">
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-[#F24333] rounded-full mr-3"></span>
                    Git/GitHub
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-[#F24333] rounded-full mr-3"></span>
                    Docker
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-[#F24333] rounded-full mr-3"></span>
                    AWS
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-[#F24333] rounded-full mr-3"></span>
                    Google Cloud
                  </li>
                </ul>
              </div>
              <div className="bg-[#564D4A]/20 p-5 rounded-2xl hover:bg-[#564D4A]/30 transition-all duration-300">
                <h4 className="text-[#F24333] font-semibold mb-3 text-lg">Databases</h4>
                <ul className="text-[#F7F4F3] space-y-2">
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-[#F24333] rounded-full mr-3"></span>
                    PostgreSQL
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-[#F24333] rounded-full mr-3"></span>
                    SQLite
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <Particles
      className="absolute inset-0 -z-10"
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