import React, { useState, useEffect, useRef } from 'react';
import { 
  motion, 
  AnimatePresence, 
  LayoutGroup 
} from 'motion/react';
import { 
  Sparkles, 
  Code, 
  Layers, 
  Database, 
  Construction, 
  GraduationCap, 
  Award, 
  Send, 
  Github, 
  Linkedin, 
  Twitter, 
  ExternalLink, 
  ChevronRight, 
  Info, 
  ArrowRight, 
  Menu, 
  X, 
  Briefcase, 
  Lightbulb, 
  CheckCircle2, 
  Heart,
  Download
} from 'lucide-react';
import Alishba from "./assets/Alishba.png";
import project1 from "./assets/projects/project1.png";
import project2 from "./assets/projects/project2.png";
import project3 from "./assets/projects/project3.png";
import project4 from "./assets/projects/project4.jpeg";
import project5 from "./assets/projects/project5.png";
import project6 from "./assets/projects/project6.png";
import project7 from "./assets/projects/project7.jpeg";
import project8 from "./assets/projects/project8.jpeg";
import project9 from "./assets/projects/project9.jpeg";
import project10 from "./assets/projects/project10.jpg";
import project11 from "./assets/projects/project11.png"; 
import project12 from "./assets/projects/project12.png";
import project13 from "./assets/projects/project13.png";
import project14 from "./assets/projects/project14.png";
// Interfaces
interface Project {
  id: string;
  title: string;
  description: string;
  category: 'ai' | 'web' | 'Mobile' | 'data-analytics' | 'research';
  technologies: string[];
  image: string;
  links: Array<{
    label: string;
    href: string;
  }>;
}

interface Experience {
  id: string;
  role: string;
  company: string;
  period: string;
  description: string;
  bullets: string[];
  skills: string[];
}

interface AwardType {
  id: string;
  title: string;
  position: string;
  year: string;
  description: string;
  icon: string;
}

