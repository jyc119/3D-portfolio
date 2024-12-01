import React from "react";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { services } from "../constants";
import { SectionWrapper } from "../hoc";
import { pfp } from "../assets";
import { fadeIn, textVariant } from "../utils/motion";

const ServiceCard = ({ index, title, icon }) => {
  return (
    <Tilt className="xs:w-[250px] w-full">
      <motion.div
        variants={fadeIn("right", "spring", index * 0.5, 0.75)}
        className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
      >
        <div
          options={{
            max: 45,
            scale: 1,
            speed: 450,
          }}
          className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col"
        >
          <img
            src={icon}
            alt="web-development"
            className="w-16 h-16 object-contain"
          />

          <h3 className="text-white text-[20px] font-bold text-center">
            {title}
          </h3>
        </div>
      </motion.div>
    </Tilt>
  );
};

const About = () => {
  return (
    <>
      <section className="flex flex-col md:flex-row items-center justify-between px-6 md:px-16 py-12 bg-gray-100">
        {/* Text Section */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="md:w-1/2 flex flex-col text-left"
        >
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Hey! I'm Jordan Chin
          </h1>
          <p className="text-gray-700 mb-6 leading-7">
            Hi there! I’m Jordan Chin, a curious and driven MS Computer Science
            student at Rochester Institute of Technology. I absolutely love
            creating things—whether it’s interactive 3D visuals, intuitive user
            interfaces, or neural network models. I’ve worked with technologies
            like React, Node.js, and scikit-learn, and I get a kick out of
            solving challenging problems with clean, efficient code.
          </p>
          <p className="text-gray-700 mb-6 leading-7">
            What excites me most about software development is the opportunity
            to turn ideas into impactful solutions that make people’s lives
            easier (and maybe even a little more fun). I’m always eager to
            learn, grow, and collaborate with like-minded people who share my
            passion for technology and creativity.
          </p>
          <p className="text-gray-700 mb-6 leading-7">
            I’m currently looking for a full-time role as a Software Engineer or
            Full-Stack Developer. If my work resonates with you, or you just
            want to chat about tech, let’s connect!"
          </p>
        </motion.div>

        {/* Image Section */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="md:w-1/2 mt-10 md:mt-0 flex justify-center"
        >
          <img
            src={pfp}
            alt="Jordan Chin"
            className="w-80 h-auto rounded-lg shadow-lg object-cover"
          />
        </motion.div>
      </section>

      <div className="mt-20 flex justify-center flex-wrap gap-10">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");
