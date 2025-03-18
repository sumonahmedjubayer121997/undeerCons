import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FaFacebook, FaTwitter, FaInstagram, FaTools } from "react-icons/fa";

const ComingSoon = () => {
  // Countdown Timer Calculation
  const calculateTimeLeft = () => {
    const targetDate = new Date("2025-06-01T00:00:00").getTime();
    const now = new Date().getTime();
    const difference = targetDate - now;

    let timeLeft = {};
    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / (1000 * 60)) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }
    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div
      className="flex flex-col items-center justify-center min-h-screen text-white p-6 relative bg-cover bg-center"
      style={{
        backgroundImage: `url('/backgrundimage.jpg')`, // Place the image in the "public" folder
      }}
    >
      {/* Dark Overlay for Readability */}
      <div className="absolute inset-0 bg-black bg-opacity-70"></div>

      {/* Header Icon */}
      <motion.div
        className="text-6xl mb-4 relative z-10 text-yellow-400"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <FaTools />
      </motion.div>

      {/* Main Heading */}
      <motion.h1
        className="text-5xl md:text-7xl font-extrabold mb-4 text-center relative z-10"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        🚧 Under Construction 🚧
      </motion.h1>

      <p className="text-xl text-gray-300 text-center mb-8 relative z-10 max-w-xl">
       I'm working hard to launch my new website! Stay tuned for updates.
      </p>

      {/* Countdown Timer */}
      <div className="flex space-x-6 text-2xl mb-8 relative z-10">
        {["Days", "Hours", "Minutes", "Seconds"].map((label, index) => (
          <div
            key={label}
            className="text-center bg-gray-800 p-4 rounded-lg shadow-lg"
          >
            <span className="block text-4xl font-bold text-yellow-400">
              {Object.values(timeLeft)[index]}
            </span>
            <span className="text-gray-300 text-sm">{label}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ComingSoon;
