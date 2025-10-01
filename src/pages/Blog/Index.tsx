import React from "react";
import { Link } from "react-router-dom";
import NavigationButtons from "../../components/NavigationButtons";
import { blogs } from "../../data/blogsData";

export default function BlogIndex() {
  return (
    <section className="w-full">
      {/* Banner */}
      <div
        className="h-screen bg-cover bg-center bg-no-repeat flex flex-col items-center justify-center text-white text-center px-6"
        style={{ backgroundImage: "url('/images/blog/blog-banner.jpg')" }}
      >
        <div className="p-6 max-w-3xl">
          <h1 className="text-3xl sm:text-5xl font-bold mb-4">TSD BLOG</h1>
          <p className="text-lg sm:text-2xl italic leading-relaxed">
            Insights, tips, and guides to help students navigate their personal
            and professional lives in the UAE.
            <br />
            <span className="block text-base sm:text-lg text-gray-200 italic mt-3">
              Keep checking back for fresh updates!
            </span>
          </p>
        </div>
      </div>

      {/* Blog List */}
      <div className="px-6 py-16 max-w-4xl mx-auto space-y-10">
        {blogs.map((post) => (
          <article
            key={post.id}
            className="flex flex-col md:flex-row gap-6 border-b pb-8"
          >
            <img
              src={post.image}
              alt={`Thumbnail for ${post.title}`}
              loading="lazy"
              className="w-full md:w-56 h-40 object-cover rounded-lg shadow-sm"
            />
            <div className="flex-1">
              <h2 className="text-2xl font-semibold mb-1">{post.title}</h2>
              <p className="text-gray-500 mb-2 italic">{post.subtitle}</p>
              <p className="text-gray-700 mb-4 line-clamp-3">
                {post.description}
              </p>
              <Link
                to={`/blog/${post.id}`}
                className="inline-block text-blue-600 font-semibold hover:underline"
              >
                Read Full Article →
              </Link>
            </div>
          </article>
        ))}

        {/* Navigation */}
        <div className="mt-12 flex justify-center">
          <NavigationButtons />
        </div>
      </div>
    </section>
  );
}
