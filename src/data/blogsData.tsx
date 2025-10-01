// src/data/blogsData.ts
export interface Blog {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  image: string;
  link: string;
}

export const blogs: Blog[] = [
  {
    id: "internship-ready",
    title: "How to Get Internship-Ready in 2 Weeks",
    subtitle: "Turn your skills into opportunities. Fast.",
    description:
      "From polishing your LinkedIn to acing interviews, this guide shows how you can be internship-ready in just 14 days.",
    image: "/images/blog/internship.jpg",
    link:"/blog/internship-ready",
  },
  {
    id: "great-cv",
    title: "Do’s and Don’ts for a Great CV",
    subtitle: "Your roadmap to a standout resume.",
    description:
      "Learn the essential tips to craft a CV that gets noticed and the common mistakes you should avoid.",
    image: "/images/blog/dos-and-donts.jpg",
    link:"/blog/great-cv"
  },
];
