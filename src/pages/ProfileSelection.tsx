
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { profiles } from "@/lib/profiles";

const ProfileSelection = () => {
  const navigate = useNavigate();
  const [hoveredProfile, setHoveredProfile] = useState<number | null>(null);

  const handleProfileSelect = (profileType: string) => {
    // Navigate to the profile-specific route
    navigate(`/profile/${profileType.toLowerCase()}`);
  };

  return (
    <div className="min-h-screen bg-netflix-dark flex flex-col items-center justify-center p-4">
      <h1 className="text-white text-4xl font-medium mb-16 animate-fade-in">
        Who's Watching?
      </h1>
      
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-10 animate-slide-in">
        {profiles.map((profile, index) => (
          <div 
            key={profile.id} 
            className="flex flex-col items-center cursor-pointer group transform transition-all duration-300 hover:scale-110"
            onClick={() => handleProfileSelect(profile.type)}
            onMouseEnter={() => setHoveredProfile(profile.id)}
            onMouseLeave={() => setHoveredProfile(null)}
          >
            <div className={`w-28 h-28 md:w-36 md:h-36 mb-4 rounded overflow-hidden border-4 ${
              hoveredProfile === profile.id ? 'border-white scale-105' : 'border-transparent'
            } transition-all duration-300`}>
              <img 
                src={profile.avatar} 
                alt={profile.type}
                className="w-full h-full object-cover" 
              />
            </div>
            <span className={`text-xl transition-colors duration-300 ${
              hoveredProfile === profile.id ? 'text-white' : 'text-netflix-gray'
            }`}>
              {profile.type}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProfileSelection;
