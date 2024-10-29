"use client";
import React, { useState, useTransition } from "react";
import Image from "next/image";
import TabButton from "./TabButton";

const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <ul className="list-disc pl-2">
        <li>Node.js</li>
        <li>Express</li>
        <li>Java</li>
        <li>Python</li>
        <li>JavaScript</li>
        <li>React</li>
      </ul>
    ),
  },
  {
    title: "Education",
    id: "education",
    content: (
      <ul className="list-disc pl-2">
        <li>Pimpri Chinchwad College of Engineering Pune</li>
        <li>Kendriya Vidyala Army Area Pune</li>
      </ul>
    ),
  },
  {
    title: "Experience",
    id: "experiences",
    content: (
      <ul className="list-disc pl-2">
        <li>
    <strong>Software Engineer Intern</strong> at HSBC
    <br />
    Aug 2024 - Present · 3 mos
    <br />
    <span className="text-gray-500">Pune, Maharashtra, India</span>
  </li>
       <li>
    <strong>President</strong> at PCCOE ACM Student Chapter
    <br />
    Aug 2024 - Present · 3 mos
    <br />
    <span className="text-gray-500">Full-time</span>
  </li>
       <li>
    <strong>Open Source Developer</strong> at GirlScript Summer of Code
    <br />
    May 2024 - Jul 2024 · 3 mos
    <br />
    <span className="text-gray-500">Full-time</span>
  </li>
  <li>
    <strong>Junior Webmaster</strong> at PCCOE ACM Student Chapter
    <br />
    Oct 2023 - Aug 2024 · 11 mos
    <br />
    <span className="text-gray-500">Hybrid, Maharashtra, India</span>
    <br />
    Skills: Node.js, HTML, Next.js, JavaScript, React.js
  </li>
  
  <li>
    <strong>Campus Ambassador</strong> at Techfest, IIT Bombay
    <br />
    Jun 2023 - Present · 1 yr 5 mos
    <br />
    <span className="text-gray-500"></span>
    </li>
      </ul>
    ),
  },
];

const AboutSection = () => {
  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <section id="about" className="mx-4 md:mx-10 lg:mx-16">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 mt-12 mb-5">
        <div className="rounded-full">
          <Image
            src="/images/about-image.jpg"
            alt="menu-image"
            width={350}
            height={350}
          />
        </div>

        <div>
          <h1 className="text-center text-4xl md:text-5xl lg:text-6xl">About Me</h1>
          <p className="p-5">
            {/* Your Lorem Ipsum text */}
          </p>
          <div className="flex flex-col md:flex-row justify-start mt-8">
            <TabButton
              selectTab={() => handleTabChange("skills")}
              active={tab === "skills"}
            >
              Skills
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("education")}
              active={tab === "education"}
            >
              Education
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("experiences")}
              active={tab === "experiences"}
            >
              Experiences
            </TabButton>
          </div>
          <div className="mt-8">
            {TAB_DATA.find((t) => t.id === tab).content}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
