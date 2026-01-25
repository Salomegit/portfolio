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
        {/* <a
          href="https://rxresu.me/sallygithinji72/salome-githinji-swe-cv"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-[#F24333] text-[#F7F4F3] px-8 py-3 rounded-lg font-medium hover:bg-opacity-90 transition-all"
        >
          View Resume
        </a> */}

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
    {
      {
  title: "Movie Recommendation App",
  description: "A responsive movie discovery app built with Next.js and Tailwind CSS, powered by the TMDB API for real-time movie data and recommendations.",
  tech: ["Next.js", "TMDB API", "Tailwind CSS"],
  github: "https://github.com/Salomegit/movie-recommendation-app",
  live: "https://movie-recommendation-app-alx.vercel.app/",
  image: "data:image/jpeg;base64,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"
},

    }

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
