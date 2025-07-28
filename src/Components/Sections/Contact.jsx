import { useState } from "react";
import { RevealOnScroll } from "../RevealOnScroll";
import emailjs from "emailjs-com";

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        import.meta.env,
        VITE_SERVICE_ID,
        import.meta.env,
        VITE_TEMPLATE_ID,
        e.target,
        import.meta.env,
        VITE_PUBLIC_KEY
      )
      .then((result) => {
        alert("Message Sent!");
        setFormData({ name: "", email: "", message: "" });
      })
      .catch(() => alert("Ooops Something went wrong. Please try again."));
  };

  return (
  <><section id="contact" className="min-h-screen flex items-center justify-center py-20 px-4 bg-gradient-to-br from-gray-900 via-gray-950 to-black
">
          <RevealOnScroll>
              <div className="w-full sm:w-[90%] md:w-[80%] lg:w-[70%] xl:w-[60%] mx-auto">
                  <h2 className="text-3xl font-bold mb-8 text-center text-transparent bg-gradient-to-r from-blue-500 to-purple-400 bg-clip-text">
                      Get In Touch
                  </h2>

                  <form className="space-y-5" onSubmit={handleSubmit}>
                      <input
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          placeholder="Name..."
                          className="w-full bg-white/10 border border-white/10 rounded px-4 py-3 text-white focus:outline-none focus:border-blue-500"
                          required />

                      <input
                          type="email"
                          name="reply_to"
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          placeholder="example@gmail.com"
                          className="w-full bg-white/10 border border-white/10 rounded px-4 py-3 text-white focus:outline-none focus:border-blue-500"
                          required />

                      <textarea
                          name="message"
                          rows={5}
                          value={formData.message}
                          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                          placeholder="Your Message..."
                          className="w-full bg-white/10 border border-white/10 rounded px-4 py-3 text-white focus:outline-none focus:border-blue-500"
                          required />

                      <button
                          type="submit"
                          className="w-full bg-blue-500 text-white py-3 px-6 rounded font-medium hover:shadow-lg transition"
                      >
                          Send Message
                      </button>
                  </form>
              </div>
          </RevealOnScroll>
      </section><footer className="bg-gray-950 text-white">
              <div className="w-full px-4 py-6 text-center text-sm text-gray-400">
                  © 2025 Asghar Ali. All rights reserved.
              </div>
          </footer></>

  );
};
