import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { profiles } from "@/lib/profiles";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ContentRow from "@/components/ContentRow";
import Footer from "@/components/Footer";
import { ChevronLeft, Volume2, VolumeX, Laugh } from "lucide-react";
import { contentRows } from "@/lib/data";

const ProfilePage = () => {
  const { profileType } = useParams<{ profileType: string }>();
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(true);
  const [muted, setMuted] = useState(true);
  const [showEasterEgg, setShowEasterEgg] = useState(false);
  const [playedIntro, setPlayedIntro] = useState(false);
  
  // Find the selected profile
  const profile = profiles.find(
    (p) => p.type.toLowerCase() === profileType?.toLowerCase()
  ) || profiles[0];

  // Get profile-specific background video
  const getProfileBgVideo = () => {
    switch (profileType?.toLowerCase()) {
      case "recruiter":
        return "/video/background.mp4";
      case "developer":
        return "/video/coding.mp4";
      case "stalker":
        return "/video/stalker.mp4";
      case "adventurer":
        return "/video/adventurer-background.mp4";
      default:
        return "/video/default-background.mp4";
    }
  };
  
  // Easter egg quote based on profile
  const getEasterEggQuote = () => {
    const quotes = [
      "Are you still watching?",
      "Just one more episode...",
      "Netflix and skill?",
    ];
    return quotes[Math.floor(Math.random() * quotes.length)];
  };

  useEffect(() => {
    // Simulate loading for a Netflix-like experience
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);
    
    // Play the Netflix sound when we load
    const audioElement = new Audio('/tudum.mp3');
    if (!playedIntro) {
      audioElement.play().catch(err => console.log("Audio play error:", err));
      setPlayedIntro(true);
    }
    
    return () => {
      clearTimeout(timer);
      audioElement.pause();
    };
  }, [playedIntro]);

  const toggleMute = () => {
    setMuted(!muted);
  };

  const toggleEasterEgg = () => {
    setShowEasterEgg(!showEasterEgg);
  };

  if (!profile) {
    return (
      <div className="min-h-screen bg-netflix-dark flex flex-col items-center justify-center">
        <h1 className="text-netflix-red text-3xl mb-4">Profile Not Found</h1>
        <button 
          onClick={() => navigate("/profiles")}
          className="bg-netflix-red text-white px-6 py-2 rounded hover:bg-red-700 transition"
        >
          Back to Profiles
        </button>
      </div>
    );
  }

  if (isLoading) {
    return (
      <div className="min-h-screen bg-netflix-dark flex flex-col items-center justify-center">
        <div className="w-24 h-24 border-t-4 border-netflix-red rounded-full animate-spin"></div>
        <p className="text-netflix-gray mt-6 text-xl">Loading {profile.type}'s Profile...</p>
      </div>
    );
  }

  // Filter content based on the profile type
  const filteredContent = contentRows.filter((row) => 
    profile.contentFilter.some(filter => 
      row.title.toLowerCase().includes(filter.toLowerCase()) || 
      row.id.toLowerCase().includes(filter.toLowerCase())
    )
  );

  // For Recruiter profile specifically - use the custom layout
  if (profileType?.toLowerCase() === 'recruiter') {
    return (
      <div className="min-h-screen bg-netflix-black text-white">
        {/* Navigation */}
       {/* Navigation */}
<nav className="fixed top-0 left-0 right-0 z-50 bg-black/30 backdrop-blur-sm px-12 py-4">
  <div className="flex justify-between items-center">
    <div className="netflix-logo-font">
      <span className="text-netflix-red font-extrabold text-4xl tracking-tighter">USAMA</span>
      {" "}  {" "}
      <span className="text-white font-extrabold text-4xl tracking-tighter">HASSAN</span>
    </div>
    <div className="flex space-x-6 items-center">
      <a href="#home" className="hover:text-netflix-red transition-colors">Home</a>
      <a href="#professional" className="hover:text-netflix-red transition-colors">Professional</a>
      <a href="#skills" className="hover:text-netflix-red transition-colors">Skills</a>
      <a href="#projects" className="hover:text-netflix-red transition-colors">Projects</a>
      <a href="#hire-me" className="hover:text-netflix-red transition-colors">Hire Me</a>
    </div>
  </div>
</nav>


        {/* Hero Section with Background Video */}
        <div className="relative">
          <div className="w-full h-screen absolute top-0 left-0 overflow-hidden">
            <video 
              autoPlay 
              loop 
              muted 
              playsInline 
              className="w-full h-full object-cover opacity-100"
            >
              <source src={getProfileBgVideo()} type="video/mp4" />
            </video>
          </div>
          
          {/* Hero Content */}
          <section id="home" className="relative h-screen pt-24 z-10">
  <div className="px-12 h-full flex flex-col justify-center">
    <h1 className="text-4xl md:text-5xl font-bold mb-6 text-shadow-sm">
      Usama Hassan - <span className="text-red-600"> WEB DEVELOPER.</span>
    </h1>
    <p className="text-white text-lg max-w-3xl mb-8 text-shadow-sm">
      I'm a medical lab tech who's started dabbling in coding and AI. I've picked up some JavaScript—nothing fancy, just enough to tinker—and I'm hooked on how AI could shake up healthcare. Think better diagnostics, less guesswork, and maybe a little less coffee for me. If you're into tech, healthcare, or both, let's chat!
    </p>
    <div className="flex flex-wrap gap-4">
      <a 
        href="https://yellow-vin-17.tiiny.site" 
        target="_blank" 
        rel="noopener noreferrer" 
        className="bg-white text-black px-8 py-3 rounded-md flex items-center font-medium hover:bg-gray-200 transition-all transform hover:-translate-y-1"
      >
        <span className="mr-2">▶</span> Resume
      </a>
      <a 
        href="https://linkedin.com/in/usama-hsnn-532058331/" 
        target="_blank" 
        rel="noopener noreferrer" 
        className="group bg-gradient-to-r from-blue-700 to-blue-900 text-white px-8 py-3 rounded-md font-medium border border-blue-800 hover:border-blue-600 transition-all transform hover:-translate-y-1 flex items-center"
      >
        <svg 
          className="w-5 h-5 mr-2 group-hover:animate-pulse" 
          fill="currentColor" 
          viewBox="0 0 24 24" 
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
        </svg>
        LinkedIn
      </a>
      <a 
        href="https://github.com/shamihsnn" 
        target="_blank" 
        rel="noopener noreferrer" 
        className="group bg-gradient-to-r from-gray-900 to-black text-white px-8 py-3 rounded-md font-medium border border-gray-700 hover:border-gray-500 transition-all transform hover:-translate-y-1 flex items-center"
      >
        <svg 
          className="w-5 h-5 mr-2 group-hover:animate-pulse" 
          fill="currentColor" 
          viewBox="0 0 24 24" 
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
        </svg>
        GitHub
      </a>
    </div>
  </div>
</section>

        </div>

       {/* The rest of the content - No video background here */}
<div className="bg-netflix-black">
  {/* Top Picks Section with real images */}
  <section className="px-12 py-16">
    <h2 className="text-3xl font-bold mb-8">Today's Top Picks for recruiter</h2>
    <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
      {[
        { 
          title: 'Work Permit', 
          image: '/lovable-uploads/27c510dc-dc9f-4470-a7b9-34279eb80bca.jpeg',
          link: 'https://linkedin.com/in/usama-hsnn-532058331/'
        },
        { 
          title: 'Skills', 
          image: '/lovable-uploads/OIP.jpeg',
          link: 'https://linkedin.com/in/usama-hsnn-532058331/'
        },
        { 
          title: 'Experience', 
          image: '/lovable-uploads/R.jpeg',
          link: 'https://linkedin.com/in/usama-hsnn-532058331/'
        },
        { 
          title: 'Certifications', 
          image: '/lovable-uploads/download (1).jpeg',
          link: 'https://linkedin.com/in/usama-hsnn-532058331/'
        },
        { 
          title: 'Recommendations', 
          image: '/lovable-uploads/OIP (1).jpeg',
          link: 'https://linkedin.com/in/usama-hsnn-532058331/'
        },
      ].map((item) => (
        <a 
          href={item.link} 
          target="_blank" 
          rel="noopener noreferrer" 
          key={item.title} 
          className="aspect-video relative rounded-md overflow-hidden group card-hover"
        >
          <img 
            src={item.image} 
            alt={item.title} 
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105" 
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent flex items-end p-4">
            <div className="w-full">
              <span className="text-white font-medium block">{item.title}</span>
              <div className="flex items-center mt-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <svg className="w-4 h-4 text-linkedin-blue mr-1" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                </svg>
                <span className="text-xs text-gray-300">View on LinkedIn</span>
              </div>
            </div>
          </div>
        </a>
      ))}
    </div>
  </section>



          {/* Continue Watching Section with real images */}
         {/* Continue Watching Section with real images */}
<section className="px-12 py-16">
  <h2 className="text-3xl font-bold mb-8">Continue Watching for recruiter</h2>
  <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
    {[
      { 
        title: 'Music', 
        image: 'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?q=80&w=1470&auto=format&fit=crop',
        link: 'https://open.spotify.com/playlist/3scePqK5heddXZ5lxyiqck?si=lOE-8O8_QWWYDjmJRw6iJg'
      },
      { 
        title: 'Reading', 
        image: 'https://images.unsplash.com/photo-1513001900722-370f803f498d?q=80&w=1374&auto=format&fit=crop',
        link: 'https://www.goodreads.com/friend/i?feature=friend-invite-url&invite_token=MGI4ZTYwMTktNzFiMy00YmM1LTk3Y2MtYjMwNmRmMjI2ZDRj'
      },
      { 
        title: 'Blogs', 
        image: 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?q=80&w=1472&auto=format&fit=crop',
        link: 'https://beryl-sprout-88a.notion.site/Model-Context-Protocol-MCP-The-AI-Connectivity-Revolution-1c4dd885068380c2bccdfc329715cb49'
      },
      { 
        title: 'Contact Me', 
        image: 'https://images.unsplash.com/photo-1516387938699-a93567ec168e?q=80&w=1471&auto=format&fit=crop',
        link: 'mailto:usamahsnnn@gmail.com'
      },
    ].map((item) => (
      <a 
        href={item.link} 
        target="_blank" 
        rel="noopener noreferrer" 
        key={item.title} 
        className="aspect-video relative rounded-md overflow-hidden group card-hover cursor-pointer"
      >
        <img 
          src={item.image} 
          alt={item.title} 
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105" 
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent flex items-end p-4">
          <div className="w-full">
            <span className="text-white font-medium block">{item.title}</span>
            <div className="flex items-center mt-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <div className="h-0.5 w-6 bg-netflix-red mr-2"></div>
              <span className="text-xs text-gray-300">View now</span>
            </div>
          </div>
        </div>
      </a>
    ))}
  </div>
</section>

        </div>
      </div>
    );
  }

  // For Developer profile specifically - use the custom layout
  else if (profileType?.toLowerCase() === 'developer') {
    return (
      <div className="min-h-screen bg-netflix-black text-white">
        {/* Navigation */}
        <nav className="fixed top-0 left-0 right-0 z-50 bg-black/30 backdrop-blur-sm px-12 py-4">
          <div className="flex justify-between items-center">
            <div className="text-2xl font-bold">
              <span className="text-red-600">U</span>SAMA HASSAN
            </div>
            <div className="flex space-x-6 items-center">
              <a href="#home" className="hover:text-red-600 transition-colors">Home</a>
              <a href="#professional" className="hover:text-red-600 transition-colors">Professional</a>
              <a href="#skills" className="hover:text-red-600 transition-colors">Skills</a>
              <a href="#projects" className="hover:text-red-600 transition-colors">Projects</a>
              <a href="#hire-me" className="hover:text-red-600 transition-colors">Hire Me</a>
            </div>
          </div>
        </nav>

        {/* Hero Section with Video Background */}
        <div className="relative">
          <div className="w-full h-screen absolute top-0 left-0 overflow-hidden">
            <video 
              autoPlay 
              loop 
              muted 
              playsInline 
              className="w-full h-full object-cover opacity-100"
            >
              <source src={getProfileBgVideo()} type="video/mp4" />
            </video>
          </div>
          
         {/* Hero Content */}
<section id="home" className="relative h-screen pt-24 z-10">
  <div className="px-12 h-full flex flex-col justify-center">
    <h1 className="text-4xl md:text-5xl font-bold mb-6 text-shadow-sm">
      Usama Hassan - <span className="text-red-600">Full Stack Developer</span>
    </h1>
    <p className="text-white text-lg max-w-3xl mb-8 text-shadow-sm">
      Dynamic and results-driven Full Stack Developer with expertise in modern web technologies. Passionate about creating scalable solutions and delivering exceptional user experiences.
    </p>
    <div className="flex flex-wrap gap-4">
      <a 
        href="https://yellow-vin-17.tiiny.site" 
        target="_blank" 
        rel="noopener noreferrer" 
        className="bg-white text-black px-8 py-3 rounded-md flex items-center font-medium hover:bg-gray-200 transition-all transform hover:-translate-y-1"
      >
        <span className="mr-2">▶</span> Resume
      </a>
      <a 
        href="https://linkedin.com/in/usama-hsnn-532058331/" 
        target="_blank" 
        rel="noopener noreferrer" 
        className="group bg-gradient-to-r from-blue-700 to-blue-900 text-white px-8 py-3 rounded-md font-medium border border-blue-800 hover:border-blue-600 transition-all transform hover:-translate-y-1 flex items-center"
      >
        <svg 
          className="w-5 h-5 mr-2 group-hover:animate-pulse" 
          fill="currentColor" 
          viewBox="0 0 24 24" 
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
        </svg>
        LinkedIn
      </a>
      <a 
        href="https://github.com/shamihsnn" 
        target="_blank" 
        rel="noopener noreferrer" 
        className="group bg-gradient-to-r from-gray-900 to-black text-white px-8 py-3 rounded-md font-medium border border-gray-700 hover:border-gray-500 transition-all transform hover:-translate-y-1 flex items-center"
      >
        <svg 
          className="w-5 h-5 mr-2 group-hover:animate-pulse" 
          fill="currentColor" 
          viewBox="0 0 24 24" 
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
        </svg>
        GitHub
      </a>
    </div>
  </div>
</section>
</div>


        {/* Today's Top Picks Section */}
        <section className="px-12 py-16">
          <h2 className="text-3xl font-bold mb-8">Today's Top Picks for developer</h2>
          <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
            {[
              { 
                title: 'Skills', 
                image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=2070&auto=format&fit=crop' 
              },
              { 
                title: 'Projects', 
                image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=2070&auto=format&fit=crop' 
              },
              { 
                title: 'Certifications', 
                image: 'https://images.unsplash.com/photo-1496171367470-9ed9a91ea931?q=80&w=2070&auto=format&fit=crop' 
              },
              { 
                title: 'Experience', 
                image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?q=80&w=2069&auto=format&fit=crop' 
              },
              { 
                title: 'Recommendations', 
                image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2070&auto=format&fit=crop' 
              },
            ].map((item) => (
              <div key={item.title} className="aspect-video relative rounded-md overflow-hidden group card-hover">
                <img 
                  src={item.image} 
                  alt={item.title} 
                  className="w-full h-full object-cover" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent flex items-end p-4">
                  <span className="text-white font-medium">{item.title}</span>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Continue Watching Section */}
        <section className="px-12 py-16">
          <h2 className="text-3xl font-bold mb-8">Continue Watching for developer</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            {[
              { 
                title: 'Technical Blog', 
                image: 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?q=80&w=2072&auto=format&fit=crop' 
              },
              { 
                title: 'Open Source', 
                image: 'https://images.unsplash.com/photo-1549692520-acc6669e2f0c?q=80&w=2070&auto=format&fit=crop' 
              },
              { 
                title: 'Portfolio', 
                image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=2072&auto=format&fit=crop' 
              },
              { 
                title: 'Contact', 
                image: 'https://images.unsplash.com/photo-1516387938699-a93567ec168e?q=80&w=2071&auto=format&fit=crop' 
              },
            ].map((item) => (
              <div key={item.title} className="aspect-video relative rounded-md overflow-hidden group card-hover">
                <img 
                  src={item.image} 
                  alt={item.title} 
                  className="w-full h-full object-cover" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent flex items-end p-4">
                  <span className="text-white font-medium">{item.title}</span>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    );
  }

  // For Stalker profile specifically - use the custom layout
  else if (profileType?.toLowerCase() === 'stalker') {
    return (
      <div className="min-h-screen bg-netflix-black text-white">
        {/* Navigation */}
        <nav className="fixed top-0 left-0 right-0 z-50 bg-black/30 backdrop-blur-sm px-12 py-4">
          <div className="flex justify-between items-center">
            <div className="text-2xl font-bold">
              <span className="text-netflix-red">U</span>SAMA HASSAN
            </div>
            <div className="flex space-x-6 items-center">
              <a href="#personal" className="hover:text-netflix-red transition-colors">Personal</a>
              <a href="#hobbies" className="hover:text-netflix-red transition-colors">Hobbies</a>
              <a href="#lifestyle" className="hover:text-netflix-red transition-colors">Lifestyle</a>
              <a href="#interests" className="hover:text-netflix-red transition-colors">Interests</a>
              <a href="#social" className="hover:text-netflix-red transition-colors">Social</a>
            </div>
          </div>
        </nav>

        {/* Hero Section */}
        <div className="relative">
          <div className="w-full h-screen absolute top-0 left-0 overflow-hidden">
            <video 
              autoPlay 
              loop 
              muted 
              playsInline 
              className="w-full h-full object-cover opacity-100"
            >
              <source src={getProfileBgVideo()} type="video/mp4" />
            </video>
          </div>

          <section id="personal" className="relative h-screen pt-24 z-10">
  <div className="px-12 h-full flex flex-col justify-center">
    <h1 className="text-4xl md:text-5xl font-bold mb-6 text-shadow-lg">
      The side of my <span className="text-netflix-red">STORY</span>
    </h1>
    <p className="text-white text-lg max-w-3xl mb-8 text-shadow-sm">
      Beyond the code and career, there's a person with unique interests and stories. 
      A blend of creativity, curiosity, and passion shapes my world outside of tech.
    </p>
    <div className="flex space-x-4">
      <div className="relative group">
        <button className="bg-netflix-red text-white px-8 py-3 rounded-md flex items-center font-medium hover:bg-red-700">
          <span className="mr-2">▶</span> Personal Blog
        </button>
        <div className="absolute left-0 mt-2 w-64 rounded-md shadow-lg bg-black bg-opacity-90 border border-netflix-gray transform scale-0 group-hover:scale-100 transition-transform duration-150 origin-top-left z-20">
          <div className="py-2">
            <a 
              href="https://beryl-sprout-88a.notion.site/Model-Context-Protocol-MCP-The-AI-Connectivity-Revolution-1c4dd885068380c2bccdfc329715cb49" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="block px-4 py-2 text-white hover:bg-netflix-red transition-colors duration-150"
            >
              AI Connectivity Revolution
            </a>
            <a 
              href="https://beryl-sprout-88a.notion.site/Introduction-to-Python-1a9dd8850683802cabeafa92740d3757" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="block px-4 py-2 text-white hover:bg-netflix-red transition-colors duration-150"
            >
              Introduction to Python
            </a>
          </div>
        </div>
      </div>

      <div className="relative group">
        <button className="bg-transparent border border-netflix-gray hover:border-white text-white px-8 py-3 rounded-md font-medium">
          <span className="mr-2">ⓘ</span> Social Links
        </button>
        <div className="absolute left-0 mt-2 w-64 rounded-md shadow-lg bg-black bg-opacity-90 border border-netflix-gray transform scale-0 group-hover:scale-100 transition-transform duration-150 origin-top-left z-20">
          <div className="py-2">
            <a 
              href="https://www.instagram.com/vedhika4u/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="block px-4 py-2 text-white hover:bg-netflix-red transition-colors duration-150"
            >
              Instagram
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

        </div>

        {/* Today's Top Picks Section */}
        <section className="px-12 py-16 bg-netflix-black">
          <h2 className="text-3xl font-bold mb-8">Today's Top Picks for stalker</h2>
          <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
            {[
              { 
                title: 'Travel Stories', 
                image: 'https://images.unsplash.com/photo-1469474968028-56623f02e42e?q=80&w=2074&auto=format&fit=crop' 
              },
              { 
                title: 'Photography', 
                image: 'https://images.unsplash.com/photo-1452587925148-ce544e77e70d?q=80&w=2074&auto=format&fit=crop' 
              },
              { 
                title: 'Music Playlist', 
                image: 'https://images.unsplash.com/photo-1514320291840-2e0a9bf2a9ae?q=80&w=2070&auto=format&fit=crop' 
              },
              { 
                title: 'Book Collection', 
                image: 'https://images.unsplash.com/photo-1481627834876-b7833e8f5570?q=80&w=2028&auto=format&fit=crop' 
              },
              { 
                title: 'Art Gallery', 
                image: 'https://images.unsplash.com/photo-1513364776144-60967b0f800f?q=80&w=2071&auto=format&fit=crop' 
              },
            ].map((item) => (
              <div key={item.title} className="aspect-video relative rounded-md overflow-hidden group card-hover">
                <img src={item.image} alt={item.title} className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent flex items-end p-4">
                  <span className="text-white font-medium">{item.title}</span>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Continue Exploring Section */}
        <section className="px-12 py-16">
          <h2 className="text-3xl font-bold mb-8">Continue Exploring</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            {[
              { 
                title: 'Daily Routine', 
                image: 'https://images.unsplash.com/photo-1506485338023-6ce5f36692df?q=80&w=2070&auto=format&fit=crop' 
              },
              { 
                title: 'Favorite Places', 
                image: 'https://images.unsplash.com/photo-1493246507139-91e8fad9978e?q=80&w=2070&auto=format&fit=crop' 
              },
              { 
                title: 'Food Adventures', 
                image: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?q=80&w=2070&auto=format&fit=crop' 
              },
              { 
                title: 'Hobbies', 
                image: 'https://images.unsplash.com/photo-1472289065668-ce650ac443d2?q=80&w=2069&auto=format&fit=crop' 
              },
            ].map((item) => (
              <div key={item.title} className="aspect-video relative rounded-md overflow-hidden group card-hover">
                <img src={item.image} alt={item.title} className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent flex items-end p-4">
                  <span className="text-white font-medium">{item.title}</span>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    );
  }

  // For Adventurer profile specifically - use the custom layout
  else if (profileType?.toLowerCase() === 'adventurer') {
    return (
      <div className="min-h-screen bg-netflix-black text-white">
        {/* Navigation */}
        <nav className="fixed top-0 left-0 right-0 z-50 bg-black/30 backdrop-blur-sm px-12 py-4">
          <div className="flex justify-between items-center">
            <div className="text-2xl font-bold">
              <span className="text-netflix-red">U</span>SAMA HASSAN
            </div>
            <div className="flex space-x-6 items-center">
              <a href="#adventures" className="hover:text-netflix-red transition-colors">Adventures</a>
              <a href="#experiments" className="hover:text-netflix-red transition-colors">Experiments</a>
              <a href="#challenges" className="hover:text-netflix-red transition-colors">Challenges</a>
              <a href="#gallery" className="hover:text-netflix-red transition-colors">Gallery</a>
              <a href="#stories" className="hover:text-netflix-red transition-colors">Stories</a>
            </div>
          </div>
        </nav>

        {/* Hero Section */}
        <div className="relative">
          <div className="w-full h-screen absolute top-0 left-0 overflow-hidden">
            <video 
              autoPlay 
              loop 
              muted 
              playsInline 
              className="w-full h-full object-cover opacity-100"
            >
              <source src={getProfileBgVideo()} type="video/mp4" />
            </video>
          </div>

          <section id="adventures" className="relative h-screen pt-24 z-10">
            <div className="px-12 h-full flex flex-col justify-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6 text-shadow-xl">
                Adventure Awaits with <span className="text-netflix-red">Usama Hassan</span>
              </h1>
              <p className="text-white text-lg max-w-3xl mb-8 text-shadow-lg">
                Life is an experiment, and I'm the mad scientist. Join me on a journey through 
                unconventional projects, wild ideas, and the occasional controlled chaos.
              </p>
              <div className="flex space-x-4">
                <button className="bg-netflix-red text-white px-8 py-3 rounded-md flex items-center font-medium hover:bg-red-700">
                  <span className="mr-2">▶</span> Latest Adventure
                </button>
                <button className="bg-transparent border border-white hover:border-netflix-red text-white px-8 py-3 rounded-md font-medium backdrop-blur-sm">
                  <span className="mr-2">ⓘ</span> Adventure Map
                </button>
              </div>
            </div>
          </section>
        </div>

        {/* Today's Expeditions Section */}
        <section className="px-12 py-16">
          <h2 className="text-3xl font-bold mb-8">Today's Expeditions</h2>
          <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
            {[
              { 
                title: 'Side Projects', 
                image: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=2070&auto=format&fit=crop' 
              },
              { 
                title: 'Experiments', 
                image: 'https://images.unsplash.com/photo-1507413245164-6160d8298b31?q=80&w=2070&auto=format&fit=crop' 
              },
              { 
                title: 'Challenges', 
                image: 'https://images.unsplash.com/photo-1526749837599-b4eba9fd855e?q=80&w=2070&auto=format&fit=crop' 
              },
              { 
                title: 'Adventures', 
                image: 'https://images.unsplash.com/photo-1519904981063-b0cf448d479e?q=80&w=2070&auto=format&fit=crop' 
              },
              { 
                title: 'Innovation Lab', 
                image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=2070&auto=format&fit=crop' 
              },
            ].map((item) => (
              <div key={item.title} className="aspect-video relative rounded-md overflow-hidden group card-hover">
                <img src={item.image} alt={item.title} className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent flex items-end p-4">
                  <span className="text-white font-medium">{item.title}</span>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Continue The Journey Section */}
        <section className="px-12 py-16">
          <h2 className="text-3xl font-bold mb-8">Continue The Journey</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            {[
              { 
                title: 'Latest Expedition', 
                image: 'https://images.unsplash.com/photo-1501785888041-af3ef285b470?q=80&w=2070&auto=format&fit=crop' 
              },
              { 
                title: 'Innovation Hub', 
                image: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?q=80&w=2070&auto=format&fit=crop' 
              },
              { 
                title: 'Project Lab', 
                image: 'https://images.unsplash.com/photo-1581092335878-2d9ff86ca2bf?q=80&w=2070&auto=format&fit=crop' 
              },
              { 
                title: 'Next Quest', 
                image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=2072&auto=format&fit=crop' 
              },
            ].map((item) => (
              <div key={item.title} className="aspect-video relative rounded-md overflow-hidden group card-hover">
                <img src={item.image} alt={item.title} className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent flex items-end p-4">
                  <span className="text-white font-medium">{item.title}</span>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    );
  }

  // For other profiles, use the standard layout
  return (
    <div className="bg-netflix-black min-h-screen relative">
      {/* Background Video */}
      <div className="fixed inset-0 z-0 overflow-hidden">
        <video 
          className={`w-full h-full object-cover ${
            profileType?.toLowerCase() === 'adventurer' 
              ? 'opacity-90' // Higher opacity for adventurer
              : 'opacity-80' // Default opacity for other profiles
          }`}
          autoPlay 
          loop 
          muted={muted}
          playsInline
        >
          <source src={getProfileBgVideo()} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>

      {/* Easter Egg */}
      {showEasterEgg && (
        <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-netflix-dark/90 p-6 rounded-lg z-50 max-w-md animate-bounce">
          <p className="text-white text-xl font-medium">{getEasterEggQuote()}</p>
          <button 
            onClick={toggleEasterEgg}
            className="mt-4 bg-netflix-red text-white px-4 py-2 rounded hover:bg-red-700 transition"
          >
            Got it!
          </button>
        </div>
      )}

      {/* Back button */}
      <div className="fixed top-6 left-6 z-50">
        <button 
          onClick={() => navigate("/profiles")}
          className="bg-netflix-dark/50 text-white p-2 rounded-full hover:bg-netflix-red/80 transition-colors"
        >
          <ChevronLeft size={24} />
        </button>
      </div>

      {/* Mute/Unmute button */}
      <div className="fixed top-6 right-20 z-50">
        <button 
          onClick={toggleMute}
          className="bg-netflix-dark/50 text-white p-2 rounded-full hover:bg-netflix-red/80 transition-colors"
        >
          {muted ? <VolumeX size={24} /> : <Volume2 size={24} />}
        </button>
      </div>

      {/* Easter Egg button */}
      <div className="fixed top-6 right-6 z-50">
        <button 
          onClick={toggleEasterEgg}
          className="bg-netflix-dark/50 text-white p-2 rounded-full hover:bg-netflix-red/80 transition-colors"
        >
          <Laugh size={24} />
        </button>
      </div>
      
      <div className="relative z-10">
        <Navbar />
        
        {/* Custom welcome section for the profile type */}
        <div className="pt-20 pb-10 px-4 md:px-16 bg-gradient-to-b from-netflix-dark/90 to-transparent">
          <h1 className="text-white text-3xl md:text-4xl font-medium animate-fade-in">
            Welcome to <span className="text-netflix-red">{profile.type}'s</span> View
          </h1>
          <p className="text-white/80 mt-2 max-w-3xl animate-fade-in delay-300">
            {profile.type === "Developer" && "Fellow coder! Check out my technical projects, coding skills, and developer journey. Coffee not included."}
            {profile.type === "Stalker" && "Curious about me? Here's my personal interests, hobbies, and lifestyle. Don't worry, I won't call the police... probably."}
            {profile.type === "Adventurer" && "Ready for an adventure? Dive into my creative experiments and wild projects. Helmet recommended!"}
          </p>

          <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6 animate-fade-in delay-500">
            {profile.skills.map((skillGroup, index) => (
              <div key={index} className="bg-black rounded-md overflow-hidden transform hover:scale-105 transition-all duration-300 hover:shadow-[0_0_15px_rgba(229,9,20,0.5)]">
                <div className="p-4 flex items-center space-x-2">
                  <img 
                    src={`/lovable-uploads/15e64bd8-304a-4b88-a97b-53e0b2089f34.jpg`} 
                    alt="Skill icon" 
                    className="w-8 h-8 rounded-full" 
                  />
                  <h3 className="text-white text-xl">{skillGroup.category}</h3>
                </div>
                <div className="p-4 flex flex-wrap gap-2">
                  {skillGroup.techs.map((tech, techIndex) => (
                    <span 
                      key={techIndex} 
                      className="bg-netflix-red text-white px-3 py-1 rounded-full text-sm hover:bg-red-700 hover:scale-110 transition-all cursor-pointer"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
        
        {/* Content rows for this profile */}
        <div className="pb-16">
          {filteredContent.map((category) => (
            <ContentRow key={category.id} category={category} />
          ))}
        </div>
        
        <Footer />
      </div>
    </div>
  );
};

export default ProfilePage;
