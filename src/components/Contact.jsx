import React, { useState, useEffect, useRef } from 'react';
import lottie from 'lottie-web';
import animationData from '../assets/person.json'; // Correctly import the JSON file

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const animationContainer = useRef(null);

  useEffect(() => {
    lottie.loadAnimation({
      container: animationContainer.current,
      renderer: 'svg',
      loop: true,
      autoplay: true,
      animationData: animationData, // Use the imported animation data
    });

    // Cleanup the animation when the component unmounts
    return () => {
      lottie.destroy();
    };
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = document.getElementById('contact-form');
    form.submit();
  };

  return (
    <section className="py-12">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center">
        {/* Form Container */}
        <div className="w-full max-w-md mb-8 md:mb-0 md:mr-8 flex-shrink-0">
          <h2 className="text-3xl font-bold text-white mb-8">Contact Us</h2>
          <form
            id="contact-form"
            action="https://formcarry.com/s/agcbYL7GE" //
            method="POST"
            onSubmit={handleSubmit}
            className="space-y-6"
          >
            <div>
              <label htmlFor="name" className="block text-white text-lg font-semibold mb-2">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 rounded-lg bg-white/20 text-white focus:outline-none"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-white text-lg font-semibold mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 rounded-lg bg-white/20 text-white focus:outline-none"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-white text-lg font-semibold mb-2">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                className="w-full h-32 px-4 py-2 rounded-lg bg-white/20 text-white focus:outline-none"
              ></textarea>
            </div>
            <div className="text-left">
              <button
                type="submit"
                className="px-6 py-3 bg-amber-500 text-white font-bold rounded-lg hover:bg-amber-600 transition"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>

        {/* Animation Container */}
        <div className="hidden md:flex md:w-[400px] md:h-[400px] flex-shrink-0">
          <div ref={animationContainer} className="w-full h-full"></div>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
