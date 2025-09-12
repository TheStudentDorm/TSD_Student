import React from "react";
import { Link } from "react-router-dom";
import NavigationButtons from "../../components/NavigationButtons";

const blogPosts = [
  {
    id: "internship-ready",
    title: "How to Get Internship-Ready in 2 Weeks",
    subtitle: "Turn your skills into opportunities. Fast.",
    description:
      "From polishing your LinkedIn to acing interviews, this guide shows how you can be internship-ready in just 14 days.",
    image: "/images/blog/internship.jpg",
  },
  {
    id: "great-cv",
    title: "Do’s and Don’ts for a Great CV",
    subtitle: "Your roadmap to a standout resume.",
    description:
      "Learn the essential tips to craft a CV that gets noticed and the common mistakes you should avoid.",
    image: "/images/blog/dos-and-donts.jpg",
  },
];

export default function BlogIndex() {
  return (
   <section>
    <div
  className="h-[60vh] bg-cover bg-center bg-no-repeat flex flex-col items-center justify-center text-white text-center px-6"
  style={{
    backgroundImage: "url('/images/blog/blog-banner.jpg')",
  }}
>
  <div className="bg-black/50 p-6 rounded-lg">
    <h1 className="text-4xl font-bold mb-4">TSD BLOG</h1>
    <p className="text-xl sm:text-2xl italic">
      Insights, tips, and guides to help students navigate their personal and
      professional lives in the UAE.
      <br />
      <span className="block text-lg sm:text-xl text-gray-200 italic mt-3">
        Keep checking back for fresh updates!
      </span>
    </p>
  </div>
</div>

      {/* Blog List */}
      <div className="px-6 py-16 max-w-4xl mx-auto space-y-10">
        {blogPosts.map((post) => (
          <div
            key={post.id}
            className="flex flex-col md:flex-row gap-6 border-b pb-8"
          >
            <img
              src={post.image}
              alt={post.title}
              className="w-full md:w-56 h-40 object-cover rounded-lg"
            />
            <div className="flex-1">
              <h2 className="text-2xl font-semibold mb-1">{post.title}</h2>
              <p className="text-gray-500 mb-2 italic">{post.subtitle}</p>
              <p className="text-gray-700 mb-4">{post.description}</p>
              <Link
                to={`/blog/${post.id}`}
                className="inline-block text-blue-600 font-semibold hover:underline"
              >
                Read Full Article →
              </Link>
            </div>
          </div>
        ))}

        {/* Navigation */}
        <div className="mt-12 flex justify-center">
          <NavigationButtons />
        </div>
      </div>
   </section>);
}
