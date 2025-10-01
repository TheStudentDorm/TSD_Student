// Hero.tsx
import React, { useEffect, useRef, useState } from "react";

interface HeroProps {
  overlay?: "light" | "ultraLight";
  navbarOffset?: string;
}

export default function Hero({ overlay = "light", navbarOffset = "pt-16" }: HeroProps) {
  const heroVideoRef = useRef<HTMLVideoElement | null>(null);
  const hasPlayedRef = useRef(false);
  const contentRef = useRef<HTMLDivElement>(null);

  const [isMobile, setIsMobile] = useState(false);
  const [showContent, setShowContent] = useState(false);
  const [dynamicHeight, setDynamicHeight] = useState<number | null>(null);
  const [heroOffsetY, setHeroOffsetY] = useState(0);

  // Detect mobile
  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Dynamic mobile height
  useEffect(() => {
    if (isMobile && contentRef.current) {
      const resizeObserver = new ResizeObserver(() => {
        const height = contentRef.current!.getBoundingClientRect().height;
        setDynamicHeight(Math.max(height + 40, 300));
      });
      resizeObserver.observe(contentRef.current);
      return () => resizeObserver.disconnect();
    }
  }, [isMobile]);

  // Parallax desktop
  useEffect(() => {
    if (isMobile) return;
    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          setHeroOffsetY(Math.min(window.scrollY * 0.05, 100));
          ticking = false;
        });
        ticking = true;
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isMobile]);

  // Video autoplay (desktop only)
  useEffect(() => {
    if (!heroVideoRef.current || isMobile) return;
    const video = heroVideoRef.current;
    if (!hasPlayedRef.current && video.paused) {
      video.play().catch(() => {});
      hasPlayedRef.current = true;
    }
  }, [isMobile]);

  // Show content
  useEffect(() => {
    const delay = isMobile ? 2000 : 7000;
    const timer = setTimeout(() => setShowContent(true), delay);
    return () => clearTimeout(timer);
  }, [isMobile]);

  const overlayClasses: Record<typeof overlay, string> = {
    light: "bg-white/10",
    ultraLight: "bg-white/10",
  };

  return (
    <div
      className={`relative w-full overflow-hidden ${navbarOffset}`}
      style={{
        height: isMobile ? dynamicHeight ?? 300 : "100vh",
        minHeight: isMobile ? 300 : 600,
      }}
    >
      {isMobile ? (
        <MobileHeroContent ref={contentRef} showContent={showContent} />
      ) : (
        <DesktopHeroContent
          heroVideoRef={heroVideoRef}
          overlayClass={overlayClasses[overlay]}
          showContent={showContent}
          heroOffsetY={heroOffsetY}
        />
      )}
    </div>
  );
}

