import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import NavigationButtons from "./NavigationButtons";

export default function ContactForm() {
  const formRef = useRef<HTMLFormElement>(null);
  const [sending, setSending] = useState(false);

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formRef.current) return;
    setSending(true);

    emailjs
      .sendForm(
        "service_4dau9k8",
        "template_bvle7nc",
        formRef.current,
        "J3nZ4AQeVPkaFgElD"
      )
      .then(() => {
        alert("✅ Message sent successfully!");
        formRef.current?.reset();
      })
      .catch(() => {
        alert("❌ Failed to send. Please try again later.");
      })
      .finally(() => setSending(false));
  };

  return (
    <section className="py-12 sm:py-16 bg-gray-50 text-center px-4">
      <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-[#02066f]">
        HAVE QUESTIONS? SUGGESTIONS?
      </h2>
      <p className="text-sm sm:text-lg text-gray-700 mb-6">
        Tell us what you think or need help with. We're here to assist you!
      </p>

      <form
        ref={formRef}
        onSubmit={sendEmail}
        className="max-w-xl w-full mx-auto space-y-4"
      >
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          required
          className="w-full text-sm sm:text-base px-4 py-2 border rounded-lg focus:ring-2 focus:ring-indigo-500 focus:outline-none"
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          required
          className="w-full text-sm sm:text-base px-4 py-2 border rounded-lg focus:ring-2 focus:ring-indigo-500 focus:outline-none"
        />
        <textarea
          name="message"
          placeholder="Your Message"
          rows={4}
          required
          className="w-full text-sm sm:text-base px-4 py-2 border rounded-lg focus:ring-2 focus:ring-indigo-500 focus:outline-none"
        ></textarea>
        <button
          type="submit"
          disabled={sending}
          className={`px-6 py-3 rounded-lg text-sm sm:text-base transition-all duration-300 ${
            sending
              ? "bg-gray-400 cursor-not-allowed"
              : "bg-[#02066f] text-white hover:bg-[#ff6d34] transform hover:scale-105"
          }`}
        >
          {sending ? "Sending..." : "Send Message"}
        </button>
      </form>

      <div className="mt-8">
        <NavigationButtons />
      </div>
    </section>
  );
}
