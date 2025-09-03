import React, { useState } from "react";
import { Mail, MapPin } from "lucide-react";
import NavigationButtons from "../components/NavigationButtons";
import emailjs from "@emailjs/browser";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    emailjs.send(
      "service_nm9wacb",   // replace with your EmailJS service ID
        "template_h0afoa3",// Replace with your EmailJS template ID
      {
        from_name: form.name,
        from_email: form.email,
        message: form.message,
      },
      "wYMZ0-6j3wayjyNO-"  // Replace with your EmailJS public key
    )
    .then(
      (result) => {
        alert("Message sent successfully!");
        setForm({ name: "", email: "", message: "" });
      },
      (error) => {
        alert("Failed to send message. Please try again later.");
        console.error(error.text);
      }
    );
  };

  return (
    <main className="pb-20">
      {/* HEADER with Gradient Background */}
      <section className="relative bg-gradient-to-r from-green-700 via-green-500 to-green-400 text-white py-20 px-6 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gray-100">Contact Us</h1>
        <p className="text-lg md:text-xl max-w-2xl mx-auto opacity-90 text-gray-200">
          We’d love to hear from you. Reach out for inquiries, partnerships, or support.
        </p>
      </section>

      {/* WHOLE SECTION GRADIENT BACKGROUND */}
      <section className="px-6 py-16 bg-gradient-to-br from-gray-50 via-indigo-50 to-purple-100">
        <div className="max-w-6xl mx-auto grid gap-12 md:grid-cols-2">
          {/* LEFT COLUMN - Info Cards */}
          <div className="space-y-6">
            <div className="p-6 rounded-xl shadow-lg bg-gradient-to-r from-green-400/80 to-purple-400/80 text-black backdrop-blur-md hover:scale-[1.02] hover:shadow-xl transition">
              <div className="flex items-center mb-3">
                <MapPin className="w-6 h-6 text-black mr-3" />
                <h2 className="text-xl font-semibold">Our Address</h2>
              </div>
              <p>
                Business Incubator, Heriot-Watt University, <br />
                Knowledge Park, Dubai, UAE
              </p>
            </div>

            <div className="p-6 rounded-xl shadow-lg bg-gradient-to-r from-orange-400/80 to-yellow-400/80 text-white backdrop-blur-md hover:scale-[1.02] hover:shadow-xl transition">
              <div className="flex items-center mb-3">
                <Mail className="w-6 h-6 text-black mr-3" />
                <h2 className="text-xl font-semibold text-black">Email</h2>
              </div>
              <a
                href="mailto:thestudentdorm@gmail.com"
                className="underline hover:text-black"
              >
                thestudentdorm@gmail.com
              </a>
            </div>
          </div>

          {/* RIGHT COLUMN - Contact Form (Glassmorphism) */}
          <div className="p-8 rounded-xl shadow-lg bg-teal/30 backdrop-blur-xl border border-white/25 hover:scale-[1.01] hover:shadow-xl transition">
            <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">
              Send Us a Message
            </h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block mb-2 font-medium text-gray-700">Name</label>
                <input
                  type="text"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  required
                  className="w-full p-3 rounded-lg text-gray-900 bg-white/70 backdrop-blur-sm border border-gray-200 focus:outline-none focus:ring-2 focus:ring-indigo-400"
                />
              </div>
              <div>
                <label className="block mb-2 font-medium text-gray-700">Email</label>
                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  required
                  className="w-full p-3 rounded-lg text-gray-900 bg-white/70 backdrop-blur-sm border border-gray-200 focus:outline-none focus:ring-2 focus:ring-indigo-400"
                />
              </div>
              <div>
                <label className="block mb-2 font-medium text-gray-700">Message</label>
                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full p-3 rounded-lg text-gray-900 bg-white/70 backdrop-blur-sm border border-gray-200 focus:outline-none focus:ring-2 focus:ring-indigo-400"
                />
              </div>
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-3 rounded-lg font-semibold hover:opacity-90 transition"
                aria-label="Send Message"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </section>

      <NavigationButtons />
    </main>
  );
}
