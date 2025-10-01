import React, { useState } from "react";
import { Mail, MapPin } from "lucide-react";
import NavigationButtons from "../components/NavigationButtons";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    emailjs
      .send(
        "service_4dau9k8",
        "template_bvle7nc",
        {
          from_name: form.name,
          from_email: form.email,
          message: form.message,
        },
        "J3nZ4AQeVPkaFgElD"
      )
      .then(
        () => {
          toast.success("🎉 Message sent successfully!", {
            position: "top-center",
            autoClose: 3000,
          });
          setForm({ name: "", email: "", message: "" });
        },
        (error) => {
          toast.error("❌ Failed to send. Please try again later.", {
            position: "top-center",
            autoClose: 4000,
          });
          console.error(error.text);
        }
      );
  };

  return (
    <main className="relative w-full min-h-screen">
      <ToastContainer />

      {/* Full-page Background */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/images/contact-bg.jpg')" }}
      >
        <div className="absolute inset-0 bg-black/40"></div>
      </div>

      {/* Centered Content */}
      <div className="relative z-10 flex items-center justify-center min-h-screen px-6 py-12">
        <div className="bg-white/95 rounded-3xl shadow-2xl max-w-6xl w-full grid md:grid-cols-2 overflow-hidden">
          {/* Left Column - Info */}
          <div className="p-8 md:p-12 flex flex-col justify-center space-y-8 bg-gradient-to-br from-tsd-blue/20 to-tsd-orange/20">
            <div className="space-y-4">
              <h2 className="text-3xl md:text-4xl font-bold text-tsd-blue">
                Contact Us
              </h2>
              <p className="text-gray-700">
                We’d love to hear from you. Reach out for inquiries, partnerships, or support.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <MapPin className="w-6 h-6 text-tsd-blue mt-1" />
                <div>
                  <h3 className="font-semibold text-gray-900">Our Address</h3>
                  <p>
                    Business Incubator, Heriot-Watt University, <br />
                    Knowledge Park, Dubai, UAE
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <Mail className="w-6 h-6 text-tsd-orange mt-1" />
                <div>
                  <h3 className="font-semibold text-gray-900">Email</h3>
                  <a
                    href="mailto:thestudentdorm15@outlook.com"
                    className="underline text-tsd-blue hover:text-tsd-orange"
                  >
                    thestudentdorm15@outlook.com
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Form */}
          <div className="p-8 md:p-12 bg-white">
            <h2 className="text-2xl md:text-3xl font-bold mb-6 text-center text-gray-900">
              Send Us a Message
            </h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block mb-2 font-medium text-gray-900">Name</label>
                <input
                  type="text"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  required
                  className="w-full p-3 rounded-lg text-gray-900 bg-gray-100 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-tsd-blue"
                />
              </div>
              <div>
                <label className="block mb-2 font-medium text-gray-900">Email</label>
                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  required
                  className="w-full p-3 rounded-lg text-gray-900 bg-gray-100 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-tsd-blue"
                />
              </div>
              <div>
                <label className="block mb-2 font-medium text-gray-900">Message</label>
                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full p-3 rounded-lg text-gray-900 bg-gray-100 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-tsd-blue"
                />
              </div>
              <button
                type="submit"
                className="w-full bg-tsd-blue text-white py-3 rounded-lg font-semibold hover:bg-tsd-orange transition"
                aria-label="Send Message"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>

      <NavigationButtons />
    </main>
  );
}
