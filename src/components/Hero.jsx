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
        <div className="flex flex-col justify-center items-center mt-5">
          <span className="w-5 h-5 rounded-full bg-[#915eff]" />
          <span className="w-1 sm:h-80 h-40 mb-1 violet-gradient" />
        </div>

        <div className="">
          <h1 className={`${styles.heroHeadText} text-neutral-100`}>
            Hi, I'm <span className="text-[#915eff]">Simón</span>
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-neutral-200`}>
            I develop stunning and energetically-charged <br className="sm:block hidden"/> websites using React.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
