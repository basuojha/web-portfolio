import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, CircleCheck } from 'lucide-react';
import { useForm, ValidationError } from '@formspree/react';
import gitHubIcon from 'assets/icons/github.svg';
import linkedInIcon from 'assets/icons/linkedIn.svg';

const Contact: React.FC = () => {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [formState, handleSubmit] = useForm('mqaedqwn');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="
        w-full px-4 sm:px-6 md:px-10 lg:px-16 xl:px-0
        mt-2 sm:mt-4 md:mt-6 lg:mt-8 xl:mt-6
        max-w-2xl md:max-w-3xl lg:max-w-4xl xl:w-1/2
      "
    >
      <div className="bg-gray-900 p-6 sm:p-8 md:p-10 lg:p-12 xl:p-6 rounded-2xl">
        <h2 className="text-xl sm:text-xl md:text-2xl lg:text-3xl xl:text-3xl mb-6 text-center">
          <span>{`Get in touch!`}</span>
        </h2>
        <div>
          <div className="flex flex-col space-y-4 mb-6">
            <a
              className="flex items-center space-x-3 text-sm md:text-base lg:text-lg"
              href="mailto:basuojha25@gmail.com"
            >
              <Mail className="text-blue-400 w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7" />
              <span>basuojha25@gmail.com</span>
            </a>
            <a
              className="flex items-center space-x-3 text-sm md:text-base lg:text-lg"
              href="tel:+447349717211"
            >
              <Phone className="text-blue-400 w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7" />
              <span>+44 7349717211</span>
            </a>
            <a
              className="flex items-center space-x-3 text-sm md:text-base lg:text-lg hover:cursor-pointer"
              href="https://www.linkedin.com/in/basu-ojha"
            >
              <img
                src={linkedInIcon}
                alt="LinkedIn"
                className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7"
              />
              <span>LinkedIn</span>
            </a>
            <a
              className="flex items-center space-x-3 text-sm md:text-base lg:text-lg hover:cursor-pointer"
              href="https://github.com/basuojha"
            >
              <img src={gitHubIcon} alt="GitHub" className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7" />
              <span>GitHub</span>
            </a>
          </div>
          {!formState.succeeded ? (
            <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={form.name}
                onChange={handleChange}
                className="
                 p-3 rounded-lg 
                  bg-gray-700 border border-gray-600 
                  focus:border-blue-400 focus:outline-none
                  text-sm sm:text-base md:text-lg lg:text-lg
                "
                required
              />
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                value={form.email}
                onChange={handleChange}
                className="
                  p-3 rounded-lg 
                  bg-gray-700 border border-gray-600 
                  focus:border-blue-400 focus:outline-none
                  text-sm sm:text-base md:text-lg lg:text-lg
                "
                required
              />
              <ValidationError prefix="Email" field="email" errors={formState.errors} />
              <textarea
                name="message"
                placeholder="Your Message"
                value={form.message}
                onChange={handleChange}
                className="
                  p-3 rounded-lg 
                  bg-gray-700 border border-gray-600 
                  focus:border-blue-400 focus:outline-none
                  h-16 sm:h-20
                  text-sm sm:text-base md:text-lg lg:text-lg
                "
                required
              ></textarea>
              <ValidationError prefix="Message" field="message" errors={formState.errors} />
              <button
                type="submit"
                disabled={formState.submitting}
                className="
                  w-full bg-blue-500 hover:bg-blue-600 
                  text-white py-3
                  rounded-lg text-lg sm:text-xl md:text-2xl lg:text-2xl font-semibold
                "
              >
                Send Message
              </button>
            </form>
          ) : (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center text-green-400 mt-4 flex justify-center items-center gap-2 text-sm sm:text-base md:text-lg lg:text-lg"
            >
              <CircleCheck className="text-green-400 w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7" />
              <span>Your message has been sent!</span>
            </motion.div>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default Contact;
