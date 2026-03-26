import { Variants } from "framer-motion";

// Fade in from bottom (uso general en secciones)
export const fadeInUp: Variants = {
  hidden: {
    opacity: 0,
    y: 30,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

// Fade in from top
export const fadeInDown: Variants = {
  hidden: {
    opacity: 0,
    y: -30,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

// Fade in sin movimiento
export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.5 },
  },
};

// Slide in from left
export const slideInLeft: Variants = {
  hidden: {
    opacity: 0,
    x: -50,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

// Slide in from right
export const slideInRight: Variants = {
  hidden: {
    opacity: 0,
    x: 50,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

// Scale in (para modales, badges, íconos)
export const scaleIn: Variants = {
  hidden: {
    opacity: 0,
    scale: 0.8,
  },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
};

// Stagger container — wrappea una lista de items animados
export const staggerContainer: Variants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1,
    },
  },
};

// Stagger item — usar dentro de staggerContainer
export const staggerItem: Variants = {
  hidden: {
    opacity: 0,
    y: 20,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
};

// Hover scale (para whileHover)
export const hoverScale = {
  scale: 1.05,
  transition: {
    duration: 0.3,
    ease: "easeOut",
  },
};

// Tap/click scale
export const tapScale = {
  scale: 0.95,
};

// Navbar — transparente en top, frosted glass al hacer scroll
export const navbarVariants: Variants = {
  top: {
    backgroundColor: "rgba(255, 255, 255, 0)",
    backdropFilter: "blur(0px)",
  },
  scrolled: {
    backgroundColor: "rgba(255, 255, 255, 0.9)",
    backdropFilter: "blur(12px)",
  },
};

// Card hover — lift effect para tarjetas de servicios/productos
export const cardHover: Variants = {
  rest: {
    scale: 1,
    y: 0,
    boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1)",
  },
  hover: {
    scale: 1.02,
    y: -5,
    boxShadow: "0 20px 25px -5px rgba(37, 99, 235, 0.15)",
    transition: {
      duration: 0.3,
      ease: "easeOut",
    },
  },
};

// Pulse para CTA buttons
export const pulseVariants: Variants = {
  initial: {
    scale: 1,
    boxShadow: "0 0 0 0 rgba(37, 99, 235, 0.4)",
  },
  pulse: {
    scale: 1.02,
    boxShadow: "0 0 0 10px rgba(37, 99, 235, 0)",
    transition: {
      duration: 1.5,
      repeat: Infinity,
      ease: "easeOut",
    },
  },
};
