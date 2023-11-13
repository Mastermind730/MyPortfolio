import React from "react";
import Image from "next/image";
const AboutSection = () => {
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
          
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
