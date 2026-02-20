"use client";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import { Gravitas_One } from "next/font/google";
import data from "../data/data.json";
import { useState, useEffect, useRef } from "react";
import { useTheme } from "@/context/ThemeContext";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const gravitasOne = Gravitas_One({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
  variable: "--font-gravitas",
});

type Flavor = (typeof data)[0];

function Hero() {
  const { setBackgroundColor } = useTheme();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [currentFlavor, setCurrentFlavor] = useState<Flavor>(data[0]);
  const textRef = useRef<HTMLHeadingElement | null>(null);
  const imagesRef = useRef<(HTMLDivElement | null)[]>([]);
  const lastDirectionRef = useRef<"next" | "prev">("next");
  const blobRef = useRef<HTMLDivElement | null>(null);

  const getImagePath = (path: string) => path.replace("public", "");

  const changeFlavor = (dir: "next" | "prev") => {
    lastDirectionRef.current = dir;
    setCurrentIndex((prev) =>
      dir === "next"
        ? (prev + 1) % data.length
        : (prev - 1 + data.length) % data.length
    );
  };

  useEffect(() => {
    setCurrentFlavor(data[currentIndex]);
    setBackgroundColor(data[currentIndex].backgroundColor);

    const dir = lastDirectionRef.current;
    const sw = window.innerWidth * 0.8;
    const fromX = dir === "next" ? sw : -sw;

    if (textRef.current) {
      gsap.fromTo(
        textRef.current,
        { x: fromX, opacity: 0 },
        { x: 0, opacity: 1, duration: 0.6, ease: "power3.out" }
      );
    }

    imagesRef.current.forEach((el, i) => {
      if (!el) return;
      gsap.fromTo(
        el,
        { y: 80, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          delay: i * 0.1,
          ease: "power3.out",
        }
      );
    });
  }, [currentIndex, setBackgroundColor]);

  useEffect(() => {
    ScrollTrigger.matchMedia({
      "(min-width: 991px)": function () {
        gsap.to("#can", {
          scrollTrigger: {
            trigger: "#section1",
            start: "top 10%",
            end: "bottom 20%",
            scrub: true,
          },
          y: "95vh",
          x: "-25vw",
          scale: 0.8,
          ease: "power1.inOut",
        });
      },
    });

    return () => {
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, []);

  useEffect(() => {
    if (blobRef.current) {
      gsap.to(blobRef.current, {
        rotation: 360,
        duration: 20,
        repeat: -1,
        ease: "none",
      });
    }
  }, []);

  return (
    <>
      <main
        id="section1"
        className="relative h-[90vh] flex items-center justify-center transition-colors duration-1000 z-20"
        style={{ backgroundColor: currentFlavor.backgroundColor }}
      >
        <div className="w-full max-w-[80%] mx-auto px-4">
          <div className="absolute inset-0 flex items-center justify-center overflow-hidden">
            <h1
              ref={textRef}
              className={`whitespace-nowrap text-[60px] sm:text-[80px] md:text-[120px] lg:text-[150px] xl:text-[160px] font-bold text-white/20 pointer-events-none select-none w-full text-center ${gravitasOne.className} leading-[0.8]`}
            >
              {currentFlavor.flavor}
            </h1>
          </div>

          <div className="container mx-auto px-4 z-10 w-full h-full">
            <div className="grid grid-cols-1 md:grid-cols-5 gap-8 items-center h-full">

              <div className="md:col-span-1 flex flex-col gap-8">
                {[0, 1].map((i) => (
                  <div
                    key={i}
                    ref={(el) => { imagesRef.current[i] = el; }}
                  >
                    <Image
                      src={getImagePath(currentFlavor.images[i])}
                      alt={currentFlavor.flavor}
                      width={300}
                      height={300}
                      className="w-full aspect-square object-cover rounded-full"
                    />
                  </div>
                ))}
              </div>

              <div className="md:col-span-3 relative z-20 flex justify-center items-center">
                <Image
                  src={getImagePath(currentFlavor.Can)}
                  alt={`${currentFlavor.flavor} drink`}
                  width={500}
                  height={800}
                  id="can"
                  className="object-contain relative z-100"
                  priority
                />
              </div>

              <div className="md:col-span-1 flex flex-col gap-8">
                {[2, 3].map((i, index) => (
                  <div
                    key={i}
                    ref={(el) => { imagesRef.current[index + 2] = el; }}
                  >
                    <Image
                      src={getImagePath(currentFlavor.images[i])}
                      alt={currentFlavor.flavor}
                      width={300}
                      height={300}
                      className="w-full aspect-square object-cover rounded-full"
                    />
                  </div>
                ))}
              </div>

            </div>
          </div>
        </div>

        <div className="absolute bottom-8 left-0 right-0 z-50 flex items-center justify-center gap-6">
          <button
            onClick={() => changeFlavor("prev")}
            className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center"
          >
            <ChevronLeft className="text-white w-6 h-6" />
          </button>

          <button className="px-8 py-3 bg-white text-gray-900 rounded-full font-bold">
            Shop Now
          </button>

          <button
            onClick={() => changeFlavor("next")}
            className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center"
          >
            <ChevronRight className="text-white w-6 h-6" />
          </button>
        </div>
      </main>

      <section className="relative h-[80vh] bg-white py-20 px-6 flex items-center justify-center isolate">
        <div
          ref={blobRef}
          className="absolute left-25 md:left-30 top-1/2 -translate-y-1/2 -z-10 pointer-events-none"
          style={{
            width: "330px",
            height: "420px",
            backgroundColor: currentFlavor.backgroundColor,
            borderRadius: "85% 15% 89% 11% / 51% 46% 54% 49%",
            filter: "blur(15px)",
          }}
        />
        <div className="w-full max-w-6xl flex items-center justify-between gap-24">
          <div className="shrink-0 w-1/3 h-80 relative" />
          <div className="flex-1">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 "
              style={{ color: currentFlavor.backgroundColor }}>
              About Best Egyptian Juice
            </h2>

            <p className="text-lg leading-relaxed text-black mb-6">
              Best Egyptian Juice is a premium beverage brand dedicated to delivering a truly refreshing
              and elevated juice experience. Every bottle is crafted to capture the vibrant spirit of
              Egypt’s rich agricultural heritage while embracing modern standards of quality and taste.
            </p>

            <p className="text-lg leading-relaxed text-black mb-6">
              We carefully select high-quality fruits sourced from trusted farms, ensuring that every
              ingredient meets strict freshness and purity standards. Our production process preserves
              natural flavors, essential nutrients, and the authentic sweetness that makes every sip
              memorable and satisfying.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}

export default Hero;