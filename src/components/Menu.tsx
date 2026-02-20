"use client";
import { useEffect, useRef } from "react";
import Image from "next/image";
import data from "../data/data.json";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Menu() {
  const containerRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

  const getImagePath = (path: string) => path.replace("public", "");

  useEffect(() => {
    const ctx = gsap.context(() => {
      const cardsContainer = cardsRef.current;
      if (!cardsContainer || !containerRef.current) return;

      const totalScroll = cardsContainer.scrollWidth - window.innerWidth;

      gsap.to(cardsContainer, {
        x: -totalScroll,
        ease: "none",
        scrollTrigger: {
          trigger: containerRef.current,
          pin: true,
          scrub: 1,
          end: () => "+=" + totalScroll,
          invalidateOnRefresh: true,
        },
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="products"
      ref={containerRef}
      className="relative w-full min-h-screen overflow-hidden flex flex-col justify-center py-12 bg-gray-200"
    >
      <div className="container mx-auto px-4 mb-8 md:mb-16 text-center z-10">
        <h2 className="text-4xl md:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-black to-gray-400 mb-4 drop-shadow-sm">
          Discover Our Flavors
        </h2>
        <p className="text-black text-lg md:text-xl max-w-2xl mx-auto font-light">
          Explore our refreshing collection of natural tastes.
        </p>
      </div>

      <div
        ref={cardsRef}
        className="flex flex-nowrap items-center px-4 md:px-10 w-max"
      >
        {data.map((product, idx) => (
          <div
            key={idx}
            className="card shrink-0 w-[88vw] md:w-[60vw] lg:w-[40vw] h-[60vh] md:h-[65vh] mx-4 md:mx-6 rounded-[2rem] shadow-2xl relative flex flex-col md:flex-row items-center justify-center p-6 md:p-10 transition-all duration-500 hover:shadow-[0_20px_60px_-15px_rgba(0,0,0,0.5)] border border-white/10 group"
            style={{
              background: `linear-gradient(145deg, ${product.backgroundColor}, ${product.bgCard})`,
            }}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent rounded-[2rem] pointer-events-none" />

            <div className="relative w-48 h-48 md:w-72 md:h-72 shrink-0 z-20 transform transition-transform duration-500 group-hover:scale-105 group-hover:-rotate-1 drop-shadow-2xl">
              <Image
                src={getImagePath(product.Can)}
                alt={product.flavor}
                fill
                className="object-contain filter drop-shadow-[0_10px_20px_rgba(0,0,0,0.3)]"
                priority={idx < 2}
              />
            </div>

            <div className="flex-1 flex flex-col justify-center text-white z-20 mt-8 md:mt-0 md:ml-10 text-center md:text-left">
              <h2 className="text-2xl md:text-4xl font-black mb-3 md:mb-5 tracking-wide drop-shadow-md">
                {product.flavor}
              </h2>
              <p className="text-white/90 text-sm md:text-lg leading-relaxed font-medium mb-6 md:mb-8 max-w-md">
                {product.description}
              </p>
              <div className="flex justify-center md:justify-start">
                <button className="px-8 py-3 bg-white text-gray-900 rounded-full font-bold shadow-lg hover:bg-gray-100 transform hover:-translate-y-1 transition-all duration-300">
                  View Details
                </button>
              </div>
            </div>

            <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-white/10 rounded-full blur-3xl z-0" />
          </div>
        ))}
      </div>
    </section>
  );
}
