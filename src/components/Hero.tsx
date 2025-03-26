
import React from "react";
import { Play, Info } from "lucide-react";
import { featuredProject, myInfo } from "@/lib/data";

const Hero = () => {
  return (
    <section
      id="home"
      className="relative h-screen w-full overflow-hidden"
      style={{
        backgroundImage: `url(${featuredProject.thumbnail})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="absolute inset-0 bg-black/50"></div>
      <div className="absolute inset-0 hero-gradient"></div>

      <div className="relative z-10 h-full container mx-auto px-4 flex flex-col justify-end pb-24 md:pb-48">
        <div className="max-w-2xl animate-slide-in">
          <h1 className="text-2xl md:text-5xl font-bold text-white mb-2 md:mb-4">
            {myInfo.name}
          </h1>
          <h2 className="text-xl md:text-3xl font-medium text-white mb-4 md:mb-6">
            {myInfo.role}
          </h2>
          <p className="text-white/80 text-base md:text-lg mb-8">
            {myInfo.bio}
          </p>

          <div className="flex flex-wrap gap-4">
            <a
              href="#projects"
              className="flex items-center gap-2 bg-white text-netflix-black font-medium px-5 py-3 rounded hover:bg-white/90 transition-colors"
            >
              <Play size={18} />
              View My Work
            </a>
            <a
              href="#about"
              className="flex items-center gap-2 bg-gray-500/30 text-white font-medium px-5 py-3 rounded hover:bg-gray-500/50 transition-colors"
            >
              <Info size={18} />
              More About Me
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
