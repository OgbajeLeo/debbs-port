import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const containerVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: "easeOut",
    },
  },
};

const NotFoundPage: React.FC = () => {
  return (
    <div className="h-screen relative flex flex-col items-center justify-center bg-gradient-to-br from-[#d4d5f5] via-[#ffefc9] to-[#cdfdec] text-white px-6">
      <motion.div
        className="text-center"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="absolute -top-32 left-40 max-w-[600px] w-full h-[300px] bg-[#3ef1b2] rounded-full filter blur-[180px] opacity-30 z-0" />
        <div className="absolute top-[100px] left-[200px] max-w-[350px] w-full h-[500px] bg-[#e95250] rounded-full filter blur-[180px] opacity-20 z-0" />
        <div className="absolute top-[100px] right-[200px] max-w-[350px] w-full h-[300px] bg-[#f9f346] rounded-full filter blur-[180px] opacity-20 z-0" />

        <motion.h1
          className="text-[100px] md:text-[200px] font-extrabold tracking-tight  text-black bg-clip-text drop-shadow-2xl"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          404
        </motion.h1>
        <motion.p
          className="text-xl md:text-2xl font-light text-[#323131] mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          Sorry, that page doesn’t exist (but the vibes do).
        </motion.p>

        <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.97 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <Link
            to="/"
            className="inline-block px-6 py-3 bg-black text-white rounded-[36px] font-semibold shadow-md transition"
          >
            Back to Home
          </Link>
        </motion.div>
      </motion.div>

      <motion.div
        className=" mt-20 text-sm text-gray-600"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
      >
        Designed with ❤ by Deborah
      </motion.div>
      <motion.div
        className="mt-6 text-sm text-gray-600"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
      >
        Developed by Ogbaje Leo
      </motion.div>
    </div>
  );
};

export default NotFoundPage;
