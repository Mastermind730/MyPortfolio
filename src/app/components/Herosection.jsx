"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";

const Herosection = () => {
  return (
    <section id="home" className="py-16 sm:py-20 lg:py-32">
      <div className="md:flex justify-between sm:grid-cols-12">
        <motion.div
          className="flex flex-col sm:w-full"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-white mb-4 text-4xl sm:text-5xl lg:text-8xl lg:leading-normal font-extrabold">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-secondary-600">
              Hello, I&apos;m{" "}
            </span>
            <br />
            <TypeAnimation
              sequence={[
                "Sourav",
                1000,
                "Web Developer",
                1000,
                "Full Stack Developer",
                1000,
                "UI/UX Designer",
                1000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </h1>

          <p className="text-[#ADB7BE] text-base sm:text-lg mb-6 lg:text-xl">
            I am currently an intern at HSBC and serve as the President of SDW CESA ACM. With a passion for
            web development, design, and creating engaging user experiences, I strive to bring ideas to life through code.
          </p>
          <div className="buttons flex flex-col sm:flex-row">
            <Link
              href="#contact"
              className="px-6 inline-block py-3 sm:w-fit rounded-full mb-4 sm:mb-0 bg-gradient-to-br from-red-600 to-blue-800 hover:bg-slate-200 text-white"
            >
              Hire Me
            </Link>
            <Link
              href="https://drive.google.com/file/d/17vjTweSFD1q606-Qy70NNvgC0Kan8xYl/view?usp=sharing"
              className="px-1 inline-block py-1 sm:w-fit rounded-full bg-gradient-to-br mx-3 from-red-600 to-blue-800 hover:bg-slate-800 text-white"
            >
              <span className="block bg-[#121212] hover:bg-slate-800 rounded-full px-5 py-2">
                Download CV
              </span>
            </Link>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="rounded-full bg-[#181818] w-[280px] h-[250px] lg:w-[410px] lg:h-[410px] sm:w-[200px] sm:h-[200px] relative mt-8 sm:mt-0"
        >
          <Image
            src="/images/hero-image.jpg"
            alt="hero image"
            className="absolute mt-2 mb-14 transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 "
            width={260}
            height={260}
          />
        </motion.div>
      </div>
    </section>
  );
};

export default Herosection;