export default function App() {
  const [activeTab, setActiveTab] = useState('home');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [selectedAward, setSelectedAward] = useState<AwardType | null>(null);
  const [activeFilter, setActiveFilter] = useState<'all' | 'ai' | 'web' | 'Mobile' | 'data-analytics' | 'research'>('all');
  const [lightboxImage, setLightboxImage] = useState<string | null>(null);
  
  // Custom states for contact form
  const [formName, setFormName] = useState('');
  const [formEmail, setFormEmail] = useState('');
  const [formMessage, setFormMessage] = useState('');
  const [formState, setFormState] = useState<'idle' | 'sending' | 'success'>('idle');

  // Parallax Tilt Effect for Portrait
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const xc = rect.width / 2;
    const yc = rect.height / 2;
    const tiltX = (yc - y) / 12;
    const tiltY = (x - xc) / 12;
    setTilt({ x: tiltX, y: tiltY });
  };
  
  const handleMouseLeave = () => {
    setTilt({ x: 0, y: 0 });
  };

  const demoCvLink = 'https://drive.google.com/file/d/1DEMO-CV-LINK/view?usp=sharing';
  const demoCertificatesLink = 'https://drive.google.com/drive/folders/1DEMO-CERTIFICATES-LINK?usp=sharing';
  const demoVisualizationLink = 'https://drive.google.com/file/d/1DEMO-VISUALIZATION-LINK/view?usp=sharing';
  const demoResearchLink = 'https://drive.google.com/file/d/1DEMO-RESEARCH-LINK/view?usp=sharing';

  // Data declarations
  const projects: Project[] = [
    {
      id: 'neednest-mobile-app',
      title: 'NeedNest (Mobile App)',
      description: 'Cross-platform donation mobile application connecting donors with people in need. Includes Firebase Authentication, item & monetary donations, and an intuitive UI/UX.',
      category: 'Mobile',
      technologies: ['Flutter', 'Dart', 'Firebase'],
      image: project11,
      links: []
    },
    {
      id: 'trainmate',
      title: 'TrainMate',
      description: 'Multi-tenant SaaS training platform using Agentic AI and RAG to provide personalized company training through an AI chatbot.',
      category: 'ai',
      technologies: ['React.js', 'Node.js', 'Firebase', 'Pinecone', 'Gemini'],
      image: project3,
      links: [
        { label: 'GitHub', href: 'https://github.com/rahemeen1/TrainMate-Chatbot.git' }
      ]
    },
    {
      id: 'ieee-kinnaird-student-branch-website',
      title: 'IEEE Kinnaird Student Branch Website',
      description: 'Official website for IEEE Kinnaird Student Branch with responsive design, reusable components, and improved navigation.',
      category: 'web',
      technologies: ['React.js', 'JavaScript', 'CSS'],
      image: project6,
      links: [
        { label: 'Live Demo', href: 'https://6730bd89d83707a80a8b6795--ieee-kinnaird.netlify.app/' },
        { label: 'GitHub', href: 'https://github.com/Malishba15/IEEE-KSB-Website.git' }
      ]
    },
    {
      id: 'neednest-wireframes',
      title: 'NeedNest - Donation App Wireframes',
      description: 'UI/UX wireframes designed in Figma for the NeedNest donation platform, focusing on navigation and accessibility.',
      category: 'Mobile',
      technologies: ['Figma'],
      image: project1,
      links: [
        { label: 'Live Demo', href: 'https://www.figma.com/proto/uFAVmjizQtS4fd0e1v7Yra/NeedNest-NewFINAL?node-id=0-1&t=Vm1NPjeLQp0LqseT-1' }
      ]
    },
    {
      id: 'neednest-web',
      title: 'NeedNest - Donation Platform (Web)',
      description: 'Full-stack donation website allowing users to donate items and money with authentication and responsive UI.',
      category: 'web',
      technologies: ['React', 'JavaScript', 'HTML/CSS', 'PHP'],
      image: project4,
      links: [
        { label: 'GitHub', href: 'https://github.com/Malishba15/Neednest-Full-stack-Website.git' },
        { label: 'Live Demo', href: 'https://neednest.netlify.app/' }
      ]
    },
    {
      id: 'daster-khawan-amal',
      title: 'Daster-Khawan Amal: A Plate to Serve',
      description: 'Developed a website for a non-profit organization that connects donors with those in need, facilitating food donations and support.',
      category: 'web',
      technologies: ['React', 'Netlify', 'Tailwind CSS', 'Forms', 'JavaScript'],
      image: project2,
      links: [
        { label: 'Live Demo', href: 'https://acp-project-9b906.web.app/' },
        { label: 'GitHub', href: 'https://github.com/Malishba15/Fundraising' }
      ]
    },
    {
      id: 'eighty-eight-salon-website',
      title: 'Eighty Eight Salon Website',
      description: 'Freelance responsive salon website with backend functionality and modern front-end design.',
      category: 'web',
      technologies: ['HTML', 'CSS', 'PHP', 'MySQL'],
      image: project8,
      links: [
        { label: 'GitHub', href: 'https://github.com/Malishba15/Fully-Functional-Salon-Website.git' },
        { label: 'Live Demo', href: 'https://eightyeightsalon.netlify.app/' }
      ]
    },
    {
      id: 'food-recipe-app',
      title: 'Food Recipe App',
      description: 'Recipe search application using third-party APIs to fetch real-time recipe data with a responsive interface.',
      category: 'web',
      technologies: ['React', 'JavaScript', 'APIs'],
      image: project10,
      links: [
        { label: 'GitHub', href: 'https://github.com/Malishba15/React_FoodApp.git' }
      ]
    },
    {
      id: 'personal-finance-tracker',
      title: 'Personal Finance Tracker',
      description: 'Personal finance web app for tracking income, expenses, and savings goals with categorized transactions.',
      category: 'web',
      technologies: ['React', 'CSS', 'JavaScript'],
      image: project7,
      links: [
        { label: 'GitHub', href: 'https://github.com/Malishba15/Personal-Finance-Tracker.git' }
      ]
    },
    {
      id: 'todo-app',
      title: 'To-Do App',
      description: 'Task management application supporting add, edit, delete, and complete task functionality.',
      category: 'web',
      technologies: ['React', 'CSS', 'JavaScript'],
      image: project9,
      links: [
        { label: 'GitHub', href: 'https://github.com/Malishba15/Todo-App.git' }
      ]
    },
    {
      id: 'pakistan-elections-dataset-analysis',
      title: 'Pakistan Elections Dataset Analysis',
      description: 'Analyzed Pakistan Elections Dataset of 54 years using Power BI to visualize voting patterns, trends, and insights for informed decision-making.',
      category: 'data-analytics',
      technologies: ['Power BI', 'Data Analytics', 'Visualization', 'Predictive Analytics', 'Descriptive Analytics'],
      image: project12,
      links: [
        { label: 'View Visualization', href: "https://drive.google.com/file/d/1AtQ32PP2A8smDdy7F936VSV7AF7PCWvb/view?usp=sharing" }
      ]
    },
    {
      id: 'ethical-auditing-credit-scoring',
      title: 'Ethical Auditing in Automated Credit Scoring: Detecting and Mitigating Proxy Bias using Feature Importance Masking',
      description: 'A research project focusing on detecting and mitigating proxy bias using feature importance masking in credit scoring.',
      category: 'research',
      technologies: ['Python', 'SHAP', 'Research', 'Innovation AI', 'FinTech'],
      image: project13,
      links: [
        { label: 'See Details', href: "https://drive.google.com/file/d/1v9RSAUrpBeYNHgHiP578YaPri-FK9PAW/view?usp=drive_link" }
      ]
    },
    {
      id: 'sentiment-aware-semantic-graph-model',
      title: 'Sentiment-Aware Semantic Graph Model for Dynamic Multi-Dimensional Topic Recognition',
      description: 'A research project focused on developing a hybrid approach combining PageRank and Transformer models for dynamic topic recognition.',
      category: 'research',
      technologies: ['Python', 'Research', 'AI', 'Google Scholar', 'PageRank', 'Transformer Models'],
      image: project14,
      links: [
        { label: 'See Details', href: "https://drive.google.com/file/d/1VILw8sUxySBB4mOKL7KYNXustsKULxUL/view?usp=drive_link" }
      ]
    }
  ];

  const experiences: Experience[] = [
    {
      id: 'tenx-fe',
      role: 'Front End Engineer Intern',
      company: 'TenX',
      period: 'Jun 2024 — Aug 2024',
      description: 'Built and optimized responsive web applications using React.js and JavaScript. Developed a reusable component library that streamlined front-end architecture and reduced development time across the team.',
      bullets: [
        'Built highly responsive UI modules using React.js and Tailwind CSS',
        'Collaborated closely with design leads to bridge aesthetic precision and stateful components, maintaining precise brand integrity.'
      ],
      skills: ['React.js', 'Tailwind CSS', 'Component Design', 'JavaScript', 'Git']
    },
    {
      id: 'tenx-be',
      role: 'Back End Engineer Intern',
      company: 'TenX',
      period: 'Jul 2023 — Aug 2023',
      description: 'Developed .NET (C#) applications integrated with MySQL databases. Delivered three complete projects — a banking management system, food recipe app, and Tic-Tac-Toe game — with a focus on business logic and efficient data handling.',
      bullets: [
        'Developed scalable REST endpoints in .NET and C#, dealing with microservices patterns.',
        'Conducted thorough API verification workflows using Postman environments and customized automated scripts.'
      ],
      skills: ['.NET', 'C#', 'MySQL', 'REST APIs', 'Postman', 'Git']
    }
  ];

  const awards: AwardType[] = [
    {
      id: 'arduino-Competition',
      title: 'Arduino Competition -',
      position: '1st Position',
      year: '2023',
      description: 'Designed, built, and programmed an autonomous line-follower robot using C++ and Arduino microcontrollers. The robot achieved record-breaking traversal velocity by optimizing feedback algorithms.',
      icon: 'trophy'
    },
    {
      id: 'scratch-programming',
      title: 'Scratch Programming Competition',
      position: '2nd Position',
      year: '2022',
      description: 'Developed an immersive, story-rich educational game designed to teach school children fundamental logical structures, utilizing clean graphics and engaging gamified loops.',
      icon: 'gamepad'
    }
  ];

  const marqueeImages = [
  {
    image: project5,
    title: "Aurdino Robot",
  },
  {
    image: project2,
    title: "Daster-Khawane-Amal",
  },
  {
    image: project3,
    title: "TrainMate - AI Chatbot",
  },
  {
    image: project8,
    title: "Eighty 8 salon website",
  },
];

  const contactRecipient = 'malishba909@gmail.com';

  // Contact form submission
  const handleFormSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!formName || !formEmail || !formMessage) return;
    setFormState('sending');

    const mailSubject = encodeURIComponent(`Portfolio inquiry from ${formName}`);
    const mailBody = encodeURIComponent(`Name: ${formName}\nEmail: ${formEmail}\n\n${formMessage}`);
    const mailtoLink = `mailto:${contactRecipient}?subject=${mailSubject}&body=${mailBody}`;

    const payload = new URLSearchParams({
      'form-name': 'contact',
      recipient: contactRecipient,
      name: formName,
      email: formEmail,
      message: formMessage,
      'bot-field': '',
    }).toString();

    try {
      if (import.meta.env.DEV) {
        window.open(mailtoLink, '_blank', 'noopener,noreferrer');
      } else {
        const response = await fetch('/', {
          method: 'POST',
          headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
          body: payload,
        });

        if (!response.ok) {
          throw new Error('Contact form submission failed');
        }
      }

      setFormState('success');
      setFormName('');
      setFormEmail('');
      setFormMessage('');
    } catch (error) {
      window.open(mailtoLink, '_blank', 'noopener,noreferrer');
      setFormState('success');
      setFormName('');
      setFormEmail('');
      setFormMessage('');
    }
  };

  // Helper icons
  const getAwardIcon = (type: string) => {
    switch (type) {
      case 'trophy': return <Award className="w-8 h-8 text-[#f7bd48]" />;
      default: return <Lightbulb className="w-8 h-8 text-[#f7bd48]" />;
    }
  };

  const getProjectCategoryLabel = (category: Project['category']) => {
    switch (category) {
      case 'data-analytics':
        return 'DATA ANALYTICS';
      case 'research':
        return 'RESEARCH BASED';
      case 'Mobile':
        return 'MOBILE';
      case 'web':
        return 'WEB';
      case 'ai':
        return 'AI';
    }
  };

  return (
    <div className="min-h-screen bg-[#171303] text-[#E0D6B8] font-body relative overflow-x-hidden selection:bg-[#800000] selection:text-white pb-16">
      
      {/* Background glow overlay */}
      <div className="absolute top-0 left-0 w-full h-full bg-burgundy-glow -z-10 pointer-events-none" />

      {/* Top sticky Navigation Bar */}
      <nav id="navbar" className="fixed top-0 left-0 w-full z-50 flex justify-between items-center px-6 md:px-20 py-4 bg-[#171303]/80 backdrop-blur-xl border-b border-white/5 transition-all duration-300">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="font-headline text-[20px] font-bold tracking-tighter text-[#E0D6B8] flex items-center gap-2 cursor-pointer"
          onClick={() => setActiveTab('home')}
        >
          <span className="w-3 h-3 bg-[#800000] rounded-sm animate-pulse" />
          ALISHBA MALIK
        </motion.div>

        {/* Desktop Tabs */}
        <div className="hidden md:flex items-center gap-1 relative">
          <LayoutGroup id="nav-indicator">
            {[
              { id: 'home', label: 'ABOUT' },
              { id: 'projects', label: 'PROJECTS' },
              { id: 'skills', label: 'SKILLS & ACADEMICS' },
              { id: 'experience', label: 'CAREER & LEADERSHIP' },
              { id: 'contact', label: 'CONTACT' }
            ].map(tab => {
              const isSelected = activeTab === tab.id;
              return (
                <button
                  id={`nav-tab-${tab.id}`}
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`relative px-4 py-2 font-label-style text-xs font-semibold uppercase tracking-wider transition-colors duration-300 ${
                    isSelected ? 'text-[#171303]' : 'text-[#C0B8A0] hover:text-[#E0D6B8]'
                  }`}
                >
                  <span className="relative z-10">{tab.label}</span>
                  {isSelected && (
                    <motion.div
                      layoutId="active-pill"
                      className="absolute inset-0 bg-[#E0D6B8] rounded-sm -z-0"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                </button>
              );
            })}
          </LayoutGroup>
        </div>

        {/* Hire Me CTA Button */}
        <div className="hidden md:flex items-center gap-3">
          <a
            id="download-cv-btn"
            href={"https://drive.google.com/file/d/1phcL80KIopDNgVwAaxD_VuU71n3c1rkS/view?usp=drive_link"}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 bg-[#E0D6B8] hover:bg-[#C0B8A0] text-[#171303] px-4 py-2 rounded-sm font-label-style text-[11px] font-bold uppercase tracking-widest transition-colors"
          >
            <Download className="w-3.5 h-3.5" />
            Download CV
          </a>
          <motion.button 
            id="hire-me-btn"
            onClick={() => setActiveTab('contact')}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="contact-btn-gradient px-6 py-2.5 rounded-sm font-label-style text-[11px] font-bold uppercase tracking-widest text-white shadow-xl flex items-center gap-2 border border-white/10"
          >
            Hire Me <ArrowRight className="w-3 h-3" />
          </motion.button>
        </div>

        {/* Mobile menu trigger */}
        <button 
          id="mobile-menu-trigger"
          className="md:hidden text-[#E0D6B8] hover:text-[#800000] p-1.5 transition-colors"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </nav>

      {/* Mobile Drawer menu overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div 
            id="mobile-drawer"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed top-[65px] left-0 w-full bg-[#120e01] border-b border-white/5 z-40 py-6 px-8 flex flex-col gap-4 md:hidden backdrop-blur-2xl"
          >
            {[
              { id: 'home', label: 'About Me' },
              { id: 'projects', label: 'Featured Projects' },
              { id: 'skills', label: 'Skills & Academics' },
              { id: 'experience', label: 'Career & Awards' },
              { id: 'contact', label: 'Contact Panel' }
            ].map(tab => (
              <button
                id={`mobile-tab-${tab.id}`}
                key={tab.id}
                onClick={() => {
                  setActiveTab(tab.id);
                  setMobileMenuOpen(false);
                }}
                className={`text-left py-2 text-sm font-label-style uppercase tracking-widest font-semibold transition-colors ${
                  activeTab === tab.id ? 'text-[#800000]' : 'text-[#C0B8A0]'
                }`}
              >
                {tab.label}
              </button>
            ))}
            <button
              id="mobile-hire-btn"
              onClick={() => {
                setActiveTab('contact');
                setMobileMenuOpen(false);
              }}
              className="mt-2 w-full contact-btn-gradient py-3 text-center text-xs text-white font-bold tracking-widest uppercase rounded-sm border border-white/10"
            >
              Hire Me
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Container / Screens Routing Flow */}
      <main className="pt-28 min-h-[calc(100vh-200px)]">
        <AnimatePresence mode="wait">
          
          {/* ==================== HOME SCREEN ==================== */}
          {activeTab === 'home' && (
            <motion.div
              id="screen-home"
              key="home"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="px-6 md:px-20 max-w-7xl mx-auto"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center min-h-[70vh] py-8">
                
                {/* Intro Left Column */}
                <div className="lg:col-span-7 space-y-6">
                  <motion.div 
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.1 }}
                    className="inline-flex items-center gap-2 bg-[#800000]/10 border border-[#800000]/20 px-4 py-1.5 rounded-sm"
                  >
                    <Sparkles className="w-3.5 h-3.5 text-[#E0D6B8] animate-spin" />
                    <span className="font-label-style text-[10px] font-bold uppercase tracking-widest text-[#E0D6B8]">
                      AI APPLICATION BUILDER
                    </span>
                  </motion.div>

                  <h1 className="font-headline text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-[#E0D6B8] uppercase leading-none">
                    Hi, I'm <span className="hero-gradient-text block mt-1">Alishba Malik</span>
                  </h1>

                  <p className="font-headline text-sm sm:text-base md:text-lg tracking-widest text-[#C0B8A0] uppercase">
                    Full-Stack Developer & AI Application Specialist
                  </p>

                  <p className="text-[#C0B8A0] text-sm sm:text-base md:text-lg leading-relaxed max-w-2xl font-body">
                    I am a dedicated software engineer specializing in high-performance full-stack applications and AI models. Bridging the gap between geometric visual layouts and robust backend code architectures, I focus on creating immersive, seamless digital systems.
                  </p>

                  {/* Call to Actions */}
                  <div className="flex flex-wrap gap-4 pt-4">
                    <button 
                      id="view-work-btn"
                      onClick={() => setActiveTab('projects')}
                      className="bg-[#E0D6B8] hover:bg-[#C0B8A0] text-[#171303] px-6 py-3 font-label-style text-xs font-bold uppercase tracking-widest rounded-sm transition-all shadow-lg flex items-center gap-2"
                    >
                      Explore Projects <ChevronRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>

                {/* Tilt Portrait Right Column */}
                <div className="lg:col-span-5 flex justify-center">
                  <div 
                    id="portrait-tilt-container"
                    className="relative w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 cursor-pointer"
                    onMouseMove={handleMouseMove}
                    onMouseLeave={handleMouseLeave}
                  >
                    {/* Glowing background halo */}
                    <div className="absolute inset-0 bg-[#800000]/15 rounded-full blur-3xl" />
                    
                    {/* Rotating structural frame */}
                    <motion.div 
                      style={{ rotate: 45 }}
                      className="absolute -inset-4 border border-[#800000]/20 rounded-lg pointer-events-none"
                      animate={{ rotate: 360 }}
                      transition={{ duration: 40, repeat: Infinity, ease: 'linear' }}
                    />
                    
                    {/* Main portrait wrapper */}
                    <motion.div
                      animate={{
                        rotateX: tilt.x,
                        rotateY: tilt.y,
                        scale: tilt.x !== 0 ? 1.03 : 1
                      }}
                      transition={{ type: 'spring', stiffness: 150, damping: 20 }}
                      className="w-full h-full rounded-full overflow-hidden border-2 border-[#800000]/40 relative z-10 bg-[#241f0c]"
                    >
                      <img
                      src={Alishba}
                      alt="Alishba Malik"
                      className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#171303]/80 via-transparent to-transparent pointer-events-none" />
                    </motion.div>

                    {/* Floating architectural badges */}
                    <motion.div 
                      className="absolute -top-4 -right-4 bg-[#241f0c] border border-[#E0D6B8]/15 px-3 py-1 text-[10px] font-label-style uppercase tracking-widest rounded-sm shadow-xl z-20"
                      animate={{ y: [0, -6, 0] }}
                      transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                    >
                      CGPA 3.54 CS
                    </motion.div>

                    <motion.div 
                      className="absolute -bottom-4 -left-4 bg-[#241f0c] border border-[#800000]/30 px-3 py-1 text-[10px] font-label-style uppercase tracking-widest rounded-sm shadow-xl z-20 text-[#C0B8A0]"
                      animate={{ y: [0, 6, 0] }}
                      transition={{ duration: 4, delay: 2, repeat: Infinity, ease: 'easeInOut' }}
                    >
                      Kinnaird Graduate 
                    </motion.div>
                  </div>
                </div>
              </div>

              {/* ==================== WORK MARQUEE SHOWCASE ==================== */}
              <section className="py-12 border-y border-white/5 overflow-hidden my-16 bg-[#120e01]/30">
                <div className="max-w-7xl mx-auto px-4 mb-4 flex justify-between items-end">
                  <div className="space-y-1">
                    <span className="font-label-style text-[10px] text-[#800000] font-bold tracking-widest uppercase block">A collection of web applications, AI solutions, and software projects that showcase my skills.</span>
                    <h3 className="font-headline text-lg sm:text-xl font-bold uppercase tracking-tight text-[#E0D6B8]">Featured Projects</h3>
                  </div>
                  <span className="font-label-style text-xs text-[#C0B8A0] italic">Hover to pause • Click to enlarge</span>
                </div>

                <div className="relative w-full flex items-center py-4">
                  {/* Outer scrolling container */}
                  <div className="w-full overflow-hidden flex gap-6 scrollbar-hide select-none group">
                    <div className="flex gap-6 animate-marquee min-w-max group-hover:[animation-play-state:paused]">
                      {/* Original set */}
                      {marqueeImages.map((project, idx) => (
                        <div 
                          key={`orig-${idx}`}
                          onClick={() => setLightboxImage(project.image)}
                          className="w-72 h-44 glass-card rounded-sm overflow-hidden flex-shrink-0 cursor-zoom-in border border-white/5 hover:border-[#800000]/40 transition-all duration-300 transform hover:scale-[1.02]"
                        >
                          <img
                          src={project.image}
                          alt={project.title}
                          className="w-full h-full object-cover opacity-80 hover:opacity-100 transition-opacity"
                          />
                        </div>
                      ))}
                      {/* Duplicated set for loop */}
                      {marqueeImages.map((project, idx) => (
                        <div 
                          key={`dup-${idx}`}
                          onClick={() => setLightboxImage(project.image)}
                          className="w-72 h-44 glass-card rounded-sm overflow-hidden flex-shrink-0 cursor-zoom-in border border-white/5 hover:border-[#800000]/40 transition-all duration-300 transform hover:scale-[1.02]"
                        >
                          <img 
                            src={project.image} 
                            alt={project.title} 
                            className="w-full h-full object-cover opacity-80 hover:opacity-100 transition-opacity" 
                          />
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </section>

              {/* ==================== CORE PHILOSOPHY BENTO ==================== */}
              <section className="py-12">
                <div className="text-center max-w-xl mx-auto space-y-4 mb-16">
                  <span className="font-label-style text-[11px] text-[#800000] font-bold tracking-widest uppercase">MY APPROACH</span>
                  <h2 className="font-headline text-3xl font-bold uppercase tracking-tight text-[#E0D6B8]">Design. Develop. Deliver.</h2>
                  <p className="text-[#C0B8A0] text-sm font-body">Creating digital experiences that balance beautiful interfaces, efficient backend systems, and practical business solutions.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {[
                    {
                      icon: <Code className="w-8 h-8 text-[#800000]" />,
                      title: 'Modern Development',
                      desc: 'Developing responsive, high-performance applications using React, TypeScript, Node.js, and modern development practices.'
                    },
                    {
                      icon: <Layers className="w-8 h-8 text-[#800000]" />,
                      title: 'Seamless User Experience',
                      desc: 'Designing interfaces that are intuitive, visually appealing, and optimized across all devices.'
                    },
                    {
                      icon: <Sparkles className="w-8 h-8 text-[#800000]" />,
                      title: 'Continuous Learning',
                      desc: 'Exploring emerging technologies such as Generative AI, intelligent agents, and cloud-based architectures to build future-ready applications.'
                    }
                  ].map((item, idx) => (
                    <motion.div 
                      key={idx}
                      whileHover={{ y: -6 }}
                      className="glass-card p-8 rounded-sm border-l-2 border-[#800000]/30 hover:border-l-[#800000] transition-all duration-300"
                    >
                      <div className="mb-4">{item.icon}</div>
                      <h4 className="font-headline text-lg font-bold uppercase tracking-tight mb-2 text-[#E0D6B8]">{item.title}</h4>
                      <p className="text-[#C0B8A0] text-xs sm:text-sm leading-relaxed font-body">{item.desc}</p>
                    </motion.div>
                  ))}
                </div>
              </section>

            </motion.div>
          )}

          {/* ==================== PROJECTS SCREEN ==================== */}
          {activeTab === 'projects' && (
            <motion.div
              id="screen-projects"
              key="projects"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="px-6 md:px-20 max-w-7xl mx-auto pb-12"
            >
              <div className="text-center max-w-xl mx-auto space-y-4 mb-12">
                <span className="font-label-style text-[11px] text-[#800000] font-bold tracking-widest uppercase">PORTFOLIO</span>
                <h2 className="font-headline text-3xl sm:text-4xl font-bold uppercase tracking-tight text-[#E0D6B8]">Featured Projects</h2>
                <p className="text-[#C0B8A0] text-sm font-body">A collection of web applications, data analytics dashboards, and research-driven systems showcasing product thinking and technical execution.</p>
              </div>

              {/* Filtering bar */}
              <div className="flex justify-center gap-2 mb-12 flex-wrap">
                {[
                  { id: 'all', label: 'ALL WORK' },
                  { id: 'ai', label: 'AI & COMPUTER VISION' },
                  { id: 'web', label: 'FULL STACK APPLICATIONS' },
                  { id: 'data-analytics', label: 'DATA ANALYTICS' },
                  { id: 'research', label: 'RESEARCH BASED' },
                  { id: 'Mobile', label: 'MOBILE APPLICATIONS' }
                ].map(filter => (
                  <button
                    id={`filter-${filter.id}`}
                    key={filter.id}
                    onClick={() => setActiveFilter(filter.id as any)}
                    className={`px-4 py-2 text-[10px] font-label-style font-bold tracking-widest uppercase rounded-sm border transition-all ${
                      activeFilter === filter.id 
                        ? 'bg-[#E0D6B8] text-[#171303] border-[#E0D6B8]' 
                        : 'border-[#E0D6B8]/15 text-[#C0B8A0] hover:text-[#E0D6B8] hover:border-[#E0D6B8]/40'
                    }`}
                  >
                    {filter.label}
                  </button>
                ))}
              </div>

              {/* Projects Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {projects
                  .filter(p => activeFilter === 'all' || p.category === activeFilter)
                  .map(project => (
                    <motion.div
                      id={`project-card-${project.id}`}
                      key={project.id}
                      layout
                      whileHover={{ y: -8 }}
                      className="glass-card rounded-sm overflow-hidden border border-white/5 hover:border-[#800000]/40 transition-all duration-300 flex flex-col justify-between cursor-pointer group"
                      onClick={() => setSelectedProject(project)}
                    >
                      <div>
                        {/* Project Image Panel */}
                        <div className="h-48 overflow-hidden relative">
                          <img 
                            src={project.image} 
                            alt={project.title} 
                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
                          />
                          <div className="absolute inset-0 bg-[#171303]/30 mix-blend-multiply" />
                          <div className="absolute top-4 right-4 bg-[#800000] text-white text-[9px] font-label-style font-bold px-2 py-1 uppercase tracking-widest rounded-sm">
                            {getProjectCategoryLabel(project.category)}
                          </div>
                        </div>

                        {/* Text details */}
                        <div className="p-6 space-y-4">
                          <h3 className="font-headline text-xl font-bold uppercase tracking-tight text-[#E0D6B8] group-hover:text-[#800000] transition-colors">
                            {project.title}
                          </h3>
                          <p className="text-[#C0B8A0] text-xs sm:text-sm font-body leading-relaxed line-clamp-3">
                            {project.description}
                          </p>
                        </div>
                      </div>

                      {/* Technologies & Action Footer */}
                      <div className="p-6 pt-0 space-y-4">
                        <div className="flex flex-wrap gap-2">
                          {project.technologies.slice(0, 3).map(technology => (
                            <span key={technology} className="bg-[#241f0c] text-[#C0B8A0] text-[9px] font-label-style px-2 py-0.5 rounded-sm border border-white/5">
                              {technology}
                            </span>
                          ))}
                          {project.technologies.length > 3 && (
                            <span className="bg-[#241f0c] text-[#C0B8A0] text-[9px] font-label-style px-2 py-0.5 rounded-sm">
                              +{project.technologies.length - 3} more
                            </span>
                          )}
                        </div>

                        <div className="border-t border-white/5 pt-4 flex justify-between items-center text-xs font-label-style font-bold text-[#E0D6B8] group-hover:text-[#800000] transition-colors">
                          <span>VIEW ARCHITECTURE DETAILS</span>
                          <ChevronRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
                        </div>
                      </div>
                    </motion.div>
                  ))}
              </div>
            </motion.div>
          )}

          {/* ==================== SKILLS & ACADEMICS SCREEN ==================== */}
          {activeTab === 'skills' && (
            <motion.div
              id="screen-skills"
              key="skills"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="px-6 md:px-20 max-w-7xl mx-auto pb-12"
            >
              <div className="text-center max-w-xl mx-auto space-y-4 mb-16">
                <span className="font-label-style text-[11px] text-[#800000] font-bold tracking-widest uppercase">CREDENTIALS</span>
                <h2 className="font-headline text-3xl sm:text-4xl font-bold uppercase tracking-tight text-[#E0D6B8]">Academics &amp; Tech Stack</h2>
                <p className="text-[#C0B8A0] text-sm font-body">Bridging standard academic theory and deep enterprise tooling to engineer intelligent applications.</p>
              </div>

              {/* Kinnaird College Spotlight */}
              <div className="glass-card rounded-sm p-8 md:p-12 border-l-4 border-[#800000] mb-16 relative overflow-hidden">
                <div className="absolute top-4 right-4 text-[#800000]/10 pointer-events-none select-none">
                  <GraduationCap className="w-32 h-32" />
                </div>
                
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start relative z-10">
                  <div className="lg:col-span-8 space-y-6">
                    <div className="space-y-2">
                      <div className="flex items-center gap-2 text-xs font-label-style font-bold text-[#800000] uppercase tracking-widest">
                        <Award className="w-4 h-4" /> Academic Excellence
                      </div>
                      <h3 className="font-headline text-2xl sm:text-3xl font-bold uppercase tracking-tight text-[#E0D6B8]">
                        Kinnaird College for Women University
                      </h3>
                      <p className="text-[#C0B8A0] text-sm font-label-style font-semibold tracking-wider">
                        BACHELOR OF SCIENCE IN COMPUTER SCIENCE (2021 — 2025)
                      </p>
                    </div>

                    <p className="text-[#C0B8A0] text-sm sm:text-base leading-relaxed font-body">
                      Graduated with a stellar CGPA of <strong className="text-white">3.54</strong>. Acquired a solid foundation in software engineering methodologies, data structures, algorithm complexity analysis, and modern web application patterns.
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4 text-xs sm:text-sm font-body text-[#C0B8A0]">
                      <div className="space-y-2">
                        <h4 className="font-headline text-xs font-bold uppercase text-[#E0D6B8] tracking-widest">Core Computer Science</h4>
                        <ul className="space-y-1.5 list-disc list-inside">
                          <li>Data Structures &amp; Algorithms</li>
                          <li>Database Management Systems</li>
                          <li>Object-Oriented Programming</li>
                          <li>Analysis of Algorithms</li>
                        </ul>
                      </div>
                      <div className="space-y-2">
                        <h4 className="font-headline text-xs font-bold uppercase text-[#E0D6B8] tracking-widest">Advanced Curriculum</h4>
                        <ul className="space-y-1.5 list-disc list-inside">
                          <li>Theory of Automata</li>
                          <li>Software Engineering Principles</li>
                          <li>Generative AI &amp; Vision Systems</li>
                          <li>Relational Database Architecture</li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  {/* Highlights sidebar */}
                  <div className="lg:col-span-4 bg-[#241f0c] p-6 rounded-sm border border-white/5 space-y-4 text-center">
                    <div className="space-y-1">
                      <span className="text-[10px] font-label-style text-[#C0B8A0] uppercase tracking-wider block">GRADUATION STATUS</span>
                      <span className="text-2xl font-headline font-bold text-[#E0D6B8]">CGPA 3.54</span>
                    </div>
                    <div className="border-t border-white/5 pt-4 space-y-1">
                      <span className="text-[10px] font-label-style text-[#C0B8A0] uppercase tracking-wider block">BRANCH AFFILIATION</span>
                      <span className="text-sm font-headline font-bold text-[#E0D6B8]">Chairperson, IEEE</span>
                    </div>
                    <div className="border-t border-white/5 pt-4 space-y-1">
                      <span className="text-[10px] font-label-style text-[#C0B8A0] uppercase tracking-wider block">CORE STRENGTH</span>
                      <span className="text-sm font-headline font-bold text-[#800000] uppercase tracking-widest block">AI-Vision &amp; Full Stack</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Skills Interactive Modules */}
              <div className="space-y-4 mb-8">
                <h3 className="font-headline text-xl font-bold uppercase tracking-tight text-[#E0D6B8] text-center mb-10">Technical Skillset</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                  {[
                    {
                      category: 'Languages',
                      icon: <Code className="w-6 h-6 text-[#800000]" />,
                      items: [
                        { name: 'C++ / C#', level: '90%' },
                        { name: 'Python', level: '85%' },
                        { name: 'JavaScript', level: '92%' },
                        { name: 'TypeScript', level: '88%' }
                      ]
                    },
                    {
                      category: 'Frameworks',
                      icon: <Layers className="w-6 h-6 text-[#800000]" />,
                      items: [
                        { name: 'React.js / Next.js', level: '94%' },
                        { name: 'Node.js / Express', level: '88%' },
                        { name: 'Tailwind CSS', level: '95%' },
                        { name: 'ASP.NET / Flutter', level: '78%' }
                      ]
                    },
                    {
                      category: 'Databases',
                      icon: <Database className="w-6 h-6 text-[#800000]" />,
                      items: [
                        { name: 'MySQL', level: '85%' },
                        { name: 'PostgreSQL', level: '88%' },
                        { name: 'MongoDB', level: '80%' },
                        { name: 'Firebase', level: '85%' }
                      ]
                    },
                    {
                      category: 'Tools & Cloud',
                      icon: <Construction className="w-6 h-6 text-[#800000]" />,
                      items: [
                        { name: 'Git / GitHub', level: '90%' },
                        { name: 'Docker Containers', level: '80%' },
                        { name: 'n8n Workflows', level: '88%' },
                        { name: 'Postman Integration', level: '85%' }
                      ]
                    }
                  ].map((cat, idx) => (
                    <div key={idx} className="glass-card p-6 rounded-sm border border-white/5 space-y-6">
                      <div className="flex items-center gap-3 border-b border-white/5 pb-4">
                        {cat.icon}
                        <h4 className="font-headline text-base font-bold uppercase tracking-tight text-[#E0D6B8]">{cat.category}</h4>
                      </div>
                      
                      <div className="space-y-4">
                        {cat.items.map((skill, sIdx) => (
                          <div key={sIdx} className="space-y-1.5 group">
                            <div className="flex justify-between text-xs font-label-style font-semibold text-[#C0B8A0] group-hover:text-white transition-colors">
                              <span>{skill.name}</span>
                              <span className="text-[#800000]">{skill.level}</span>
                            </div>
                            {/* Skill level pipeline track */}
                            <div className="h-1 w-full bg-[#171303] rounded-full overflow-hidden">
                              <motion.div 
                                initial={{ width: 0 }}
                                animate={{ width: skill.level }}
                                transition={{ duration: 1.2, delay: 0.1 }}
                                className="h-full bg-gradient-to-r from-[#800000] to-[#633A2C]"
                              />
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Certifications sub-block */}
              <div className="pt-12">
                <h3 className="font-headline text-lg font-bold uppercase tracking-widest text-[#E0D6B8] text-center mb-8">Verified Certifications</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
                  {[
                    { title: 'Generative AI Prompting', provider: 'Google Cloud' },
                    { title: 'AI Essentials', provider: 'Google' },
                    { title: 'Google UX Design Specialization', provider: 'Coursera / Google' },
                    { title: 'n8n Fundamental Course', provider: 'n8n.io' }
                  ].map((cert, idx) => (
                    <motion.div 
                      key={idx}
                      whileHover={{ scale: 1.02 }}
                      className="glass-card p-5 rounded-sm border border-white/5 text-center space-y-2 hover:border-[#800000]/40 transition-colors"
                    >
                      <Award className="w-5 h-5 mx-auto text-[#f7bd48]" />
                      <h5 className="text-[#E0D6B8] text-xs font-bold uppercase tracking-tight font-headline">{cert.title}</h5>
                      <p className="text-[#C0B8A0] text-[10px] font-label-style font-medium tracking-wider uppercase">{cert.provider}</p>
                    </motion.div>
                  ))}
                </div>
                <div className="flex justify-center pt-10">
                 
                </div>
              </div>

            </motion.div>
          )}

          {/* ==================== EXPERIENCE SCREEN ==================== */}
          {activeTab === 'experience' && (
            <motion.div
              id="screen-experience"
              key="experience"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="px-6 md:px-20 max-w-7xl mx-auto pb-24 md:pb-28"
            >
              <div className="text-center max-w-xl mx-auto space-y-4 mb-16">
                <span className="font-label-style text-[11px] text-[#800000] font-bold tracking-widest uppercase">CAREER PATH</span>
                <h2 className="font-headline text-3xl sm:text-4xl font-bold uppercase tracking-tight text-[#E0D6B8]">Experience &amp; Leadership</h2>
                <p className="text-[#C0B8A0] text-sm font-body">Refining engineering abilities at scale and coordinating collegiate technology communities.</p>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
                
                {/* Left Timeline: Career */}
                <div className="lg:col-span-7 space-y-8">
                  <h3 className="font-headline text-xl font-bold uppercase tracking-tight text-[#E0D6B8] flex items-center gap-3">
                    <Briefcase className="w-5 h-5 text-[#800000]" /> Professional Internships
                  </h3>

                  <div className="space-y-8 relative before:absolute before:top-2 before:bottom-2 before:left-4 before:w-[1px] before:bg-white/5">
                    {experiences.map((exp) => (
                      <div 
                        id={`exp-card-${exp.id}`}
                        key={exp.id} 
                        className="relative pl-10 space-y-4 group"
                      >
                        {/* Timeline tracking node */}
                        <div className="absolute left-[11px] top-1.5 w-[11px] h-[11px] rounded-full border border-[#800000] bg-[#171303] z-10 transition-colors group-hover:bg-[#800000]" />

                        <div className="space-y-1">
                          <div className="flex flex-wrap justify-between items-baseline gap-2">
                            <h4 className="font-headline text-lg font-bold uppercase tracking-tight text-[#E0D6B8] group-hover:text-[#800000] transition-colors">
                              {exp.role}
                            </h4>
                            <span className="text-xs font-label-style font-bold tracking-widest text-[#800000] uppercase">
                              {exp.period}
                            </span>
                          </div>
                          <p className="text-[#C0B8A0] text-xs font-label-style font-semibold uppercase tracking-widest">
                            {exp.company}
                          </p>
                        </div>

                        <p className="text-[#C0B8A0] text-sm leading-relaxed font-body">
                          {exp.description}
                        </p>

                        <ul className="space-y-2 text-xs sm:text-sm text-[#C0B8A0] list-disc list-inside font-body pl-2">
                          {exp.bullets.map((bullet, bIdx) => (
                            <li key={bIdx} className="leading-relaxed">{bullet}</li>
                          ))}
                        </ul>

                        <div className="flex flex-wrap gap-2 pt-2">
                          {exp.skills.map((skill) => (
                            <span key={skill} className="bg-[#241f0c] text-[#C0B8A0] text-[9px] font-label-style uppercase tracking-widest px-2.5 py-1 rounded-sm border border-white/5">
                              {skill}
                            </span>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Right Timeline: Leadership & Awards */}
                <div className="lg:col-span-5 space-y-8">
                  <h3 className="font-headline text-xl font-bold uppercase tracking-tight text-[#E0D6B8] flex items-center gap-3">
                    <Award className="w-5 h-5 text-[#800000]" /> Leadership &amp; Honors
                  </h3>

                  {/* IEEE Chairperson Block */}
                  <div className="glass-card p-6 rounded-sm space-y-4 border border-white/5">
                    <div className="flex items-start gap-4">
                      <div className="bg-[#800000]/10 p-2.5 rounded-sm border border-[#800000]/20 text-[#E0D6B8]">
                        <GraduationCap className="w-6 h-6" />
                      </div>
                      <div>
                        <h4 className="font-headline text-base font-bold uppercase tracking-tight text-[#E0D6B8]">Chairperson</h4>
                        <p className="text-[#C0B8A0] text-xs font-label-style font-semibold tracking-wider uppercase">IEEE Kinnaird Student Branch</p>
                      </div>
                    </div>
                    <p className="text-[#C0B8A0] text-xs sm:text-sm leading-relaxed font-body">
                      Coordinated the executive board, steered compliance metrics with international IEEE requirements, and executed various technical development camps and seminars.
                    </p>
                    <div className="border-t border-white/5 pt-4">
                      <h5 className="font-headline text-xs font-bold text-[#E0D6B8] uppercase mb-2 tracking-widest">Key Accomplishment</h5>
                      <p className="text-[#C0B8A0] text-xs leading-relaxed font-body">
                        Orchestrated logistics and event programs for <strong className="text-white">TechFusion'24</strong>, Kinnaird University's flagship regional tech symposium, accommodating over 500 participants.
                      </p>
                    </div>
                  </div>

                  {/* Awards cards */}
                  <div className="space-y-4 pt-4">
                    <h4 className="font-headline text-sm font-bold uppercase tracking-widest text-[#E0D6B8]">Competitions &amp; Prizes</h4>
                    {awards.map((award) => (
                      <div 
                        id={`award-card-${award.id}`}
                        key={award.id}
                        onClick={() => setSelectedAward(award)}
                        className="glass-card p-4 rounded-sm border border-white/5 hover:border-[#800000]/40 transition-all flex items-center justify-between cursor-pointer group"
                      >
                        <div className="flex items-center gap-4">
                          <div className="p-2 bg-white/5 rounded-sm">
                            {getAwardIcon(award.icon)}
                          </div>
                          <div>
                            <h5 className="font-headline text-sm font-bold uppercase tracking-tight text-[#E0D6B8] group-hover:text-[#800000] transition-colors">{award.title}</h5>
                            <p className="text-[#C0B8A0] text-[10px] font-label-style tracking-widest uppercase">{award.position} • {award.year}</p>
                          </div>
                        </div>
                        <ChevronRight className="w-4 h-4 text-[#C0B8A0] transform group-hover:translate-x-1 transition-transform" />
                      </div>
                    ))}
                  </div>

                </div>

              </div>
            </motion.div>
          )}

          {/* ==================== CONTACT SCREEN ==================== */}
          {activeTab === 'contact' && (
            <motion.div
              id="screen-contact"
              key="contact"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="px-6 md:px-20 max-w-4xl mx-auto pb-12"
            >
              <div className="text-center space-y-4 mb-16">
                <span className="font-label-style text-[11px] text-[#800000] font-bold tracking-widest uppercase block">GET IN TOUCH</span>
                <h2 className="font-headline text-3xl sm:text-4xl font-bold uppercase tracking-tight text-[#E0D6B8]">Let's Create Together</h2>
                <p className="text-[#C0B8A0] text-sm font-body max-w-xl mx-auto">Currently open to engineering-grade projects, custom workflow designs, and full-stack positions. Leave a message, and she will reply within 24 hours.</p>
              </div>

              {/* Message Console Wrapper */}
              <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
                
                {/* Left card details */}
                <div className="md:col-span-5 space-y-6">
                  <div className="glass-card p-6 rounded-sm space-y-6">
                    <h3 className="font-headline text-base font-bold uppercase tracking-widest text-[#E0D6B8] border-b border-white/5 pb-4 flex items-center gap-2">
                      <Info className="w-4 h-4 text-[#800000]" /> Details
                    </h3>

                    <div className="space-y-4 font-body text-sm text-[#C0B8A0]">
                      <div>
                        <span className="text-[10px] font-label-style font-bold tracking-widest uppercase text-[#E0D6B8] block">CURRENT STATUS</span>
                        <p className="text-[#f7bd48] font-semibold">Available for full-time offers</p>
                      </div>
                      <div>
                        <span className="text-[10px] font-label-style font-bold tracking-widest uppercase text-[#E0D6B8] block">PRIMARY EMAIL</span>
                        <a href="mailto:malishba909@gmail.com" className="text-white hover:text-[#800000] underline transition-colors">
                          malishba909@gmail.com
                        </a>
                      </div>
                      <div>
                        <span className="text-[10px] font-label-style font-bold tracking-widest uppercase text-[#E0D6B8] block">OFFICE LOCATION</span>
                        <p className="text-white">Lahore, Pakistan</p>
                      </div>
                    </div>

                    <div className="border-t border-white/5 pt-6 space-y-4 text-center">
                      <span className="text-[10px] font-label-style font-semibold tracking-wider text-[#C0B8A0] uppercase block">DOWNLOAD FULL RESUME</span>
                      <a 
                        href={"https://drive.google.com/file/d/1phcL80KIopDNgVwAaxD_VuU71n3c1rkS/view?usp=drive_link"}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-2 bg-[#241f0c] hover:bg-[#800000]/10 border border-white/5 hover:border-[#800000]/40 text-[#E0D6B8] px-4 py-2 text-xs font-label-style font-bold uppercase tracking-widest rounded-sm transition-all"
                      >
                        <Download className="w-4 h-4" /> Download CV
                      </a>
                    </div>
                  </div>
                </div>

                {/* Right message panel form */}
                <div className="md:col-span-7 bg-[#241f0c]/50 p-8 rounded-sm border border-white/5 relative">
                  <AnimatePresence mode="wait">
                    {formState !== 'success' ? (
                      <motion.form 
                        key="contact-form"
                        onSubmit={handleFormSubmit} 
                        name="contact"
                        method="POST"
                        data-netlify="true"
                        data-netlify-honeypot="bot-field"
                        className="space-y-6"
                        exit={{ opacity: 0 }}
                      >
                        <input type="hidden" name="form-name" value="contact" />
                        <input type="hidden" name="recipient" value={contactRecipient} />
                        <input type="hidden" name="bot-field" />
                        <div className="space-y-2">
                          <label className="block text-[10px] font-label-style font-bold uppercase tracking-widest text-[#E0D6B8]">
                            Full Name
                          </label>
                          <input 
                            id="contact-name"
                            name="name"
                            required
                            type="text" 
                            placeholder="e.g. John Doe"
                            value={formName}
                            onChange={(e) => setFormName(e.target.value)}
                            className="w-full bg-[#171303] border-b-2 border-white/5 focus:border-[#800000] p-3 text-sm text-white focus:ring-0 outline-none transition-all font-body"
                          />
                        </div>

                        <div className="space-y-2">
                          <label className="block text-[10px] font-label-style font-bold uppercase tracking-widest text-[#E0D6B8]">
                            Email Address
                          </label>
                          <input 
                            id="contact-email"
                            name="email"
                            required
                            type="email" 
                            placeholder="e.g. john@example.com"
                            value={formEmail}
                            onChange={(e) => setFormEmail(e.target.value)}
                            className="w-full bg-[#171303] border-b-2 border-white/5 focus:border-[#800000] p-3 text-sm text-white focus:ring-0 outline-none transition-all font-body"
                          />
                        </div>

                        <div className="space-y-2">
                          <label className="block text-[10px] font-label-style font-bold uppercase tracking-widest text-[#E0D6B8]">
                            Message Body
                          </label>
                          <textarea 
                            id="contact-message"
                            name="message"
                            required
                            rows={4}
                            placeholder="Describe your initiative, request, or proposal..."
                            value={formMessage}
                            onChange={(e) => setFormMessage(e.target.value)}
                            className="w-full bg-[#171303] border-b-2 border-white/5 focus:border-[#800000] p-3 text-sm text-white focus:ring-0 outline-none transition-all font-body"
                          />
                        </div>

                        <button 
                          id="contact-submit-btn"
                          disabled={formState === 'sending'}
                          className="w-full contact-btn-gradient py-4 rounded-sm font-label-style text-xs font-bold uppercase tracking-widest text-white shadow-2xl flex items-center justify-center gap-2 border border-white/5 hover:border-white/10 active:scale-[0.98] transition-transform"
                        >
                          {formState === 'sending' ? (
                            <>
                              <Sparkles className="w-4 h-4 animate-spin" />
                              TRANSMITTING METRICS...
                            </>
                          ) : (
                            <>
                              <Send className="w-4 h-4" />
                              SEND MESSAGE
                            </>
                          )}
                        </button>
                      </motion.form>
                    ) : (
                      <motion.div 
                        id="contact-success-panel"
                        key="success-message"
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="text-center py-12 space-y-6"
                      >
                        <CheckCircle2 className="w-16 h-16 text-[#800000] mx-auto animate-bounce" />
                        <div className="space-y-2">
                          <h4 className="font-headline text-lg font-bold uppercase tracking-widest text-[#E0D6B8]">TRANSMISSION COMPLETED</h4>
                          <p className="text-[#C0B8A0] text-xs sm:text-sm font-body">Your message was securely dispatched into Alishba's inbox queue.</p>
                        </div>
                        <button
                          id="back-to-contact-form"
                          onClick={() => setFormState('idle')}
                          className="text-xs font-label-style text-[#E0D6B8] hover:text-[#800000] underline uppercase font-bold tracking-wider"
                        >
                          SEND ANOTHER MESSAGE
                        </button>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

              </div>
            </motion.div>
          )}

        </AnimatePresence>
      </main>

      {/* ==================== SCREEN MODALS / OVERLAYS ==================== */}
      
      {/* 1. Lightbox Zoom Overlay */}
      <AnimatePresence>
        {lightboxImage && (
          <motion.div 
            id="lightbox-modal"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setLightboxImage(null)}
            className="fixed inset-0 z-50 bg-[#171303]/95 flex items-center justify-center p-6 cursor-zoom-out"
          >
            <motion.div 
              initial={{ scale: 0.95 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.95 }}
              className="max-w-4xl max-h-[85vh] overflow-hidden rounded-sm border border-white/10"
            >
              <img src={lightboxImage} alt="Expanded high quality concept render" className="w-full h-full object-contain" />
            </motion.div>
            <button className="absolute top-6 right-6 text-white bg-white/5 hover:bg-[#800000] p-2 rounded-sm transition-colors">
              <X className="w-6 h-6" />
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      {/* 2. Detailed Project Architectural Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div 
            id="project-detail-modal"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-[#171303]/90 backdrop-blur-md flex items-center justify-center p-4 sm:p-6 overflow-y-auto"
          >
            <motion.div 
              initial={{ y: 50, scale: 0.95 }}
              animate={{ y: 0, scale: 1 }}
              exit={{ y: 50, scale: 0.95 }}
              className="bg-[#241f0c] border border-[#E0D6B8]/10 max-w-3xl w-full rounded-sm overflow-hidden flex flex-col max-h-[90vh] shadow-2xl"
            >
              {/* Image banner */}
              <div className="h-44 sm:h-56 relative overflow-hidden flex-shrink-0">
                <img src={selectedProject.image} alt={selectedProject.title} className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#241f0c] via-[#241f0c]/30 to-transparent" />
                <button 
                  id="close-project-modal-btn"
                  onClick={() => setSelectedProject(null)}
                  className="absolute top-4 right-4 bg-[#171303]/80 hover:bg-[#800000] text-white p-2 rounded-sm transition-colors"
                >
                  <X className="w-4 h-4" />
                </button>
                <div className="absolute bottom-4 left-6">
                  <span className="text-[9px] font-label-style bg-[#800000] text-white px-2 py-0.5 rounded-sm uppercase tracking-widest">
                    {getProjectCategoryLabel(selectedProject.category)}
                  </span>
                  <h3 className="font-headline text-2xl sm:text-3xl font-bold uppercase tracking-tight text-white mt-1">
                    {selectedProject.title}
                  </h3>
                </div>
              </div>

              {/* Scrollable details */}
              <div className="p-6 overflow-y-auto space-y-6 text-xs sm:text-sm font-body text-[#C0B8A0]">
                
                <div className="space-y-2">
                  <h4 className="font-headline text-xs font-bold text-[#E0D6B8] uppercase tracking-widest">PROJECT OVERVIEW</h4>
                  <p className="leading-relaxed text-[#E0D6B8]/90">{selectedProject.description}</p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4 border-t border-white/5">
                  <div className="space-y-2">
                    <h4 className="font-headline text-xs font-bold text-[#800000] uppercase tracking-widest flex items-center gap-2">
                      <Code className="w-4 h-4 text-red-500" /> TECHNOLOGIES USED
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {selectedProject.technologies.map((technology) => (
                        <span key={technology} className="bg-[#171303] border border-white/5 text-[#E0D6B8] text-[9px] font-label-style uppercase px-2.5 py-1 rounded-sm">
                          {technology}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="space-y-2">
                    <h4 className="font-headline text-xs font-bold text-green-600 uppercase tracking-widest flex items-center gap-2">
                      <ExternalLink className="w-4 h-4 text-green-500" /> LINKS
                    </h4>
                    {selectedProject.links.length > 0 ? (
                      <div className="flex flex-col gap-2">
                        {selectedProject.links.map((link) => (
                          <a
                            key={link.href}
                            href={link.href}
                            target="_blank"
                            rel="noreferrer"
                            className="inline-flex items-center gap-2 text-[#E0D6B8] hover:text-white underline decoration-white/20 hover:decoration-white transition-colors"
                          >
                            {link.label}
                            <ExternalLink className="w-3.5 h-3.5" />
                          </a>
                        ))}
                      </div>
                    ) : (
                      <p className="leading-relaxed text-xs">No public link provided.</p>
                    )}
                  </div>
                </div>

              </div>
              
              {/* Footer action button */}
              <div className="p-4 bg-[#120e01] border-t border-white/5 flex justify-end gap-2">
                <button
                  id="close-project-modal-bottom-btn"
                  onClick={() => setSelectedProject(null)}
                  className="px-5 py-2 font-label-style text-[10px] font-bold uppercase tracking-widest text-[#C0B8A0] hover:text-white transition-colors"
                >
                  Close Specification
                </button>
              </div>

            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* 3. Detailed Award Modal */}
      <AnimatePresence>
        {selectedAward && (
          <motion.div 
            id="award-detail-modal"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedAward(null)}
            className="fixed inset-0 z-50 bg-[#171303]/90 backdrop-blur-md flex items-center justify-center p-4"
          >
            <motion.div 
              initial={{ scale: 0.95, y: 30 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.95, y: 30 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-[#241f0c] border border-[#E0D6B8]/10 max-w-md w-full rounded-sm p-6 space-y-6 shadow-2xl relative"
            >
              <button 
                id="close-award-modal-btn"
                onClick={() => setSelectedAward(null)}
                className="absolute top-4 right-4 bg-[#171303]/80 hover:bg-[#800000] text-white p-2 rounded-sm transition-colors"
              >
                <X className="w-4 h-4" />
              </button>

              <div className="text-center space-y-2">
                <div className="w-16 h-16 bg-[#800000]/10 border border-[#800000]/20 rounded-full flex items-center justify-center mx-auto text-[#f7bd48]">
                  {selectedAward.icon === 'trophy' ? <Award className="w-8 h-8" /> : <Lightbulb className="w-8 h-8" />}
                </div>
                <span className="text-[10px] font-label-style text-[#800000] font-bold tracking-widest uppercase block">
                  {selectedAward.position}
                </span>
                <h3 className="font-headline text-lg font-bold uppercase tracking-tight text-white">
                  {selectedAward.title}
                </h3>
                <span className="text-xs font-label-style text-[#C0B8A0] block">Year awarded: {selectedAward.year}</span>
              </div>

              <div className="border-t border-white/5 pt-4 space-y-3 font-body text-xs sm:text-sm text-[#C0B8A0] leading-relaxed">
                <p>{selectedAward.description}</p>
                {selectedAward.id === 'arduino-race' && (
                  <div className="bg-[#171303] p-3 rounded-sm border border-white/5">
                    <span className="text-[9px] font-label-style text-[#800000] font-bold block mb-1">TECHNICAL SPECIFICATION</span>
                    <ul className="list-disc list-inside space-y-1 text-xs">
                      <li>Microcontroller: Arduino Uno Rev3</li>
                      <li>Sensors: 5-channel IR reflection array</li>
                      <li>Control Algorithm: Proportional-Integral-Derivative (PID) coded in C++</li>
                    </ul>
                  </div>
                )}
              </div>

              <button
                id="close-award-modal-bottom-btn"
                onClick={() => setSelectedAward(null)}
                className="w-full bg-[#800000] hover:bg-[#633A2C] text-white font-label-style font-bold text-xs uppercase tracking-widest py-3 rounded-sm transition-colors"
              >
                DISMISS HONORS
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Footer Branding line */}
      <footer className="mt-16 w-full py-12 px-6 md:px-20 flex flex-col md:flex-row justify-between items-center gap-8 bg-[#171303] border-t border-white/5 absolute bottom-0 left-0">
        <div className="font-headline text-lg text-[#E0D6B8] font-bold uppercase tracking-widest flex items-center gap-2">
          <span className="w-2.5 h-2.5 bg-[#800000] rounded-sm" /> ALISHBA MALIK
        </div>
        
        {/* Social interactions */}
        <div className="flex gap-6">
          <a href="https://github.com/Malishba15" className="text-[#C0B8A0] hover:text-[#800000] transition-colors"><Github className="w-5 h-5" /></a>
          <a href="https://www.linkedin.com/in/alishba-malik-b25a88287" className="text-[#C0B8A0] hover:text-[#800000] transition-colors"><Linkedin className="w-5 h-5" /></a>
         </div>

        <p className="font-label-style text-[11px] text-[#C0B8A0] opacity-50 uppercase text-center md:text-right tracking-wider">
          © {new Date().getFullYear()} ALISHBA MALIK. ALL RIGHTS RESERVED.
        </p>
      </footer>

    </div>
  );
}
