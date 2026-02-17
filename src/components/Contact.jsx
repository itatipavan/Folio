import React, { useState } from "react";
import { Mail, Phone, MapPin, Send, Sparkles } from "lucide-react";
import emailjs from "@emailjs/browser";
import { message } from "antd";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [focused, setFocused] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .send(
        "service_5rl530t",
        "template_ix0u2ot",
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
        },
        "sQDmlVlBG6AsbKQOD",
      )
      .then((response) => {
        console.log("Email sent successfully:", response);
        setFormData({ name: "", email: "", message: "" });
        message.success("Message sent successfully!");
      })
      .catch((error) => {
        console.error("Email sending failed:", error);
        message.error("Failed to send message. Please try again.");
      });
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section
      id="contact"
      className="py-24 bg-gradient-to-br from-gray-50 via-purple-50 to-gray-50 relative overflow-hidden"
    >
      {/* Background Effects */}
      <div className="absolute top-20 left-10 w-96 h-96 bg-purple-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
      <div
        className="absolute bottom-20 right-10 w-96 h-96 bg-blue-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"
        style={{ animationDelay: "2s" }}
      ></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20 slide-in-up">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-purple-600 to-blue-500 text-white text-sm font-bold rounded-full shadow-lg mb-6">
            <Sparkles className="w-4 h-4" />
            <span>GET IN TOUCH</span>
          </div>
          <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            Let's <span className="gradient-text">Connect</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Have a project in mind? Let's discuss how I can help bring your
            ideas to life
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Contact Information */}
          <div className="space-y-8">
            <div className="slide-in-left">
              <h3 className="text-3xl font-bold mb-8 text-gray-900">
                Contact Information
              </h3>

              <div className="space-y-6">
                {[
                  {
                    icon: Mail,
                    text: "itatipavan@gmail.com",
                    href: "mailto:itatipavan@gmail.com",
                    gradient: "from-purple-600 to-pink-600",
                    testId: "mail",
                  },
                  {
                    icon: Phone,
                    text: "+91 7013316511",
                    href: "tel:+917013316511",
                    gradient: "from-blue-600 to-cyan-600",
                    testId: "phone",
                  },
                  {
                    icon: MapPin,
                    text: "Hyderabad, India",
                    href: null,
                    gradient: "from-green-600 to-teal-600",
                    testId: "location",
                  },
                ].map((item, index) => {
                  const Icon = item.icon;
                  const content = (
                    <>
                      {/* Glow Effect */}
                      <div
                        className={`absolute -inset-0.5 bg-gradient-to-r ${item.gradient} rounded-2xl blur opacity-30 group-hover:opacity-75 transition duration-1000`}
                      ></div>

                      {/* Card Content */}
                      <div className="relative flex items-center p-6 bg-white rounded-2xl shadow-lg">
                        <div
                          className={`p-4 bg-gradient-to-br ${item.gradient} rounded-xl mr-4`}
                        >
                          <Icon className="h-6 w-6 text-white" />
                        </div>
                        <span className="text-gray-700 font-semibold text-lg">
                          {item.text}
                        </span>
                      </div>
                    </>
                  );

                  return item.href ? (
                    <a
                      key={index}
                      href={item.href}
                      className="group relative block hover-scale"
                      data-testid={`contact-${item.testId}`}
                    >
                      {content}
                    </a>
                  ) : (
                    <div key={index} className="group relative hover-scale">
                      {content}
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="slide-in-right">
            <div className="relative group">
              {/* Glow Effect */}
              <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-600 to-blue-500 rounded-2xl blur opacity-30 group-hover:opacity-75 transition duration-1000"></div>

              {/* Form Container */}
              <form
                onSubmit={handleSubmit}
                className="relative p-8 bg-white rounded-2xl shadow-2xl space-y-6"
              >
                {/* Name Input */}
                <div className="relative">
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    onFocus={() => setFocused({ ...focused, name: true })}
                    onBlur={() => setFocused({ ...focused, name: false })}
                    className="peer w-full px-4 py-4 border-2 border-gray-300 rounded-xl focus:border-purple-600 focus:outline-none transition-all duration-300 bg-gray-50 focus:bg-white"
                    placeholder=" "
                    required
                    data-testid="contact-name-input"
                  />
                  <label
                    htmlFor="name"
                    className="absolute left-4 -top-3 px-2 bg-white text-sm font-semibold text-gray-600 peer-focus:text-purple-600 transition-all duration-300"
                  >
                    Your Name
                  </label>
                </div>

                {/* Email Input */}
                <div className="relative">
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    onFocus={() => setFocused({ ...focused, email: true })}
                    onBlur={() => setFocused({ ...focused, email: false })}
                    className="peer w-full px-4 py-4 border-2 border-gray-300 rounded-xl focus:border-purple-600 focus:outline-none transition-all duration-300 bg-gray-50 focus:bg-white"
                    placeholder=" "
                    required
                    data-testid="contact-email-input"
                  />
                  <label
                    htmlFor="email"
                    className="absolute left-4 -top-3 px-2 bg-white text-sm font-semibold text-gray-600 peer-focus:text-purple-600 transition-all duration-300"
                  >
                    Your Email
                  </label>
                </div>

                {/* Message Input */}
                <div className="relative">
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    onFocus={() => setFocused({ ...focused, message: true })}
                    onBlur={() => setFocused({ ...focused, message: false })}
                    rows="5"
                    className="peer w-full px-4 py-4 border-2 border-gray-300 rounded-xl focus:border-purple-600 focus:outline-none transition-all duration-300 resize-none bg-gray-50 focus:bg-white"
                    placeholder=" "
                    required
                    data-testid="contact-message-input"
                  />
                  <label
                    htmlFor="message"
                    className="absolute left-4 -top-3 px-2 bg-white text-sm font-semibold text-gray-600 peer-focus:text-purple-600 transition-all duration-300"
                  >
                    Your Message
                  </label>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="group w-full relative overflow-hidden px-8 py-4 text-lg font-bold text-white rounded-xl transition-all duration-300 transform hover:scale-105"
                  data-testid="contact-submit-btn"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-blue-500 transition-opacity duration-300"></div>
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <span className="relative flex items-center justify-center gap-2">
                    Send Message
                    <Send className="h-5 w-5 transform group-hover:translate-x-1 transition-transform duration-300" />
                  </span>
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
