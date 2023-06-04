/* eslint-disable react/no-unescaped-entities */
import { motion } from "framer-motion";
import { styles } from "../styles";
import { ComputersCanvas } from "./canvas";
const Hero = () => {
  return (
    <section className="relative w-full h-screen mx-auto">
      <div
        className={`${styles.paddingX} absolute inset-0 top-[120px] max-w-7xl mx-auto flex flex-row items-start gap-5`}
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col justify-center items-center mt-5"
        >
          <span className="w-5 h-5 rounded-full bg-[#915eff]" />
          <span className="w-1 sm:h-80 h-40 mb-1 violet-gradient" />
        </motion.div>

        <div>
          <h1 className={`${styles.heroHeadText} text-neutral-100`}>
            Hi, I'm <span className="text-[#915eff]">Simón</span>
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-neutral-200`}>
            I develop stunning and energetically-charged{" "}
            <br className="sm:block hidden" /> websites using React.
          </p>
        </div>
      </div>
      <ComputersCanvas />
      <div className="absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center">
        <a href="#about">
          <div className="w-[35px] h-[64px] rounded-3xl border-4 border-[#915eff92] flex justify-center items-start p-2">
            <motion.dev
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                delay: 2,
                repeat: Infinity
              }}
              className="w-3 h-3 rounded-full bg-secondary mb-1"
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
