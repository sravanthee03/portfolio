// src/components/ProfileAvatar.jsx
import React from "react";
import profile from "../assets/profile.jpg";

export default function ProfileAvatar({ size = 72, className = "" }) {
  // a minimal circular avatar (no card, no badge)
  return (
    
      <div
        style={{ width: size, height: size }}
       
        aria-hidden
      >
        
      </div>
   
  );
}
