import React from "react";
// countup
import CountUp from "react-countup";
// intersection observer hook
import { useInView } from "react-intersection-observer";
// motion
import { motion } from "framer-motion";
// variant
import { fadeIn } from "../variants";

const About = () => {
  const [ref, inView] = useInView({
    threshold: 0.5,
  });
  return (
    <section className="section" id="about" ref={ref}>
      <div className="container mx-auto">
        <div className="flex flex-col h-screen gap-y-10 lg:flex-row lg:items-center lg:gap-x-20 lg:gap-y-0">
          {/* image */}
          <motion.div
            variants={fadeIn("right, 0.3")}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="flex-1 bg-about bg-contain bg-no-repeat h-[500px] mix-blend-lighten bg-top"
          ></motion.div>
          {/* text */}
          <motion.div
            variants={fadeIn("left, 0.5")}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="flex-1"
          >
            <h2 className="h2 text-accent">About me</h2>
            <h3 className="mb-4 h3">
              I'm a Full-Stack Developer with over 3 years of experience.
            </h3>
            <p className="mb-3">
              Hi there! I am a full-stack developer with a passion for crafting
              intuitive and beautiful web applications. I have a strong
              foundation in both front-end and back-end technologies and I love
              to bring my designs to life by writing clean and efficient code.
            </p>
            {/* stats */}
            <div className="flex mt-5 mb-10 gap-x-9 lg:gap-x-15">
              <div className="mr-4">
                <div className="text-[40px] font-tertiary text-gradient mb-2">
                  {inView ? <CountUp start={0} end={3} duration={3} /> : null}+
                </div>
                <div>
                  Years of <br />
                  Experience
                </div>
              </div>
              <div className="mr-4">
                <div className="text-[40px] font-tertiary text-gradient mb-2">
                  {inView ? <CountUp start={0} end={5} duration={3} /> : null}+
                </div>
                <div>
                  Projects <br />
                  Completed
                </div>
              </div>
              <div>
                <div className="text-[40px] font-tertiary text-gradient mb-2">
                  {inView ? <CountUp start={0} end={2} duration={3} /> : null}+
                </div>
                <div>
                  Satisfied <br />
                  Clients
                </div>
              </div>
            </div>
            <div className="flex items-center gap-x-8">
              <a href="#contact"><button className="btn btn-lg">Contact Me</button></a>
              <a href="#work" className="text-gradient btn-link">
                My Portfolio
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
