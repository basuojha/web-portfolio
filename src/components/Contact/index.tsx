import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, CircleCheck } from 'lucide-react';
import { useForm, ValidationError } from '@formspree/react';

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
      className="w-full px-4 sm:pt-[96px] sm:w-1/2"
    >
      <div className="bg-gray-900 p-6 rounded-2xl mt-6">
        <h2 className="text-2xl md:text-4xl mb-6 text-center">
          <span>{`Let's Connect and Build Something Great!`}</span>
        </h2>
        <div>
          <div className="flex flex-col space-y-4 mb-6">
            <a className="flex items-center space-x-3" href="mailto:basuojha25@gmail.com">
              <Mail className="text-blue-400" />
              <span>basuojha25@gmail.com</span>
            </a>
            <a className="flex items-center space-x-3" href="tel:+447349717211">
              <Phone className="text-blue-400" />
              <span>+44 7349717211</span>
            </a>
            <div className="flex items-center space-x-3">
              <MapPin className="text-blue-400" />
              <span>London, UK</span>
            </div>
          </div>
          {!formState.succeeded ? (
            <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={form.name}
                onChange={handleChange}
                className="p-3 rounded-lg bg-gray-700 border border-gray-600 focus:border-blue-400 focus:outline-none"
                required
              />
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                value={form.email}
                onChange={handleChange}
                className="p-3 rounded-lg bg-gray-700 border border-gray-600 focus:border-blue-400 focus:outline-none"
                required
              />
              <ValidationError prefix="Email" field="email" errors={formState.errors} />
              <textarea
                name="message"
                placeholder="Your Message"
                value={form.message}
                onChange={handleChange}
                className="p-3 rounded-lg bg-gray-700 border border-gray-600 focus:border-blue-400 focus:outline-none h-24"
                required
              ></textarea>
              <ValidationError prefix="Message" field="message" errors={formState.errors} />
              <button
                type="submit"
                disabled={formState.submitting}
                className="w-full bg-blue-500 hover:bg-blue-600 text-white py-3 rounded-lg text-lg font-semibold"
              >
                Send Message
              </button>
            </form>
          ) : (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center text-green-400 mt-4 flex justify-center items-center gap-2"
            >
              <CircleCheck className="text-green-400 w-5 h-5" />
              <span>Your message has been sent!</span>
            </motion.div>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default Contact;
