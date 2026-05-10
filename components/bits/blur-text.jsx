import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

const BlurText = ({
  text = "",
  className = "",
  delay = 0.1,
  threshold = 0.1,
  rootMargin = '0px',
  textAlign = 'left',
}) => {
  const words = text.split(" ");
  const [inView, setInView] = useState(false);
  const ref = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
        }
      },
      { threshold, rootMargin }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [threshold, rootMargin]);

  return (
    <p
      ref={ref}
      className={`${className}`}
      style={{ textAlign, display: 'block' }}
    >
      {words.map((word, index) => (
        <motion.span
          key={index}
          initial={{ filter: "blur(10px)", opacity: 0, y: 5 }}
          animate={inView ? { filter: "blur(0px)", opacity: 1, y: 0 } : {}}
          transition={{
            duration: 0.8,
            delay: index * delay,
            ease: "easeOut",
          }}
          style={{
            display: 'inline-block',
            whiteSpace: 'pre',
          }}
        >
          {word}{index !== words.length - 1 ? " " : ""}
        </motion.span>
      ))}
    </p>
  );
};

export default BlurText;
