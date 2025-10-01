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
      { name: "Khalifa University", description: "The UAE’s top-ranked tech and engineering university. Known for innovation, robotics, and cutting-edge research.", image: "/images/academics/khalifa.png" },
      { name: "Zayed University (Abu Dhabi campus)", description: "A public university with strong programmes in arts, media, and business, especially popular with Emirati students.", image: "/images/academics/Zayed_Uni.jpg" },
      { name: "New York University Abu Dhabi (NYUAD)", description: "A prestigious global campus offering a rigorous liberal arts education. They are elite, diverse, and international.", image: "/images/academics/nyad.jpg" },
      { name: "Sorbonne University Abu Dhabi", description: "A French-linked institution offering programs in arts, law, and social sciences with a unique international flair.", image: "/images/academics/Sorbonne.jpg" },
    ],
  },
  {
    name: "Dubai",
    universities: [
      { name: "American University in Dubai (AUD)", description: "Stylish, central, and strong in business, media, and architecture.", image: "/images/academics/aud.jpg" },
      { name: "Heriot-Watt University Dubai", description: "A UK-based campus with top-tier programmes in engineering, business, and data science." , image: "/images/academics/HW_dxb.jpg"},
      { name: "University of Wollongong in Dubai (UOWD)", description: "Australian-accredited and known for business, IT, and engineering." , image: "/images/academics/uowd.jpg"},
      { name: "British University in Dubai (BUiD)", description: "Research-focused postgraduate university, especially in engineering, education, and computing." , image: "/images/academics/buid.jpg"},
      { name: "Middlesex University Dubai", description: "Offers a broad range of UK-accredited degrees from psychology and law to IT and fashion." , image: "/images/academics/msud.jpg"},
      { name: "Canadian University Dubai", description: "Delivers Canadian-style education in the heart of Dubai. Great for students looking to transfer abroad.", image: "/images/academics/cud.jpg" },
      { name: "Dubai Medical College for Girls", description: "A women-only medical school. The UAE’s first private college offering MBBS." , image: "/images/academics/dmca.jpg"},
      { name: "Murdoch University Dubai", description: "Perth’s global branch campus offering degrees in media, business, and cybersecurity." , image: "/images/academics/md.jpg"},
    ],
  },
  {
    name: "Sharjah",
    universities: [
      { name: "American University of Sharjah (AUS)", description: "Sharjah’s most prominent university offering US-style education with strong engineering, architecture, and design programs.", image: "/images/academics/aus.jpg"},
      { name: "University of Sharjah", description: "A large public university with a wide variety of programs, from medicine and health sciences to humanities." , image: "/images/academics/ushj.jpg"},
    ],
  },
  {
    name: "Ajman",
    universities: [
      { name: "Ajman University", description: "A growing private university offering programs in business, law, engineering, dentistry, and pharmacy." , image: "/images/academics/ajuni.jpg"},
      { name: "City University College of Ajman", description: "A smaller institution with a focus on business and IT — steadily expanding its academic portfolio." , image: "/images/academics/ccaj.png"},
    ],
  },
  {
    name: "Fujairah",
    universities: [
      { name: "University of Fujairah", description: "The main institution in the emirate, offering a range of undergraduate programs on a smaller scale." , image: "/images/academics/ufuj.jpg"}, 
      { name: "University of Science and Technology of Fujairah", description: "Known for its science and health programs, including dentistry and IT." , image: "/images/academics/ustfj.jpg"},
    ],
  },
  {
    name: "Ras Al Khaimah",
    universities: [
      { name: "American University of Ras Al Khaimah (AURAK)", description: "A US-curriculum university with strong engineering and business departments.", image: "/images/academics/aurk.jpg"},
      { name: "RAK Medical & Health Sciences University", description: "Specialised in nursing, pharmacy, and medical sciences — ideal for health-focused careers." , image: "/images/academics/RAK_Medical.png"},
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
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("translate-y-0", "opacity-100");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.2 }
    );

    cardRefs.current.forEach((ref) => ref && observer.observe(ref));
    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div
        className="relative w-full h-screen bg-cover bg-center flex items-center justify-center text-center px-4 sm:px-6"
        style={{ backgroundImage: "url(/images/2_1.png)" }}
      >
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/10 "></div>

        {/* Hero Text */}
        <div className="relative z-10 max-w-4xl py-12 sm:py-24 text-white flex flex-col justify-center">
          <h1 className="text-3xl sm:text-5xl font-extrabold uppercase mb-6 drop-shadow-lg">
            Major Universities in the UAE
          </h1>
          <p className="text-lg md:text-xl leading-relaxed mb-0">
            Planning your academic journey? Here's a guide to some of the top
            universities in each emirate, from world-renowned research hubs to
            creative arts powerhouses.
          </p>
        </div>
      </div>

      {/* TSD Pro Tip */}
      <div className="max-w-3xl mx-auto mt-10 mb-16 px-6">
        <div className="bg-white/20 backdrop-blur-md rounded-xl shadow-md p-5 text-sm sm:text-base text-gray-900 text-center">
          <span className="font-bold text-[#F9943B]">💡 TSD Pro Tip:</span>{" "}
          Some unis are big and buzzy, others are focused and quiet. Think about
          your learning style, lifestyle, and future goals. A good fit beats a
          big name every time.
        </div>
      </div>

      {/* Emirates & Universities */}
      {uaeUniversities.map((em) => (
        <section key={em.name} className="px-6 max-w-6xl mx-auto mb-20">
          {/* Emirate Heading */}
          <h2 className="text-3xl font-semibold mb-10 uppercase text-center text-[#002060] relative">
            {em.name}
            <span className="block w-20 h-1 bg-[#F9943B] mx-auto mt-3 rounded-full"></span>
          </h2>

          <div className="space-y-12">
            {em.universities.map((uni, index) => {
              const globalIndex = uaeUniversities
                .flatMap((e) => e.universities.map((u) => ({ ...u, emirate: e.name })))
                .findIndex((u) => u.name === uni.name && u.emirate === em.name);

              const isEven = index % 2 === 0;

              return (
                <div
                  key={uni.name}
                  ref={(el) => (cardRefs.current[globalIndex] = el)}
                  className={`relative flex flex-col ${
                    isEven ? "md:flex-row" : "md:flex-row-reverse"
                  } items-center gap-6 transform transition-all duration-700 ease-out opacity-0 translate-y-12 hover:scale-[1.02] hover:shadow-2xl rounded-2xl bg-white/80 backdrop-blur-sm p-5 shadow-md`}
                >
                  {/* Uni Image */}
                  <img
                    src={uni.image || emirateImages[em.name]}
                    alt={uni.name}
                    className="w-full md:w-1/2 h-64 object-cover rounded-xl shadow-lg"
                  />

                  {/* Uni Info */}
                  <div className="md:w-1/2 md:px-6">
                    <h3 className="text-2xl font-bold mb-3 text-[#004AAD]">{uni.name}</h3>
                    <p className="mb-3 text-gray-600">{uni.description}</p>
                    {uni.website && (
                      <a
                        href={uni.website}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block mt-2 px-5 py-2 rounded-lg bg-[#004AAD] text-white font-semibold hover:bg-[#F9943B] transition-colors"
                      >
                        Visit Website
                      </a>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </section>
      ))}
    </div>
  );
};

export default UAEUniversities;
