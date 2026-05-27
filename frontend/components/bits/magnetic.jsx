"use client";

import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

export default function Magnetic({ children, intensity = 0.5 }) {
  const ref = useRef(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isInteractive, setIsInteractive] = useState(true);

  useEffect(() => {
    const hoverQuery = window.matchMedia("(hover: hover) and (pointer: fine)");
    const reducedMotionQuery = window.matchMedia("(prefers-reduced-motion: reduce)");

    const updateState = () => {
      setIsInteractive(hoverQuery.matches && !reducedMotionQuery.matches);
    };

    updateState();

    hoverQuery.addEventListener("change", updateState);
    reducedMotionQuery.addEventListener("change", updateState);

    return () => {
      hoverQuery.removeEventListener("change", updateState);
      reducedMotionQuery.removeEventListener("change", updateState);
    };
  }, []);

  const handleMouseMove = (e) => {
    if (!isInteractive || !ref.current) {
      return;
    }

    const { clientX, clientY } = e;
    const { left, top, width, height } = ref.current.getBoundingClientRect();
    const x = (clientX - (left + width / 2)) * intensity;
    const y = (clientY - (top + height / 2)) * intensity;
    setPosition({ x, y });
  };

  const handleMouseLeave = () => {
    setPosition({ x: 0, y: 0 });
  };

  if (!isInteractive) {
    return <div ref={ref}>{children}</div>;
  }

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      animate={{ x: position.x, y: position.y }}
      transition={{ type: "spring", stiffness: 150, damping: 15, mass: 0.1 }}
    >
      {children}
    </motion.div>
  );
}

