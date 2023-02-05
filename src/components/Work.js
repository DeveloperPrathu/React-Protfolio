import React from "react";
// motion
import { motion } from "framer-motion";
// variants
import { fadeIn } from "../variants";
// img
import Img1 from "../assets/athlete.png";
import Img2 from "../assets/flipkart.PNG";
import Img3 from "../assets/schoolmanagement.png";

const Work = () => {
  return (
    <section className="mb-5 section" id="work">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row gap-x-10">
          <motion.div 
            variants={fadeIn('right', 0.3)}
            initial='hidden'
            viewport={{ once: false, amount: 0.3 }}
            whileInView={'show'}
            className="flex flex-col flex-1 mb-10 mr-6 gap-y-12 lg:mb-0"
          >
            {/* text */}
            <div className="mb-8">
              <h2 className="leading-tight h2 text-accent">
                My Latest <br />
                Work.
              </h2>
              <p className="max-w-sm mb-16">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Expedita eum excepturi natus impedit ab porro.
              </p>
              <button className="btn btn-sm">View all projects</button>
            </div>


            {/* image */}
            <div className="relative overflow-hidden border-2 group border-white/50 rounded-xl">
              {/* overlay */}
              <div className="absolute z-40 w-full h-full transition-all duration-300 group-hover:bg-black/70"></div>
              {/* img */}
              <img 
                className="duration-500 group-hover:scale-125 translate-all"
                src={Img1} 
                alt="" 
              />
              {/* pretitle */}
              <div className="absolute z-50 transition-all duration-500 -bottom-full left-12 group-hover:bottom-24">
                <span className="text-gradient">React.js</span>
              </div>
              {/* title */}
              <div className="absolute z-50 transition-all duration-700 -bottom-full left-12 group-hover:bottom-14">
                <span className="text-3xl text-white">Athlete Club</span>
              </div>
            </div>

            
          </motion.div>

          <motion.div 
            variants={fadeIn('left', 0.2)}
            initial='hidden'
            viewport={{ once: false, amount: 0.3 }}
            whileInView={'show'}
            className="flex flex-col flex-1"
          >
            {/* image */}
            <div className="relative overflow-hidden border-2 group border-white/50 rounded-xl">
              {/* overlay */}
              <div className="absolute z-40 w-full h-full transition-all duration-300 group-hover:bg-black/70"></div>
              {/* img */}
              <img 
                className="duration-500 group-hover:scale-125 translate-all"
                src={Img2} 
                alt="" 
              />
              {/* pretitle */}
              <div className="absolute z-50 transition-all duration-500 -bottom-full left-12 group-hover:bottom-24">
                <span className="text-gradient">MERN stack</span>
              </div>
              {/* title */}
              <div className="absolute z-50 transition-all duration-700 -bottom-full left-12 group-hover:bottom-14">
                <span className="text-3xl text-white">Flipkart Clone</span>
              </div>
            </div>
            <br />
            {/* image */}
            <div className="relative overflow-hidden border-2 group border-white/50 rounded-xl">
              {/* overlay */}
              <div className="absolute z-40 w-full h-full transition-all duration-300 group-hover:bg-black/70"></div>
              {/* img */}
              <img 
                className="duration-500 group-hover:scale-125 translate-all"
                src={Img3} 
                alt="" 
              />
              {/* pretitle */}
              <div className="absolute z-50 transition-all duration-500 -bottom-full left-12 group-hover:bottom-24">
                <span className="text-gradient">Spring Boot</span>
              </div>
              {/* title */}
              <div className="absolute z-50 transition-all duration-700 -bottom-full left-12 group-hover:bottom-14">
                <span className="text-3xl text-white">School Management System</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Work;
