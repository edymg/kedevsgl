import { motion } from "framer-motion";

export default function AnimatedBackground() {
  return (
    <div className="absolute inset-0 -z-10 overflow-hidden">
      <motion.div
        className="absolute -inset-[100%] opacity-50"
        style={{
          background:
            "radial-gradient(circle, rgba(173,216,230,0.3) 0%, rgba(144,238,144,0.3) 100%)",
        }}
        animate={{
          scale: [1, 1.1, 1],
          rotate: [0, 10, 0],
        }}
        transition={{
          duration: 20,
          ease: "easeInOut",
          repeat: Infinity,
        }}
      />
    </div>
  );
}
