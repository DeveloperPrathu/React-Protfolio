import React from "react";
// icon
import { BsArrowUpRight } from "react-icons/bs";
// motion
import { motion } from "framer-motion";
// variants
import { fadeIn } from "../variants";

// services data
const services = [
  {
    name: "UI/UX Design",
    description:
      "A decade in design has allowed our team to perfect the process of delivering UI and UX services. We follow established design standards, workflows, and guidelines — you get the product you need, delivered by expert designers within the set timeframe.",
    link: 'Learn more',
  },
  {
    name: " Web Development",
    description:
      "I offer great services in creating responsive designs which are friendly to all types of devices also I create and implement APIs with databases and help you to deploy your website through various services.",
    link: 'Learn more',
  },
  {
    name: " Android Development",
    description:
      "Offers a great services in building android apps that can authenticate user, stores data and also smooth experience for best user interaction.",
    link: 'Learn more',
  },
  {
    name: " Hybrid Application Development",
    description:
      "I offer a best experience for hybrid application which runs on both Android and IOS os.",
    link: 'Learn more',
  },
];

const Services = () => {
  return (
    <section className="section" id="services">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row">
          {/* text & Image */}
          <motion.div 
            variants={fadeIn('left', 0.5)}
            initial='hidden'
            whileInView={'show'}
            viewport={{ once: false, amount: 0.3 }}
            className="flex-1 mb-12 bg-no-repeat lg:bg-services lg:bg-bottom mix-blend-lighten lg:mb-0"
          >
            <h2 className="mb-6 h2 text-accent">What I Do.</h2>
            <h3 className="h3 max-w-[455px] mb-16">
              I'm a Freelance Front-end Developer with over 5 years of experience.
            </h3>
            <a href="#work"><button className="btn btn-sm">See My Work</button></a>
          </motion.div>
          {/* services */}
          <div className="flex-1">
            {/* services list */}
            <div>
              {services.map((serivce, index)=> {
                // destructure service
                const { name, description, link } = serivce;
                return (
                  <div className="border-b border-white/20 h-[146px] mb-[38px] flex" key={index}>
                    <div className="max-w-[476px]">
                      <h4 className="text-[20px] tracking-wider font-primary font-semibold mb-6">{name}</h4>
                      <p className="leading-tight font-secondary">
                        {description}
                      </p>
                    </div>
                    <div className="flex flex-col items-end flex-1">
                      <a href="#" className="btn w-9 h-9 mb-[42px] flex justify-center items-center">
                        <BsArrowUpRight />
                      </a>
                      <a href="#" className="text-sm text-gradient">{link}</a>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
