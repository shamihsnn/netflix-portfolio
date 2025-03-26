
import React, { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ContentRow from "@/components/ContentRow";
import Footer from "@/components/Footer";
import { contentRows, myInfo, skills } from "@/lib/data";
import { Code, User, Github, Linkedin } from "lucide-react";

const Index = () => {
  // Smooth scroll for anchor links
  useEffect(() => {
    const handleAnchorClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const anchor = target.closest('a[href^="#"]');
      
      if (anchor) {
        e.preventDefault();
        const id = anchor.getAttribute("href")?.slice(1);
        if (id) {
          const element = document.getElementById(id);
          if (element) {
            window.scrollTo({
              top: element.offsetTop - 80, // Adjust for navbar
              behavior: "smooth",
            });
          }
        }
      }
    };

    document.addEventListener("click", handleAnchorClick);
    return () => document.removeEventListener("click", handleAnchorClick);
  }, []);

  return (
    <div className="min-h-screen bg-netflix-black text-white overflow-x-hidden">
      <Navbar />
      <Hero />

      {/* Projects Section */}
      <section id="projects" className="py-12 md:py-20">
        <div className="container mx-auto px-4 mb-8">
          <div className="flex items-center gap-2 mb-8">
            <Code className="text-netflix-red" size={24} />
            <h2 className="text-2xl md:text-3xl font-bold text-white">
              My Portfolio
            </h2>
          </div>
        </div>

        {/* Content Rows */}
        <div className="space-y-6 md:space-y-12">
          {contentRows.map((category) => (
            <ContentRow key={category.id} category={category} />
          ))}
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-12 md:py-20 bg-netflix-black/50">
        <div className="container mx-auto px-4">
          <div className="flex items-center gap-2 mb-8">
            <User className="text-netflix-red" size={24} />
            <h2 className="text-2xl md:text-3xl font-bold text-white">
              About Me
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1">
              <h3 className="text-xl md:text-2xl font-semibold text-white mb-4">
                Who am I?
              </h3>
              <p className="text-white/80 mb-6 leading-relaxed">
                I'm a passionate software engineer and designer with a focus on creating
                beautiful, functional, and user-centered digital experiences. With a
                background in both design and development, I bring a unique perspective
                to every project I work on.
              </p>
              <p className="text-white/80 mb-6 leading-relaxed">
                When I'm not coding or designing, you can find me exploring new
                technologies, contributing to open-source projects, or sharing my
                knowledge through blog posts and community events.
              </p>
              <div className="flex gap-4">
                <a
                  href={myInfo.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 bg-netflix-red text-white px-4 py-2 rounded hover:bg-red-700 transition-colors"
                >
                  <Github size={18} />
                  GitHub
                </a>
                <a
                  href={myInfo.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 bg-netflix-gray/50 text-white px-4 py-2 rounded hover:bg-netflix-gray/70 transition-colors"
                >
                  <Linkedin size={18} />
                  LinkedIn
                </a>
              </div>
            </div>

            <div className="order-1 md:order-2">
              <h3 className="text-xl md:text-2xl font-semibold text-white mb-4">
                Skills & Expertise
              </h3>
              <div className="space-y-6">
                {skills.map((skill) => (
                  <div key={skill.category}>
                    <h4 className="text-netflix-red font-medium mb-2">
                      {skill.category}
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {skill.techs.map((tech) => (
                        <span
                          key={tech}
                          className="bg-netflix-gray/30 text-white/90 px-3 py-1.5 rounded text-sm"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
