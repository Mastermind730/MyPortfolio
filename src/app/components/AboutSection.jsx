"use client";
import React from "react";
import Image from "next/image";
import { useState,useTransition } from "react";
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
      title: "Certifications",
      id: "certifications",
      content: (
        <ul className="list-disc pl-2">
          <li>Certificate1</li>
          <li>Certificate2</li>
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
    <section>
      <div className=" grid md:grid-cols-2 lg:grid-cols-2 sm:grid-cols-1 p-2 m-12">
        <div className="rounded full mx-4">
          <Image
            src="/images/about-image.jpg"
            alt="menu-image"
            width={500}
            height={500}
          />
        </div>

        <div className="m-4">
          <h1 className="text-center text-5xl">About Me</h1>
          <p className="p-5">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facere hic
            voluptatum dolor, ex quae quaerat dignissimos ducimus dolorum labore
            cumque deserunt repellendus, tempore eveniet sed. Praesentium
            blanditiis harum commodi atque reprehenderit. Voluptatibus error
            possimus tempore non eius, nesciunt pariatur! Itaque obcaecati et
            molestiae quibusdam dolorem nobis suscipit odio debitis. Magnam at
            mollitia dolor. Repudiandae ea laborum veniam, ad corrupti
            laudantium.
          </p>
        <div className="flex flex-row justify-start mt-8">
            <TabButton
              selectTab={() => handleTabChange("skills")}
              active={tab === "skills"}
            >
              {" "}
              Skills{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("education")}
              active={tab === "education"}
            >
              {" "}
              Education{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("certifications")}
              active={tab === "certifications"}
            >
              {" "}
              Certifications{" "}
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
