import React, { useRef, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { blogs } from "../data/blogsData";
import { testimonials } from "../data/testimonialsData";

const topBlogs = blogs.slice(0, 2);
const topTestimonials = testimonials.slice(0, 2);

const BlogCard = ({ blog }: { blog: typeof topBlogs[0] }) => (
  <div className="flex flex-col sm:flex-row items-start gap-4 p-4 bg-white rounded-xl shadow-md hover:shadow-lg transition h-full">
    <img src={blog.image} alt={blog.title} className="w-24 h-20 object-cover rounded-lg" />
    <div className="flex flex-col justify-between h-full">
      <div>
        <h3 className="text-md font-semibold text-gray-800">{blog.title}</h3>
        <p className="text-sm text-[#004AAD] mt-1">{blog.subtitle}</p>
        <p className="text-xs text-[#004AAD] mt-1">{blog.description}</p>
      </div>
      <Link to={blog.link} className="text-orange-500 text-xs mt-2">
        Read more →
      </Link>
    </div>
  </div>
);

const TestimonialCard = ({ t }: { t: typeof topTestimonials[0] }) => (
  <div className="flex flex-col justify-between p-4 bg-white rounded-xl shadow-md hover:shadow-lg transition h-full">
    <div>
      <br/>
      <div className="text-[#004AAD] text-3xl text-center leading-none mb-2">“</div>
      <p className="text-sm text-gray-900 italic mb-4">{t.feedback}</p>
      <div className="text-[#004AAD] text-3xl text-center leading-none mb-2">"</div>
      <br/>
    </div>
    <div className="flex items-center gap-3 mt-2">
      <img src={t.avatar} alt={t.name} className="w-10 h-10 rounded-full" />
      <div><br/>
        <p className="font-semibold text-sm">{t.name}</p>
        <p className="text-xs text-gray-500">{t.role}</p>
      </div>
    </div>
  </div>
);

export default function BlogTestimonials() {
  const blogRef = useRef<HTMLDivElement | null>(null);
const [blogHeight, setBlogHeight] = useState<number | undefined>(undefined);

  useEffect(() => {
  if (blogRef.current) {
    setBlogHeight(blogRef.current.offsetHeight);
  }
   const handleResize = () => {
    if (blogRef.current) {
      setBlogHeight(blogRef.current.offsetHeight);
    }
  };

  window.addEventListener("resize", handleResize);
  return () => window.removeEventListener("resize", handleResize);
}, []);

  return (
    <section className="py-12 sm:py-16 px-4 bg-gray-50">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-12 items-start">
        <motion.div
          ref={blogRef}
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="space-y-6 sm:space-y-8"
        >
          <h2 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6 text-[#02066f]">
            BLOG
          </h2>
          {topBlogs.map((blog, idx) => (
            <BlogCard key={idx} blog={blog} />
          ))}
          <div className="pt-1">
            <Link
              to="/blog/index"
              className="text-tsd-blue font-medium hover:text-[#ff6d34] text-sm"
            >
              Read More Blog →
            </Link>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="space-y-6 sm:space-y-8 "
          style={{ minHeight: blogHeight }}
        >
          <h2 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6 text-[#02066f] h-full">
            TESTIMONIALS
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 h-full">
            {topTestimonials.map((t, idx) => (
              <TestimonialCard key={idx} t={t} />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
