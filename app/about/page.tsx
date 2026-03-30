"use client";

import Footer from "@/src/components/Footer";
import ScrollToTop from "@/src/components/ScrollToTop";
import Link from "next/link";
import { useState } from "react";

export default function AboutPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Note: In a real implementation, this would send data to a backend
    // For now, just show a success message
    console.log("Form submitted:", formData);
    setSubmitted(true);
    setFormData({ name: "", email: "", message: "" });
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <main className="flex flex-col flex-1 min-h-screen bg-white">
      <div className="flex-1 w-full">
        {/* Page Title */}
        <div className="w-full py-16 md:py-20 px-6 md:px-10 border-b border-gray-200">
          <div className="max-w-[1094px] mx-auto text-center">
            <h1 className="text-3xl md:text-4xl font-light tracking-tight text-[#012B55]">
              About
            </h1>
          </div>
        </div>

        {/* Profile Section */}
        <div className="w-full px-6 md:px-10 py-14 md:py-20">
          <div className="max-w-[1094px] mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-16">
              {/* Profile Photo Placeholder */}
              <div className="flex justify-center md:justify-start">
                <div className="w-[276px] h-[288px] bg-gray-100 rounded-lg flex-shrink-0"></div>
              </div>

              {/* Profile Info */}
              <div className="md:col-span-2">
                <h2 className="text-lg md:text-xl font-medium tracking-wide text-[#012B55] mb-5">
                  JUNICHI ISHIGAKI
                </h2>

                <p className="text-sm md:text-base text-[#012B55]/80 leading-relaxed mb-10">
                  Product Designer based in Tokyo. After studying mechanical
                  engineering, he majored in Industrial Design and Service
                  Design at Chiba University Graduate School. He is currently
                  engaged in the design of digital products, while also working
                  as independent industrial designer.
                </p>

                {/* Exhibition */}
                <div className="mb-10">
                  <h3 className="text-sm font-medium tracking-wide uppercase text-[#012B55] mb-4">
                    Exhibition
                  </h3>
                  <ul className="text-sm md:text-base text-[#012B55]/80 space-y-2.5">
                    <li>
                      2022: DESIGNART TOKYO 2022, "Joint Exhibition: Ibasho
                      Portable Furniture"
                    </li>
                    <li>
                      2022: Bud Brand Award Exhibition in Milan Design Week
                      2022: "Array Polar"
                    </li>
                    <li>
                      2022: Interior Lifestyle Tokyo 2022, "Aichi Design Vision"
                    </li>
                    <li>2018: Maker Fair Tokyo 2018</li>
                    <li>
                      2017: Spiral Independent Creators Festival 2017, "WAVES"
                    </li>
                    <li>
                      2016: Konica Minolta Social Design Award Exhibition of
                      selected works, "KILITZ"
                    </li>
                  </ul>
                </div>

                {/* Award */}
                <div className="mb-10">
                  <h3 className="text-sm font-medium tracking-wide uppercase text-[#012B55] mb-4">
                    Award
                  </h3>
                  <ul className="text-sm md:text-base text-[#012B55]/80 space-y-2.5">
                    <li>2022: Bud Brand Award 2022, Honourable Mention</li>
                    <li>2020: Good Design Award 2020</li>
                    <li>2018: LINE BOOT AWARD 2018, Category award</li>
                    <li>
                      2018: Yahoo! hackday 10th Anniv., Grand Prize and audience
                      award
                    </li>
                    <li>2017: ROHM Open Hack Challenge 2017, Grand Prize</li>
                    <li>2016: Konica Minolta Social Design Award, Selected</li>
                    <li>2016: Lexus Design Award 2016, Nominated as a shortlist</li>
                  </ul>
                </div>

                {/* Education */}
                <div>
                  <h3 className="text-sm font-medium tracking-wide uppercase text-[#012B55] mb-4">
                    Education
                  </h3>
                  <ul className="text-sm md:text-base text-[#012B55]/80 space-y-2.5">
                    <li>2016: Master of Engineering, Chiba University</li>
                    <li>2013-2014: Exchange, Köln International School of Design</li>
                    <li>2013: Exchange, Glasgow School of Art</li>
                    <li>2013: Bachelor of Engineering, Chiba University</li>
                    <li>
                      2011: Diploma of Engineering, Okinawa National College of
                      Technology
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Section */}
        <div className="w-full px-6 md:px-10 py-14 md:py-20 border-t border-gray-200">
          <div className="max-w-[720px] mx-auto">
            <h2 className="text-2xl md:text-3xl font-light tracking-tight text-[#012B55] mb-6">
              Get in Touch
            </h2>

            <p className="text-sm md:text-base text-[#012B55]/80 leading-relaxed mb-3">
              Please feel free to contact me here with any inquiries about the
              project or my work. I will contact you shortly.
            </p>

            <p className="text-sm md:text-base text-[#012B55]/80 leading-relaxed mb-10">
              お仕事のご相談や、作品についての質問などお気軽にお問合せください。
            </p>

            {submitted && (
              <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded text-green-700 text-sm">
                Thank you for your message! I will get back to you soon.
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-xs font-medium tracking-wide uppercase text-[#012B55] mb-2"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-200 rounded text-sm text-[#012B55] placeholder-gray-400 focus:outline-none focus:border-[#012B55] transition-colors"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-xs font-medium tracking-wide uppercase text-[#012B55] mb-2"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-200 rounded text-sm text-[#012B55] placeholder-gray-400 focus:outline-none focus:border-[#012B55] transition-colors"
                  placeholder="your.email@example.com"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-xs font-medium tracking-wide uppercase text-[#012B55] mb-2"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full px-4 py-3 border border-gray-200 rounded text-sm text-[#012B55] placeholder-gray-400 focus:outline-none focus:border-[#012B55] transition-colors"
                  placeholder="Your message..."
                ></textarea>
              </div>

              <button
                type="submit"
                className="px-8 py-3 bg-[#012B55] text-white rounded hover:opacity-80 transition-opacity text-sm font-medium tracking-wide"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>

      <Footer />
      <ScrollToTop />
    </main>
  );
}
