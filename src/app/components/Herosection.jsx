"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";

const Herosection = () => {
  return (
    <>
    {/* <section className="lg:py-16"> */}
      {/* <div className="grid grid-cols-2 sm:grid-cols-12"> */}
      <section id="home">
    <div className="md:flex justify-between  sm:grid-cols-12 ">
    <motion.div className="flex flex-col "
    initial={{ opacity: 0, scale: 0.5 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ duration: 0.5 }}>
      <h1 className="text-white mb-4 text-4xl sm:text-5xl lg:text-8xl lg:leading-normal font-extrabold">
            <span className=" text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-secondary-600">
              Hello, I&apos;m{" "}
            </span>
            <br></br>
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
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
            voluptatum.
          </p>
          <div className="buttons">
          <Link
              href="/contact"
              className="px-6 inline-block py-3 w-full sm:w-fit rounded-full mr-4 bg-gradient-to-br from-red-600 to-blue-800 hover:bg-slate-200 text-white"
            >
              Hire Me
            </Link>
            <Link
              href="/"
              className="px-1 inline-block py-1 w-full sm:w-fit rounded-full bg-gradient-to-br from-red-600 to-blue-800 hover:bg-slate-800 text-white mt-3"
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
          transition={{ duration: 0.5 }} className="rounded-full bg-[#181818] w-[250px] h-[250px] lg:w-[400px] lg:h-[400px] sm:w-[180px] sm:h-[180px] relative float right-0 sm:m-12">
    <Image
              src="/images/hero-image.jpg"
              alt="hero image"
              className="absolute mt-2 mb-14  transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 "
              width={260}
              height={260}
            />
    </motion.div>
   
    </div>
    </section>
    </>

    
  );
};

export default Herosection;
