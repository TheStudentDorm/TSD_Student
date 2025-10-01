// src/data/testimonialsData.ts
export interface Testimonial {
  name: string;
  role: string;
  feedback: string;
  avatar: string;
}

export const testimonials: Testimonial[] = [
  {
    name: "Abc",
    role: "Student",
    feedback: "Testing testimonial component. The service was fantastic and helped me find the perfect accommodation quickly!",
    avatar: "/icons/female.jpg",
  },
  {
    name: "Xyz",
    role: "Accommodation Provider",
    feedback: "Testing testimonial component. Partnering with TSD has boosted our bookings and connected us with genuine students.",
    avatar: "/icons/male.jpg",
  },
  {
    name: "Pqr",
    role: "Student",
    feedback: "Testing testimonial component. The platform made my transition to university life in Dubai so much smoother!",
    avatar: "/icons/male.jpg",
  },
];
