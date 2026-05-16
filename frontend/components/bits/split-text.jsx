import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

const SplitText = ({
  text = "",
  className = "",
  delay = 0.05,
  animationFrom = { opacity: 0, y: 40 },
  animationTo = { opacity: 1, y: 0 },
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
          initial={animationFrom}
          animate={inView ? animationTo : animationFrom}
          transition={{
            duration: 0.6,
            delay: index * delay,
            ease: [0.215, 0.61, 0.355, 1],
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

export default SplitText;

