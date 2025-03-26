
import React from "react";
import { Github, Linkedin, Mail, MapPin } from "lucide-react";
import { myInfo } from "@/lib/data";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer id="contact" className="bg-netflix-black/50 backdrop-blur py-12 border-t border-netflix-gray/20">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="text-netflix-red text-xl font-bold mb-4">Contact</h3>
            <ul className="space-y-2">
              <li className="flex items-center gap-2 text-white/70 hover:text-white transition-colors">
                <Mail size={18} />
                <a href={`mailto:${myInfo.email}`}>{myInfo.email}</a>
              </li>
              <li className="flex items-center gap-2 text-white/70 hover:text-white transition-colors">
                <MapPin size={18} />
                <span>{myInfo.location}</span>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-netflix-red text-xl font-bold mb-4">Links</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="#home"
                  className="text-white/70 hover:text-white transition-colors"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#projects"
                  className="text-white/70 hover:text-white transition-colors"
                >
                  Projects
                </a>
              </li>
              <li>
                <a
                  href="#about"
                  className="text-white/70 hover:text-white transition-colors"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="text-white/70 hover:text-white transition-colors"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-netflix-red text-xl font-bold mb-4">Social</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href={myInfo.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-white/70 hover:text-white transition-colors"
                >
                  <Github size={18} />
                  GitHub
                </a>
              </li>
              <li>
                <a
                  href={myInfo.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-white/70 hover:text-white transition-colors"
                >
                  <Linkedin size={18} />
                  LinkedIn
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-netflix-red text-xl font-bold mb-4">
              Let's Connect
            </h3>
            <p className="text-white/70 mb-4">
              I'm always open to discussing new projects, creative ideas, or
              opportunities to be part of your vision.
            </p>
            <a
              href={`mailto:${myInfo.email}`}
              className="inline-block bg-netflix-red text-white px-4 py-2 rounded hover:bg-red-700 transition-colors"
            >
              Get In Touch
            </a>
          </div>
        </div>

        <div className="border-t border-netflix-gray/20 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-white/50 mb-4 md:mb-0">
            © {currentYear} {myInfo.name}. All rights reserved.
          </p>
          <p className="text-white/50">
            Made with ❤️ and inspiration from Netflix
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
