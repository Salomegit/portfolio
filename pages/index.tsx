import React, { useState, useEffect } from 'react';
import { Cloud, Container, Shield } from 'lucide-react';
import ContactUs from '../components_ui/ContactUs.json';
import Lottie from 'lottie-react';

import { motion } from 'framer-motion';
import Image from 'next/image';
import BlogSection from '../components_ui/sections/BlogSection';
import { Particles } from "@/components/ui/shadcn-io/particles/index";

import { Github, ExternalLink, Mail, MapPin, Phone, FileText, ArrowRight } from 'lucide-react';

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
                className={`relative text-sm font-medium transition-all duration-300 ${activeSection === item.id
                    ? "text-[#F24333]"
                    : "text-[#F7F4F3] hover:text-[#F24333]"
                  }`}
              >
                {item.label}
                {/* Animated underline */}
                <span className={`absolute bottom-0 left-0 w-0 h-0.5 bg-[#F24333] transition-all duration-300 ${activeSection === item.id ? "w-full" : "group-hover:w-full"
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
              className={`block w-full text-left py-3 px-4 text-base font-medium rounded-lg transition-all duration-300 ${activeSection === item.id
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
      {/* Animated Name */}
      <motion.h1
        className="text-6xl md:text-8xl font-bold text-[#F7F4F3] mb-4"
        initial={{ y: 80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        Salome Githinji
      </motion.h1>

      {/* Animated Subtitle */}
      <motion.p
        className="text-xl md:text-2xl text-[#d49d8b] mb-8 max-w-2xl mx-auto"
        initial={{ y: 40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.8, ease: "easeOut" }}
      >
        Building digital solutions that transform ideas into reality
      </motion.p>

      {/* Animated Buttons */}
      <motion.div
        className="flex justify-center space-x-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6, duration: 0.8 }}
      >
        <a
          href="https://rxresu.me/sallygithinji72/salome-githinji-swe-cv"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-[#F24333] text-[#F7F4F3] px-8 py-3 rounded-lg font-medium hover:bg-opacity-90 transition-all"
        >
          View Resume
        </a>

        {/* Contact Me Button */}
        <a
          href="mailto:githinjisalome72@gmail.com"
          className="border border-[#F24333] text-[#F24333] px-8 py-3 rounded-lg font-medium hover:bg-[#F24333] hover:text-[#F7F4F3] transition-all"
        >
          Contact Me
        </a>
      </motion.div>
    </div>
  </section>
);

// About Section
const AboutSection = () => (
  <section className="py-24 px-6 relative overflow-hidden">
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
              <span className="text-[#F7F4F3] text-lg font-medium">
                <Image src={'/images/sallyy.jpeg'} alt={'profile'} fill className="object-cover rounded-2xl" />

              </span>
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
                    JavaScript (ES6+)
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-[#F24333] rounded-full mr-3"></span>
                    Typescript
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-[#F24333] rounded-full mr-3"></span>
                    Python
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
      title: "HonorHub",
      description: "Platform for families to create digital memorials, preserving legacies through shared stories.(In progress)",
      tech: ["React", "Tailwind CSS", "TypeScript"],
      github: null,
      live: "https://honorhub.netlify.app/",
      image: "/images/image.png"
    },
    {
      title: "KCNA Quiz App",
      description: "Interactive quiz app to test knowledge of Kubernetes concepts and best practices",
      tech: ["React", "Tailwind CSS", "TypeScript"],
      github: "https://github.com/Salomegit/kcna-prep-app",
      live: "https://kcna-exam-practice.vercel.app/",
      image: "/images/kcna.png"
    },
    {
      title: "Graphic Design for Predict AI",
      description: "A design template to advertise Predict AI services",
      tech: ["Canva"],
      github: null,
      live: "https://drive.google.com/file/d/1UniLbAIdw6LF308Ed07QHKkRpj5A30Jw/view?usp=sharing",
      image: "/images/predictai.jpg"
    },
    {
      title: "Money Transfer API",
      description: "The API allows for the creation of accounts with a specified balance, retrieving account details by account ID, and transferring money between accounts.",
      tech: ["Django", "DRF", "SQLite"],
      github: "https://github.com/Salomegit/Money-Transfer",
      live: null,
      image: "/images/money.png"
    },
    {
      title: "Chapati Planner",
      description: " A fun and interactive Web app to help users plan and manage their chapatis for guests",
      tech: ["React", "Tailwind CSS", "TypeScript"],
      github: "https://chapo-party-planner.lovable.app/",
      live: "https://chapo-party-planner.lovable.app/",
      image: "/images/chapo.png"
    },
    {


      title: "Employee Recruitment Management System",
      description: "Full-stack recruitment system to streamline hiring processes",
      tech: ["Django", "HTML/CSS", "SQLite"],
      github: "https://github.com/Salomegit/Employee_Recruitment",
      live: "https://fouriqtechnologies-employee-recruitment.onrender.com/",
      // Add image paths for project previews
      image: "/images/employee.png"
    },

  ];

  return (
    <section className="py-20 px-6 bg-gradient-to-b from-[#5B2333] to-[#5B2333]">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-[#F7F4F3] mb-4 bg-gradient-to-r from-[#F7F4F3] to-[#F24333] bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <p className="text-[#F7F4F3] opacity-70 text-lg max-w-2xl mx-auto">
            Showcasing my journey through innovative web solutions and modern technologies
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid lg:grid-cols-2 gap-10">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group relative bg-[#564D4A] rounded-2xl overflow-hidden hover:transform hover:scale-[1.02] transition-all duration-300 shadow-2xl hover:shadow-2xl hover:shadow-[#F24333]/20"
            >
              {/* Project Image Preview - Now occupies half the card */}
              <div className="relative h-64 overflow-hidden bg-gradient-to-br from-[#F24333]/10 to-[#564D4A]">
                {/* Remove the overlay gradient to make image clearer */}
                <div className="w-full h-full flex items-center justify-center">
                  {/* Actual project image - larger and clearer */}
                  <Image
                    src={project.image}
                    alt={project.title}
                    width={400}
                    height={256}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    priority={index === 0}
                  />
                </div>

                {/* Live Demo Badge on Image */}
                {project.live && (
                  <div className="absolute top-4 right-4 flex items-center space-x-1 bg-[#F24333] text-[#F7F4F3] px-3 py-1.5 rounded-full text-sm font-medium z-20">
                    <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                    <span>Live</span>
                  </div>
                )}
              </div>

              {/* Project Content - Now takes the other half */}
              <div className="p-8 relative z-20">
                {/* Project Header */}
                <div className="flex items-start justify-between mb-4">
                  <h3 className="text-2xl font-bold text-[#F7F4F3] group-hover:text-[#F24333] transition-colors duration-300 pr-4">
                    {project.title}
                  </h3>
                </div>

                {/* Description */}
                <p className="text-[#F7F4F3] opacity-80 mb-6 leading-relaxed">
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tech, techIndex) => (
                    <span
                      key={tech}
                      className="bg-[#F24333] text-[#F7F4F3] px-3 py-1.5 rounded-full text-sm font-medium hover:bg-[#F7F4F3] hover:text-[#F24333] transition-all duration-300 cursor-default"
                      style={{
                        animationDelay: `${techIndex * 100}ms`
                      }}
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="flex space-x-4 pt-4 border-t border-[#F7F4F3]/20">
                  {project.github && (
 <a
                    href={project.github}
                    className="flex items-center space-x-2 bg-[#F24333] text-[#F7F4F3] px-6 py-3 rounded-lg hover:bg-[#F7F4F3] hover:text-[#F24333] transition-all duration-300 font-medium group/btn"
                  >
                    <Github className="w-5 h-5 group-hover/btn:scale-110 transition-transform" />
                    <span>View Code</span>
                  </a>
                  )}
                 
                  {project.live && (
                    <a
                      href={project.live}
                      className="flex items-center space-x-2 border-2 border-[#F24333] text-[#F24333] px-6 py-3 rounded-lg hover:bg-[#F24333] hover:text-[#F7F4F3] transition-all duration-300 font-medium group/btn"
                    >
                      <ExternalLink className="w-5 h-5 group-hover/btn:scale-110 transition-transform" />
                      <span>Live Demo</span>
                    </a>
                  )}
                </div>
              </div>

              {/* Hover Effect Border */}
              <div className="absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-[#F24333] transition-all duration-300 pointer-events-none" />
            </div>
          ))}
        </div>

        {/* GitHub CTA */}
        <div className="text-center mt-16">
          <a
            href="https://github.com/salome"
            className="inline-flex items-center space-x-3 bg-[#564D4A] hover:bg-[#F24333] text-[#F7F4F3] px-8 py-4 rounded-xl hover:transform hover:scale-105 transition-all duration-300 font-semibold group/cta"
          >
            <Github className="w-6 h-6 group-hover/cta:scale-110 transition-transform" />
            <span>Explore All Projects on GitHub</span>
            <ArrowRight className="w-5 h-5 group-hover/cta:translate-x-1 transition-transform" />
          </a>
        </div>
      </div>
    </section>
  );
};

// Blogs Section
const BlogsSection = () => (
  <section>
    <BlogSection
    />
  </section>
);

// Badges Section
interface Badge {
  id: string;
  name: string;
  issuer: string;
  date: string;
  icon: React.ReactNode;
  color: string;
  url: string;
}

const BADGES: Badge[] = [
  {
    id: '1',
    name: 'AWS Cloud Practioner',
    issuer: 'Amazon Web Services',
    date: '2025',
    icon: <Cloud className="w-10 h-10" />,
    url: "https://www.credly.com/badges/a813f2a8-fe14-485f-8f64-43b39e22e597",
    color: '#FF9900'
  },
  {
    id: '2',
    name: 'Kubernetes and Cloud Native Associate',
    issuer: 'THe Linux Foundation',
    date: '2025',
    icon: <Container className="w-10 h-10" />,
    url: "https://www.credly.com/badges/491cacf6-89ed-4856-8570-f7f5a47e4e19",
    color: '#61DAFB'
  },
  {
    id: '3',
    name: 'Certified in Cybersecurity',
    issuer: 'ISC2',
    date: '2024',
    url: "https://www.credly.com/badges/9280906c-5c68-4336-9f6d-265225bcffc3",
    icon: <Shield className="w-10 h-10" />,
    color: '#90EE90'
  },
  {
    id: '4',
    name: 'Cybersecurity Fundamentals',
    issuer: 'IBM',
    date: '2024',
    url: "https://www.credly.com/badges/c3c11be5-11ee-446f-85bb-235f4cc4618e",
    icon: <Cloud className="w-10 h-10" />,
    color: 'pink'
  }

];

const BadgesSection: React.FC = () => {
  return (
    <section className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-[#F7F4F3] mb-12 text-center">
          Badges & Recognition
        </h2>
        <div className="grid md:grid-cols-2 gap-6">
          {BADGES.map(badge => (
            <a
              key={badge.id}
              href={badge.url}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#564D4A] rounded-lg p-6 text-center hover:bg-opacity-80 transition-all hover:scale-105 cursor-pointer block"
            >
              <div
                className="w-20 h-20 rounded-full mx-auto mb-4 flex items-center justify-center transition-transform hover:rotate-12"
                style={{ backgroundColor: badge.color }}
              >
                <div className="text-[#F7F4F3]">
                  {badge.icon}
                </div>
              </div>
              <h3 className="text-[#F7F4F3] font-medium text-lg mb-2">
                {badge.name}
              </h3>
              <p className="text-[#F7F4F3] text-sm opacity-75 mb-1">
                {badge.issuer}
              </p>
              <p className="text-[#F7F4F3] text-xs opacity-50">
                {badge.date}
              </p>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

// Certificates Section

interface Certificate {
  id: string;
  name: string;
  issuer: string;
  date: string;
  url: string;
  description?: string;
}

const CERTIFICATES: Certificate[] = [
  {
    id: '1',
    name: 'Girl Code Hackathon',
    issuer: 'Gril Code',
    date: '2024',
    url: 'https://drive.google.com/file/d/16At2ZiOOY8huLDtD7xquKuNY4DgoRftT/view?usp=sharing',
    description: 'Hackathon participation and achievement'
  },
  {
    id: '2',
    name: 'Certified in Cybersecurity',
    issuer: 'Moringa School',
    date: '2024',
    url: 'https://drive.google.com/file/d/1Ne4biMHoo4YKkwkKnvgZWsHz23h8wTZH/view?usp=sharing',
    description: 'Cybersecurity principles and practices'
  },
  {
    id: '3',
    name: 'Cloud and Network Security',
    issuer: 'Cyber Shujaa',
    date: '2025',
    url: 'https://drive.google.com/file/d/1w6RS2br-REc8QxWwGrVGpgMRfIAz6Is0/view?usp=sharing',
    description: 'Advanced cloud security and network protection'
  }, {
    id: '4',
    name: 'Professional Foundations',
    issuer: 'ALX Africa',
    date: '2025',
    url: 'https://drive.google.com/file/d/1xW4IktzU1DJ74_4Wa6OAL2oYvrC4cL3C/view?usp=sharing',
    description: 'Proffessional skills and workplace readiness'
  },
  {
    
  id: '5',
  name: 'ProDev Front-End Software Engineering',
  issuer: 'ALX Africa',
  date: '2025',
  url: 'https://drive.google.com/file/d/1K-hr9xE5_qtIPl9fTde74Imd97cpWtTs/view?usp=sharing',
  description: 'Advanced front-end development covering React, Next.js, TypeScript, Tailwind CSS, React Native, and best practices for building scalable, performant, and secure user interfaces.'

  }

];

const CertificatesSection: React.FC = () => {
  return (
    <section className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-[#F7F4F3] mb-12 text-center">
          Certifications
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          {CERTIFICATES.map((cert) => (
            <a
              key={cert.id}
              href={cert.url}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#564D4A] rounded-lg p-8 text-center hover:bg-opacity-80 transition-all hover:scale-105 group cursor-pointer block"
            >
              <div className="w-16 h-16 bg-[#F24333] rounded-lg mx-auto mb-4 flex items-center justify-center group-hover:rotate-6 transition-transform">
                <FileText className="w-8 h-8 text-[#F7F4F3]" />
              </div>

              <h3 className="text-lg font-semibold text-[#F7F4F3] mb-2 group-hover:text-[#F24333] transition-colors">
                {cert.name}
              </h3>

              <p className="text-[#F24333] font-medium mb-2">
                {cert.issuer}
              </p>

              <p className="text-[#F7F4F3] text-sm opacity-75 mb-3">
                {cert.date}
              </p>

              {cert.description && (
                <p className="text-[#F7F4F3] text-xs opacity-60 mb-4">
                  {cert.description}
                </p>
              )}

              <div className="inline-flex items-center gap-2 text-[#F24333] text-sm font-medium group-hover:gap-3 transition-all">
                View Certificate
                <ExternalLink className="w-4 h-4" />
              </div>
            </a>
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
      <Lottie animationData={ContactUs}
        style={{ width: '300px', height: '300px' }} className="mx-auto mt-12"
      />
      <p className="text-[#F7F4F3] opacity-80 mb-12 text-lg">
        I&apos;m always open to discussing new opportunities and interesting projects.
      </p>
      <div className="flex justify-center space-x-6">
        <a href="mailto:sallygithinji72@gmail.com" className="bg-[#F24333] text-[#F7F4F3] px-8 py-4 rounded-lg font-medium hover:bg-opacity-90 transition-all flex items-center space-x-2">
          <Mail className="w-5 h-5" />
          <span>Get In Touch</span>
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
    switch (activeSection) {
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
