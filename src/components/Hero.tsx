import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";
import HeroIcons from "./HeroIcons";
//bg-gradient-to-br from-[#d4d5f5] via-[#ffefc9] to-[#cdfdec]
export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-6 overflow-hidden bg-[#FFFDF1] text-black">
      {/* Blurry background shape */}
      <div className="absolute -top-32 left-40 max-w-[600px] w-full h-[400px] bg-[#3ef1b2] rounded-full filter blur-[180px] opacity-30 z-0" />
      <div className="absolute top-[100px] left-[200px] max-w-[350px] w-full h-[600px] bg-[#e95250] rounded-full filter blur-[180px] opacity-20 z-0" />
      <div className="absolute top-[100px] right-[200px] max-w-[350px] w-full h-[600px] bg-[#f9f346] rounded-full filter blur-[180px] opacity-20 z-0" />

      <HeroIcons />
      <div className="relative z-10 max-w-6xl w-full mx-auto  items-center">
        {/* Text content */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="space-y-6"
        >
          <Tilt
            glareEnable={true}
            glareMaxOpacity={0.2}
            tiltMaxAngleX={15}
            tiltMaxAngleY={15}
            className="w-full"
          >
            <div className="container mx-auto px-4 md:px-8 pt-20 md:pt-[100px] pb-20 flex flex-col items-center justify-center min-h-screen">
              <div className="text-center max-w-3xl mx-auto">
                <div className="text-[40px] md:text-[96px] font-[400] sm:mb-4 mb-10 leading-[48px] sm:leading-[108px] max-w-[637px] text-[#252525]">
                  Hi, <br /> I am Debbie <br /> And <br /> Welcome to my Space!
                </div>

                <p className="text-[14px] sm:text-[24px] text-gray-700 sm:mb-10 mb-12 w-[258px] sm:w-[500px] mx-auto">
                  I Create Designs That Don't Just Look Good, They Work!
                </p>

                <a
                  href="#work"
                  className="bg-black text-white px-12 py-6 rounded-[36px] text-[24px] font-medium hover:bg-gray-800 transition-all"
                >
                  View My Work
                </a>
              </div>
              <div className="mt-12 text-gray-500 text-center md:hidden block">
                3+ Years, 15+ Projects, 100% Passion.
              </div>
            </div>
          </Tilt>

          {/* <Button label="See My Work" onClick={() => {}} /> */}
        </motion.div>
      </div>
      {/* Tilted image */}
      {/* <Tilt
          glareEnable={true}
          glareMaxOpacity={0.2}
          tiltMaxAngleX={15}
          tiltMaxAngleY={15}
          className="w-full max-w-sm mx-auto"
        >
          <motion.img
            src={heroImage}
            alt="Deborah"
            className="rounded-3xl"
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.6 }}
          />
        </Tilt> */}
    </section>
  );
}
