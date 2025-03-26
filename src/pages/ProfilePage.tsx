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
        return "https://assets.mixkit.co/videos/preview/mixkit-business-team-having-a-meeting-in-the-office-1634-large.mp4";
      case "developer":
        return "https://assets.mixkit.co/videos/preview/mixkit-hands-typing-on-a-keyboard-in-the-dark-29449-large.mp4";
      case "stalker":
        return "https://assets.mixkit.co/videos/preview/mixkit-beautiful-nature-landscape-2119-large.mp4";
      case "adventurer":
        return "https://assets.mixkit.co/videos/preview/mixkit-creative-hands-of-a-person-painting-a-colorful-picture-42296-large.mp4";
      default:
        return "https://assets.mixkit.co/videos/preview/mixkit-digital-animation-of-a-city-at-night-11748-large.mp4";
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
        <nav className="fixed top-0 left-0 right-0 z-50 bg-black/30 backdrop-blur-sm px-12 py-4">
          <div className="flex justify-between items-center">
            <div className="text-2xl font-bold">
              <span className="text-red-600">S</span>UMANTH SAMALA
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

        {/* Hero Section with Background Video */}
        <div className="relative">
          {/* This is a separate container for the video that only covers the hero section */}
          <div className="w-full h-screen absolute top-0 left-0 overflow-hidden">
            <video 
              autoPlay 
              loop 
              muted 
              playsInline 
              className="w-full h-full object-cover opacity-80"
            >
              <source src="/video/background.mp4" type="video/mp4" />
            </video>
            <div className="absolute inset-0 bg-black/50"></div>
          </div>
          
          {/* Hero Content */}
          <section id="home" className="relative h-screen pt-24 z-10">
            <div className="px-12 h-full flex flex-col justify-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6 text-shadow-sm">
                Sumanth Samala - <span className="text-red-600">Senior ROR Developer</span>
              </h1>
              <p className="text-white text-lg max-w-3xl mb-8 text-shadow-sm">
                Dynamic and results-driven Senior Software Engineer with 5+ years in full-stack development across high-impact, large-scale applications. I bring expertise in Ruby on Rails, React, Node, AWS, Kubernetes, and Docker, with a passion for optimizing systems to scale. I've led initiatives serving 10,000+ users and managing 50 million+ bookings, driving feature-rich integrations like chat, video consultations, and API linkups. A recent achievement was implementing robust security measures across four NHSPS products, including XSS script validation in both frontend and backend, advanced password policies with the Devise gem, and stringent password resets every six months. Additionally, I transformed a legacy reporting engine into a high-speed microservices architecture, reducing report generation from 5 minutes to 5 seconds and delivering real-time insights for users.
              </p>
              <div className="flex space-x-4">
                <button className="bg-white text-black px-8 py-3 rounded-md flex items-center font-medium">
                  <span className="mr-2">▶</span> Resume
                </button>
                <button className="bg-transparent border border-gray-600 hover:border-white text-white px-8 py-3 rounded-md font-medium">
                  <span className="mr-2">ⓘ</span> LinkedIn
                </button>
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
                { title: 'Work Permit', image: '/lovable-uploads/27c510dc-dc9f-4470-a7b9-34279eb80bca.jpeg' },
                { title: 'Skills', image: '/lovable-uploads/OIP.jpeg' },
                { title: 'Experience', image: '/lovable-uploads/R.jpeg' },
                { title: 'Certifications', image: '/lovable-uploads/download (1).jpeg' },
                { title: 'Recommendations', image: '/lovable-uploads/OIP (1).jpeg' },
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

          {/* Continue Watching Section with real images */}
          <section className="px-12 py-16">
            <h2 className="text-3xl font-bold mb-8">Continue Watching for recruiter</h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              {[
                { title: 'Music', image: 'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?q=80&w=1470&auto=format&fit=crop' },
                { title: 'Reading', image: 'https://images.unsplash.com/photo-1513001900722-370f803f498d?q=80&w=1374&auto=format&fit=crop' },
                { title: 'Blogs', image: 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?q=80&w=1472&auto=format&fit=crop' },
                { title: 'Contact Me', image: 'https://images.unsplash.com/photo-1516387938699-a93567ec168e?q=80&w=1471&auto=format&fit=crop' },
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
      </div>
    );
  }

  // For other profiles, use the standard layout
  return (
    <div className="bg-netflix-black min-h-screen relative">
      {/* Background Video */}
      <div className="fixed inset-0 z-0 overflow-hidden">
        <div className="absolute inset-0 bg-netflix-black/60 z-10"></div>
        <video 
          className="w-full h-full object-cover"
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
