"use client";

import { useState } from "react";
import { motion } from "framer-motion";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log("Form submitted:", formData);
  };

  return (
    <section
      className="w-full bg-surface-dark py-20 lg:py-28 relative border-t border-gray-800"
      id="contact"
    >
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.3 }}
            className="w-full lg:w-3/5"
          >
            <div className="flex items-center gap-3 mb-6">
              <span className="h-0.5 w-12 bg-primary"></span>
              <span className="text-primary font-bold tracking-wider uppercase text-sm">
                Get In Touch
              </span>
            </div>
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 font-display leading-tight">
              Let's work <br />
              <span className="text-gray-600">together.</span>
            </h2>
            <p className="text-gray-400 text-lg leading-relaxed mb-10 max-w-2xl">
              Have a project in mind or just want to say hello? I'm always open
              to discussing new projects, creative ideas or opportunities to be
              part of your visions.
            </p>
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="relative">
                  <input
                    className="peer w-full bg-background-dark border border-gray-800 rounded px-4 py-3 text-white placeholder-transparent focus:outline-none focus:border-primary transition-colors"
                    id="name"
                    placeholder="Name"
                    required
                    type="text"
                    value={formData.name}
                    onChange={handleChange}
                  />
                  <label
                    className="absolute left-4 -top-2.5 bg-background-dark px-1 text-sm text-gray-500 transition-all peer-placeholder-shown:top-3.5 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-focus:-top-2.5 peer-focus:text-sm peer-focus:text-primary"
                    htmlFor="name"
                  >
                    Name
                  </label>
                </div>
                <div className="relative">
                  <input
                    className="peer w-full bg-background-dark border border-gray-800 rounded px-4 py-3 text-white placeholder-transparent focus:outline-none focus:border-primary transition-colors"
                    id="email"
                    placeholder="Email"
                    required
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                  />
                  <label
                    className="absolute left-4 -top-2.5 bg-background-dark px-1 text-sm text-gray-500 transition-all peer-placeholder-shown:top-3.5 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-focus:-top-2.5 peer-focus:text-sm peer-focus:text-primary"
                    htmlFor="email"
                  >
                    Email
                  </label>
                </div>
              </div>
              <div className="relative">
                <input
                  className="peer w-full bg-background-dark border border-gray-800 rounded px-4 py-3 text-white placeholder-transparent focus:outline-none focus:border-primary transition-colors"
                  id="subject"
                  placeholder="Subject"
                  required
                  type="text"
                  value={formData.subject}
                  onChange={handleChange}
                />
                <label
                  className="absolute left-4 -top-2.5 bg-background-dark px-1 text-sm text-gray-500 transition-all peer-placeholder-shown:top-3.5 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-focus:-top-2.5 peer-focus:text-sm peer-focus:text-primary"
                  htmlFor="subject"
                >
                  Subject
                </label>
              </div>
              <div className="relative">
                <textarea
                  className="peer w-full bg-background-dark border border-gray-800 rounded px-4 py-3 text-white placeholder-transparent focus:outline-none focus:border-primary transition-colors resize-none"
                  id="message"
                  placeholder="Message"
                  required
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                ></textarea>
                <label
                  className="absolute left-4 -top-2.5 bg-background-dark px-1 text-sm text-gray-500 transition-all peer-placeholder-shown:top-3.5 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-focus:-top-2.5 peer-focus:text-sm peer-focus:text-primary"
                  htmlFor="message"
                >
                  Message
                </label>
              </div>
              <button
                className="inline-flex items-center justify-center px-8 py-4 bg-primary text-white font-bold transition-all duration-300 rounded shadow-[0_0_15px_rgba(255,87,51,0.3)] hover:shadow-[0_0_25px_rgba(255,87,51,0.6)] hover:scale-105 uppercase tracking-wider text-sm"
                type="submit"
              >
                Send Message <i className="fas fa-paper-plane ml-2"></i>
              </button>
            </form>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.3 }}
            className="w-full lg:w-2/5 flex flex-col justify-center"
          >
            <div className="bg-background-dark border border-gray-800 p-8 md:p-10 rounded-2xl relative overflow-hidden group hover:border-primary/30 transition-colors duration-300">
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-bl-full -mr-8 -mt-8 transition-all group-hover:bg-primary/10"></div>
              <div className="absolute bottom-0 left-0 w-24 h-24 bg-primary/5 rounded-tr-full -ml-8 -mb-8 transition-all group-hover:bg-primary/10"></div>
              <h3 className="text-2xl font-bold text-white mb-8 relative z-10">
                Contact Information
              </h3>
              <div className="space-y-8 relative z-10">
                <div className="flex items-start gap-5 group/item">
                  <div className="w-12 h-12 rounded-lg bg-surface-dark border border-gray-700 flex items-center justify-center text-primary shadow-lg group-hover/item:border-primary transition-colors">
                    <i className="fas fa-envelope text-xl"></i>
                  </div>
                  <div>
                    <h4 className="text-gray-500 text-sm font-bold uppercase tracking-wider mb-1">
                      Email Address
                    </h4>
                    <a
                      className="text-white text-lg font-medium hover:text-primary transition-colors break-all"
                      href="mailto:moinul.hasan45777@gmail.com"
                    >
                      moinul.hasan45777@gmail.com
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-5 group/item">
                  <div className="w-12 h-12 rounded-lg bg-surface-dark border border-gray-700 flex items-center justify-center text-primary shadow-lg group-hover/item:border-primary transition-colors">
                    <i className="fas fa-phone-alt text-xl"></i>
                  </div>
                  <div>
                    <h4 className="text-gray-500 text-sm font-bold uppercase tracking-wider mb-1">
                      Phone Number
                    </h4>
                    <a
                      className="text-white text-lg font-medium hover:text-primary transition-colors"
                      href="tel:+8801629414264"
                    >
                      +880 1629-414264
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-5 group/item">
                  <div className="w-12 h-12 rounded-lg bg-surface-dark border border-gray-700 flex items-center justify-center text-primary shadow-lg group-hover/item:border-primary transition-colors">
                    <i className="fas fa-map-marker-alt text-xl"></i>
                  </div>
                  <div>
                    <h4 className="text-gray-500 text-sm font-bold uppercase tracking-wider mb-1">
                      Location
                    </h4>
                    <p className="text-white text-lg font-medium">
                      Dhaka, Bangladesh
                    </p>
                  </div>
                </div>
              </div>
              <div className="mt-10 pt-8 border-t border-gray-800 flex gap-4 justify-center relative z-10">
                <a
                  className="w-10 h-10 rounded-full bg-surface-dark border border-gray-700 flex items-center justify-center text-gray-400 hover:text-white hover:border-primary hover:bg-primary transition-all duration-300"
                  href="https://www.facebook.com/moinulhasan45777/"
                >
                  <i className="fab fa-facebook-f"></i>
                </a>
                <a
                  className="w-10 h-10 rounded-full bg-surface-dark border border-gray-700 flex items-center justify-center text-gray-400 hover:text-white hover:border-primary hover:bg-primary transition-all duration-300"
                  href="#"
                >
                  <i className="fab fa-twitter"></i>
                </a>
                <a
                  className="w-10 h-10 rounded-full bg-surface-dark border border-gray-700 flex items-center justify-center text-gray-400 hover:text-white hover:border-primary hover:bg-primary transition-all duration-300"
                  href="https://www.linkedin.com/in/moinulhasan45777/"
                >
                  <i className="fab fa-linkedin-in"></i>
                </a>
                <a
                  className="w-10 h-10 rounded-full bg-surface-dark border border-gray-700 flex items-center justify-center text-gray-400 hover:text-white hover:border-primary hover:bg-primary transition-all duration-300"
                  href="https://github.com/moinulhasan45777"
                >
                  <i className="fab fa-github"></i>
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
