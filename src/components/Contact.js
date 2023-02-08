import React from "react";

const Contact = () => {
  return (
    <section id="contact">
      <div className="antialiased">
        <div className="flex items-center justify-center w-full min-h-screen min-width">
          <div className="flex flex-col w-full max-w-4xl p-8 space-y-6 overflow-hidden text-white shadow-lg md:flex-row md:space-x-6 md:space-y-0 bg-violet-900 rounded-xl sm:p-12">
            <div className="flex flex-col justify-between space-y-8">
              <div>
                <h1 className="text-4xl font-bold tracking-wide">Contact</h1>
                <p className="pt-2 text-sm text-cyan-100">
                  Contact me through the various socials link or leave a message to contact me for more.{" "}
                </p>
              </div>
              <div className="flex flex-col space-y-6">
                <div className="inline-flex items-center space-x-2">
                  <ion-icon
                    name="call"
                    className="text-xl text-teal-300"
                  ></ion-icon>
                  <span>
                    <a href="tel:+918840740592">+918840740592</a>
                  </span>
                </div>
                <div className="inline-flex items-center space-x-2">
                  <ion-icon
                    name="mail"
                    className="text-xl text-teal-300"
                  ></ion-icon>
                  <span>
                    <a href="https://mailto:developer.prathugupta@gmail.com">
                      developer.prathugupta@gmail.com
                    </a>
                  </span>
                </div>
                <div className="inline-flex items-center space-x-2">
                  <ion-icon
                    name="location"
                    className="text-xl text-teal-300"
                  ></ion-icon>
                  <span>
                    Azad Nagar Behind Gandhi School, Sultnapur UP 228001
                  </span>
                </div>
              </div>
              <div className="flex space-x-4 text-lg">
                <a href="https://m.facebook.com/100073820179575/">
                  <ion-icon name="logo-facebook"></ion-icon>
                </a>
                <a href="https://twitter.com/DeveloperPrathu">
                  <ion-icon name="logo-twitter"></ion-icon>
                </a>
                <a href="https://www.instagram.com/developer_prathu/">
                  <ion-icon name="logo-instagram"></ion-icon>
                </a>
                <a href="https://www.linkedin.com/in/prathu-gupta-69462922b/">
                  <ion-icon name="logo-linkedin"></ion-icon>
                </a>
              </div>
            </div>
            <div className="relative">
              <div className="absolute z-0 w-40 h-40 bg-teal-400 rounded-full -right-28 -top-28"></div>
              <div className="absolute z-0 w-40 h-40 bg-teal-400 rounded-full -left-28 -bottom-16"></div>
              <div className="relative z-10 p-8 text-gray-600 bg-white shadow-lg rounded-xl">
                <form action="https://formspree.io/f/mdovaqgd" method="POST" className="flex flex-col space-y-4">
                  <div>
                    <label htmlFor="text-sm">Your Name</label>
                    <input
                      name="name"
                      type="text"
                      placeholder="Your Name"
                      className="w-full px-4 py-2 mt-2 rounded-md outline-none ring-1 ring-gray-300 focus:ring-2 focus:ring-teal-300"
                    />
                  </div>
                  <div>
                    <label htmlFor="text-sm">Email Address</label>
                    <input
                      name="email"
                      type="email"
                      placeholder="Email Address"
                      className="w-full px-4 py-2 mt-2 rounded-md outline-none ring-1 ring-gray-300 focus:ring-2 focus:ring-teal-300"
                    />
                  </div>
                  <div>
                    <label htmlFor="text-sm">Message</label>
                    <textarea
                      name="message"
                      placeholder="Your Message"
                      rows="4"
                      className="w-full px-4 py-2 mt-2 rounded-md outline-none ring-1 ring-gray-300 focus:ring-2 focus:ring-teal-300"
                    ></textarea>
                  </div>
                  <button className="self-end inline-block px-6 py-2 text-sm font-bold text-white uppercase rounded-lg bg-cyan-700">
                    Send Message
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