// ==================== Mobile Hero ====================
const MobileHeroContent = React.forwardRef<HTMLDivElement, { showContent: boolean }>(
  ({ showContent }, ref) => {
    const [videoError, setVideoError] = useState(false);

    useEffect(() => {
      const timer = setTimeout(() => {
        setVideoError(true);
      }, 3000);
      return () => clearTimeout(timer);
    }, []);

    return (
      <div
        ref={ref}
        className="relative flex flex-col items-center justify-start z-10 px-4 pt-4"
      >
        {/* Video OR fallback logo */}
        {!videoError ? (
          <video
            className="w-full max-h-[200px] object-contain mb-2"
            autoPlay
            muted
            playsInline
            preload="auto"
            onError={() => setVideoError(true)}
            onLoadedData={() => setVideoError(false)}
          >
            <source src="/home-bg.mp4" type="video/mp4" />
          </video>
        ) : (
          <img
            src="/images/tsd-logo.png"
            alt="Logo"
            className="w-2/3 sm:w-1/2 h-auto object-contain mb-2"
          />
        )}

        {/* Text with sequential pop + scale animation */}
        <div className="text-center">
          {/* Heading */}
          <h1
            className={`text-lg sm:text-xl font-garamond font-bold mb-2 drop-shadow-lg text-[#02066f] transform transition-all duration-700 ${
              showContent
                ? "opacity-100 translate-y-0 scale-100"
                : "opacity-0 translate-y-6 scale-90"
            }`}
            style={{ transitionDelay: "0ms" }}
          >
            Your Student Life, Simplified.
          </h1>

          {/* Paragraph 1 */}
          <p
            className={`max-w-md mx-auto text-xs sm:text-base text-tsd-orange drop-shadow transform transition-all duration-700 ${
              showContent
                ? "opacity-100 translate-y-0 scale-100"
                : "opacity-0 translate-y-6 scale-90"
            }`}
            style={{ transitionDelay: "600ms" }}
          >
            All-in-one platform for students in the UAE.
          </p>

          {/* Paragraph 2 */}
          <p
            className={`max-w-md mx-auto text-xs sm:text-base text-[#02066f] drop-shadow transform transition-all duration-700 ${
              showContent
                ? "opacity-100 translate-y-0 scale-100"
                : "opacity-0 translate-y-6 scale-90"
            }`}
            style={{ transitionDelay: "900ms" }}
          >
            From finding accommodation to exploring career opportunities, staying informed,
            and making the most of your journey.
          </p>
        </div>
      </div>
    );
  }
);

// ==================== Desktop Hero ====================
interface DesktopHeroProps {
  heroVideoRef: React.RefObject<HTMLVideoElement>;
  overlayClass: string;
  showContent: boolean;
  heroOffsetY: number;
}

const DesktopHeroContent: React.FC<DesktopHeroProps> = ({
  heroVideoRef,
  overlayClass,
  showContent,
  heroOffsetY,
}) => (
  <>
    <video
      ref={heroVideoRef}
      className="absolute max-w-5xl max-h-[50vh] w-full h-auto object-contain justify-center top-24 left-1/2 transform -translate-x-1/2"
      autoPlay
      muted
      playsInline
      preload="auto"
      poster="/home-bg.jpg"
    >
      <source src="/home-bg.mp4" type="video/mp4" />
    </video>

    <div className={`absolute inset-0 z-20 ${overlayClass} pointer-events-none`} />

    <div
      className={`relative z-30 flex flex-col items-center justify-end mt-6 h-full text-center px-4 pb-12 sm:pb-16`}
      style={{ transform: `translateY(${heroOffsetY}px)` }}
    >
      {/* Heading */}
      <h1
        className={`text-xl sm:text-2xl md:text-3xl font-garamond font-bold mt-10  drop-shadow-lg text-[#02066f] transform transition-all duration-700 ${
          showContent
            ? "opacity-100 translate-y-0 scale-100"
            : "opacity-0 translate-y-6 scale-90"
        }`}
        style={{ transitionDelay: "0ms" }}
      >
        Your Student Life, Simplified
      </h1>

      {/* Paragraph 1 */}
      <p
        className={`max-w-2xl sm:max-w-2xl text-xs sm:text-base md:text-lg mt-2 mb-3 text-tsd-orange drop-shadow transform transition-all duration-700 ${
          showContent
            ? "opacity-100 translate-y-0 scale-100"
            : "opacity-0 translate-y-6 scale-90"
        }`}
        style={{ transitionDelay: "600ms" }}
      >
        All-in-one platform for students in the UAE.
      </p>

      {/* Paragraph 2 */}
      <p
        className={`max-w-2xl sm:max-w-2xl text-xs sm:text-base md:text-base text-[#02066f] drop-shadow transform transition-all duration-700 ${
          showContent
            ? "opacity-100 translate-y-0 scale-100"
            : "opacity-0 translate-y-6 scale-90"
        }`}
        style={{ transitionDelay: "900ms" }}
      >
        From finding accommodation to exploring career opportunities, staying informed,
        and making the most of your journey.
      </p>
    </div>
  </>
);
