import { motion } from "framer-motion";

const ShinyText = ({ text, className = "", disabled = false, speed = 5, color = "rgba(255, 255, 255, 0.8)" }) => {
  const animationDuration = `${speed}s`;
  
  // If the color is red, just render a simple solid text instead of the shiny effect
  const isRed = color.includes("214, 11, 11") || color.includes("#d60b0b") || color.includes("d60b0b");
  
  if (isRed) {
    return (
      <span className={`inline-block ${className}`} style={{ color }}>
        {text}
      </span>
    );
  }

  return (
    <span
      className={`relative inline-block overflow-hidden bg-clip-text text-transparent bg-gradient-to-r from-transparent via-white/80 to-transparent bg-[length:200%_100%] animate-shine ${className}`}
      style={{
        backgroundImage: `linear-gradient(120deg, transparent 30%, ${color} 50%, transparent 70%)`,
        backgroundSize: '200% 100%',
        animation: disabled ? 'none' : `shine ${animationDuration} infinite linear`,
      }}
    >
      {text}
      <style>{`
        @keyframes shine {
          0% { background-position: 200% 0; }
          100% { background-position: -200% 0; }
        }
      `}</style>
    </span>
  );
};

export default ShinyText;

