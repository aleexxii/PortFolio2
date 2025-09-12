import React from "react";
import GradientSpheres from "../components/GradientSpheres";
import TitleHeader from "../components/TitleHeader";
import { Mini_Knight } from "../../public/models/Mini_knight";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { bentoSocialLinks } from "../constants";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

function About() {
  useGSAP(() => {
    // animation for the card (web design, ux ui and quates)
    gsap.from("#card", {
      opacity: 0,
      y: 50,
      stagger: 0.2,
      duration: 0.8,
      ease: "power3.inOut",
      scrollTrigger: {
        trigger: "#about",
        start: "top top",
      },
    });

    // staggerd text animations

    gsap.from(".animated-text", {
      opacity: 0,
      y: 20,
      stagger: 0.15,
      duration: 0.6,
      ease: "power3.inOut",
      scrollTrigger: {
        trigger: "#about",
        start: "top top",
      },
    });
  }, []);

  return (
    <section id="about" className="flex-center relative md:p-0 px-5">
      <GradientSpheres
        sphare1Class={"about-gradient-sphere about-sphere-1"}
        sphare2Class={"about-gradient-sphere about-sphere-2"}
      />

      <div className="container w-full h-full md:my-40 my-20 relative z-10">
        <TitleHeader
          title={"About Me"}
          text={"Passionate Creator, Lifelong Learner"}
          number={'1'}
        />

        <div className="md:mt-20 mt-10">
          <div className="grid grid-cols-12 md:grid-rows-12 gap-5">
            <div className="md:col-span-7 col-span-12 row-span-5">
              <div className="bg-black-300 rounded-2xl p-7 w-full h-full">
                <div>
                  <img
                    src="images/flower.svg"
                    alt="flower"
                    className="md:w-32 w-16 flower"
                  />
                </div>
                <div className="mt-5">
                  <h1 className="text-blue-50 md:text-5xl text-3xl">RAHUL</h1>
                  <p className="md:text-2xl mt-2">
                    MERN stack developer with a strong foundation in JavaScript,
                    Node.js, Express.js, MongoDB, and React.js. Passionate about
                    developing scalable and efficient web applications, with a
                    focus on backend development, API design, and database
                    management. With hands-on experience in AWS deployment,
                    Nginx, PM2, and SSL configurations, specializes in building
                  </p>
                </div>
              </div>
            </div>
            {/* 3D Mini Knight element */}
            <div className="md:col-span-5 col-span-12 row-span-5">
              <div className="bg-[#c8d751] hover:cursor-grab rounded-2xl w-full md:h-full h-60">
                <div className="w-full h-full">
                  <Canvas>
                    <OrbitControls enableZoom={false} />
                    <Mini_Knight
                      scale={2}
                      position={[0, -3.5, 0]}
                      rotation={[0, -0.5, 0]}
                    />
                  </Canvas>
                </div>
              </div>
            </div>
            {/* Web design card */}
            <div id="card" className="md:col-span-6 col-span-12 row-span-3">
              <div className="bg-black-300 rounded-2xl p-7 w-full h-full">
                <div className="flex flex-col h-full justify-center gap-2">
                  <h1 className="gradient-title md:text-3xl text-2xl font-medium">
                    Web Design & Dev
                  </h1>
                  <p className="md:text-2xl max-w-96">
                    Clearly designed, Conversion-focused and build for easy
                    updates
                  </p>
                </div>
              </div>
            </div>
            {/* UI/UX design card */}
            <div id="card" className="md:col-span-6 col-span-12 row-span-3">
              <div className="bg-black-300 rounded-2xl p-7 w-full h-full">
                <div className="flex flex-col h-full justify-center gap-2">
                  <h1 className="gradient-title md:text-3xl text-2xl font-medium">
                    UX UI Design
                  </h1>
                  <p className="md:text-2xl max-w-96">
                    Seamless web or mobile app design to wow your users
                  </p>
                </div>
              </div>
            </div>
            {/* moti card */}
            <div id="card" className="md:col-span-4 col-span-12 row-span-4">
              <div className="bg-black-300 rounded-2xl p-7 w-full h-full">
                <div className="flex flex-col justify-between h-full">
                  {["BE YOURSELF", "BE DIFFERENT", "BUILD DIFFERENT"].map(
                    (key, index) => (
                      <h1
                        className="gradient-title md:text-5xl text-3xl font-bold"
                        key={index}
                      >
                        {key}
                      </h1>
                    )
                  )}
                </div>
              </div>
            </div>
            {/* bento social links */}
            {bentoSocialLinks.map((item, index) => (
              <div key={index} className="md:col-span-4 col-span-12 row-span-2">
                <div className="bg-black-300 rounded-2xl p-7 w-full h-full group cursor-pointer:">
                  <div className="flex justify-between items-center h-full">
                    <div className="flex items-center md:gap-5">
                      <img src={item.icon} alt={item.name} />
                      <h1 className="gradient-title md:text-3xl text-xl md:m-0 ms-5 font-medium">
                        {item.name}
                      </h1>
                    </div>
                    <div className="lg:block md:hidden group-hover:translate-x-2 group-hover:-translate-y-2 transition-transform">
                      <img
                        src="images/arrowupright.svg"
                        alt="arrow-up-right"
                        className="lg:scale-100 scale-50"
                      />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
