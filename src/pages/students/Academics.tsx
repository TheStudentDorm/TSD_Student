import React, { useEffect, useRef } from "react";

interface University {
  name: string;
  description: string;
  website?: string;
  image?: string;
}

interface Emirate {
  name: string;
  universities: University[];
}

const uaeUniversities: Emirate[] = [
  {
    name: "Abu Dhabi",
    universities: [
      { name: "Khalifa University", description: "The UAE’s top-ranked tech and engineering university. Known for innovation, robotics, and cutting-edge research.", image: "/images/universities/khalifa_logo.png" },
      { name: "Zayed University (Abu Dhabi campus)", description: "A public university with strong programmes in arts, media, and business, especially popular with Emirati students." },
      { name: "New York University Abu Dhabi (NYUAD)", description: "A prestigious global campus offering a rigorous liberal arts education. They are elite, diverse, and international.", image: "/images/universities/nyuad_logo.png" },
      { name: "Sorbonne University Abu Dhabi", description: "A French-linked institution offering programs in arts, law, and social sciences with a unique international flair." },
    ],
  },
  {
    name: "Dubai",
    universities: [
      { name: "American University in Dubai (AUD)", description: "Stylish, central, and strong in business, media, and architecture." },
      { name: "Heriot-Watt University Dubai", description: "A UK-based campus with top-tier programmes in engineering, business, and data science." },
      { name: "University of Wollongong in Dubai (UOWD)", description: "Australian-accredited and known for business, IT, and engineering." },
      { name: "British University in Dubai (BUiD)", description: "Research-focused postgraduate university, especially in engineering, education, and computing." },
      { name: "Middlesex University Dubai", description: "Offers a broad range of UK-accredited degrees from psychology and law to IT and fashion." },
      { name: "Canadian University Dubai", description: "Delivers Canadian-style education in the heart of Dubai. Great for students looking to transfer abroad." },
      { name: "Dubai Medical College for Girls", description: "A women-only medical school. The UAE’s first private college offering MBBS." },
      { name: "Murdoch University Dubai", description: "Perth’s global branch campus offering degrees in media, business, and cybersecurity." },
    ],
  },
  {
    name: "Sharjah",
    universities: [
      { name: "American University of Sharjah (AUS)", description: "Sharjah’s most prominent university offering US-style education with strong engineering, architecture, and design programs.", image: "/images/universities/aus_logo.png" },
      { name: "University of Sharjah", description: "A large public university with a wide variety of programs, from medicine and health sciences to humanities." },
    ],
  },
  {
    name: "Ajman",
    universities: [
      { name: "Ajman University", description: "A growing private university offering programs in business, law, engineering, dentistry, and pharmacy." },
      { name: "City University College of Ajman", description: "A smaller institution with a focus on business and IT — steadily expanding its academic portfolio." },
    ],
  },
  {
    name: "Fujairah",
    universities: [
      { name: "University of Fujairah", description: "The main institution in the emirate, offering a range of undergraduate programs on a smaller scale." },
      { name: "University of Science and Technology of Fujairah", description: "Known for its science and health programs, including dentistry and IT." },
    ],
  },
  {
    name: "Ras Al Khaimah",
    universities: [
      { name: "American University of Ras Al Khaimah (AURAK)", description: "A US-curriculum university with strong engineering and business departments." },
      { name: "RAK Medical & Health Sciences University", description: "Specialised in nursing, pharmacy, and medical sciences — ideal for health-focused careers." },
    ],
  },
];

const emirateImages: Record<string, string> = {
  "Abu Dhabi": "https://source.unsplash.com/800x600/?abu-dhabi,city",
  Dubai: "https://source.unsplash.com/800x600/?dubai,skyline",
  Sharjah: "https://source.unsplash.com/800x600/?sharjah,architecture",
  Ajman: "https://source.unsplash.com/800x600/?ajman,city",
  Fujairah: "https://source.unsplash.com/800x600/?fujairah,mountains",
  "Ras Al Khaimah": "https://source.unsplash.com/800x600/?ras-al-khaimah,beach",
};

const UAEUniversities: React.FC = () => {
  const cardRefs = useRef<Array<HTMLDivElement | null>>([]);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("translate-x-0", "opacity-100");
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.2 });

    cardRefs.current.forEach((ref) => ref && observer.observe(ref));
    return () => observer.disconnect();
  }, []);

  const allUniversities = uaeUniversities.flatMap((emirate) =>
    emirate.universities.map((uni) => ({ ...uni, emirate: emirate.name }))
  );

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div
        className="relative h-64 md:h-96 bg-cover bg-center flex items-center justify-center"
        style={{ backgroundImage: 'url(/images/skyline.jpg)' }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-40"></div>
        <h1 className="relative text-4xl md:text-5xl font-bold text-white text-center px-4">
          Major Universities in the UAE
        </h1>
      </div>

      <div className="p-6">
        <p className="text-center text-lg text-gray-700 mb-10 max-w-3xl mx-auto">
          Planning your academic journey? Here's a guide to some of the top universities in each emirate, from world-renowned research hubs to creative arts powerhouses.
        </p>
        <p>💡TSD Pro Tip</p><p>
        Some unis are big and buzzy, others are focused and quiet. Think about your learning style, lifestyle, and future goals. A good fit beats a big name every time.
          </p>

        {uaeUniversities.map((em) => (
          <section key={em.name} id={em.name.replace(/\s+/g, "")} className="mb-16">
            {/* Emirate Heading with Blue + Orange Accent */}
            <h2 className="text-3xl font-semibold mb-10 text-center text-[#004AAD] relative inline-block">
              {em.name}
              <span className="block w-24 h-1 bg-[#F9943B] mx-auto mt-2 rounded-full"></span>
            </h2>

            {em.universities.map((uni) => {
              const globalIndex = allUniversities.findIndex(
                (u) => u.name === uni.name && u.emirate === em.name
              );
              return (
                <div
                  key={uni.name}
                  ref={(el) => (cardRefs.current[globalIndex] = el)}
                  className={`relative flex flex-col md:flex-row items-center mb-16 transform transition-all duration-700 ease-out opacity-0 hover:scale-105 hover:shadow-xl ${
                    globalIndex % 2 === 0
                      ? "-translate-x-40 md:translate-x-0"
                      : "translate-x-40 md:translate-x-0 md:flex-row-reverse"
                  }`}
                >
                  <img
                    src={uni.image || emirateImages[em.name]}
                    alt={uni.name}
                    className="w-full md:w-1/2 h-64 object-contain rounded-lg shadow-lg p-4 bg-white"
                  />
                  <div className="md:w-1/2 md:px-8 mt-5 md:mt-0 bg-white p-6 rounded-lg shadow-lg">
                    <h3 className="text-2xl font-bold mb-3 text-[#004AAD]">{uni.name}</h3>
                    <p className="mb-2 text-gray-700">{uni.description}</p>
                    {uni.website && (
                      <a
                        href={uni.website}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[#004AAD] hover:text-[#F9943B] hover:underline mt-2 block font-semibold"
                      >
                        Visit Website
                      </a>
                    )}
                  </div>
                </div>
              );
            })}
          </section>
        ))}
      </div>
    </div>
  );
};

export default UAEUniversities;
