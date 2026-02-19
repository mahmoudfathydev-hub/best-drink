"use client";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import { Gravitas_One } from "next/font/google";
import data from "../data/data.json";
import { useState, useEffect, useRef } from "react";
import { useTheme } from "@/context/ThemeContext";
import { useProductImage } from "@/context/ProductImageContext";
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
  const { productImageRef, aboutContainerRef, menuContainerRef } = useProductImage();
  const { backgroundColor, setBackgroundColor } = useTheme();
  const heroRef = useRef<HTMLElement | null>(null);
  const buttonsRef = useRef<HTMLDivElement | null>(null);
  const blobRef = useRef<HTMLDivElement | null>(null);
  const contentWrapperRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!productImageRef.current || !aboutContainerRef.current || !contentWrapperRef.current || !menuContainerRef.current) return;

    const productImg = productImageRef.current;
    const blob = blobRef.current;
    const contentWrapper = contentWrapperRef.current;
    const menuSection = menuContainerRef.current;

    const ctx = gsap.context(() => {
      ScrollTrigger.getAll().forEach(t => t.kill());

      const aboutPlaceholder = contentWrapper?.firstElementChild as HTMLElement;
      if (!aboutPlaceholder || !productImg || !contentWrapper) return;

      // Master Timeline for all sections
      const masterTL = gsap.timeline({
        scrollTrigger: {
          trigger: aboutContainerRef.current,
          start: "top bottom",
          end: "bottom center", // Stop moving further down once it hits the middle of About
          scrub: 1.5,
          onEnter: () => {
            gsap.set(productImg, { position: "fixed", zIndex: 100, opacity: 1 });
          },
          onLeave: () => {
            // Permanently "land" it here so it doesn't follow to Menu
            gsap.set(productImg, {
              position: "absolute",
              top: aboutPlaceholder.offsetTop + 40,
              left: aboutPlaceholder.offsetLeft - 280,
              width: aboutPlaceholder.offsetWidth * 1.2,
              height: "auto",
              zIndex: 100
            });
          },
          onEnterBack: () => {
            gsap.set(productImg, { position: "fixed", zIndex: 100 });
          },
          onLeaveBack: () => {
            gsap.set(productImg, { position: "static", zIndex: "auto", width: "auto" });
          }
        }
      });

      const startRect = productImg.getBoundingClientRect();

      // Phase 1: Hero -> About
      masterTL.fromTo(productImg,
        {
          top: startRect.top,
          left: startRect.left,
          width: startRect.width,
          height: startRect.height,
          position: "fixed",
        },
        {
          top: 80,
          left: () => {
            const wrapper = contentWrapperRef.current;
            if (!wrapper) return 0;
            return wrapper.offsetLeft + aboutPlaceholder.offsetLeft - 280;
          },
          width: aboutPlaceholder.offsetWidth * 1.2,
          duration: 1,
          ease: "power1.inOut"
        }
      );

      // Phase 2: Stay fixed in About and fade in blob
      masterTL.to(productImg, {
        duration: 0.5,
        onStart: () => { if (blob) gsap.to(blob, { opacity: 1 }); },
        onReverseComplete: () => { if (blob) gsap.to(blob, { opacity: 0 }); }
      });

    });
    return () => ctx.revert();
  }, [productImageRef, aboutContainerRef, menuContainerRef]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [currentFlavor, setCurrentFlavor] = useState<Flavor>(data[0]);
  const textRef = useRef<HTMLHeadingElement | null>(null);
  const imagesRef = useRef<Array<HTMLDivElement | null>>([]);
  const lastDirectionRef = useRef<'next' | 'prev'>('next');
  const getImagePath = (path: string) => path.replace("public", "");
  const changeFlavor = (dir: 'next' | 'prev') => {
    lastDirectionRef.current = dir;
    const shift = (typeof window !== 'undefined' ? window.innerWidth * 0.8 : 800) * (dir === 'next' ? -1 : 1);
    const imgs = imagesRef.current.filter(Boolean) as HTMLElement[];
    const tl = gsap.timeline({ defaults: { ease: 'power2.in' } });
    if (textRef.current) tl.to(textRef.current, { x: shift, opacity: 0, duration: 0.45 });
    if (imgs.length) tl.to(imgs, { y: 40, opacity: 0, stagger: 0.12, duration: 0.35 }, '-=0.25');
    tl.call(() => {
      setCurrentIndex(prev =>
        dir === 'next' ? (prev + 1) % data.length : (prev - 1 + data.length) % data.length
      );
    });
  };
  useEffect(() => {
    setCurrentFlavor(data[currentIndex]);
    setBackgroundColor(data[currentIndex].backgroundColor);
    const dir = lastDirectionRef.current;
    const sw = typeof window !== 'undefined' ? window.innerWidth * 0.8 : 800;
    const fromX = dir === 'next' ? sw : -sw;
    if (textRef.current) {
      gsap.fromTo(textRef.current, { x: fromX, opacity: 0 }, { x: 0, opacity: 1, duration: 0.6, ease: 'power3.out' });
    }
    const imgs = imagesRef.current.filter(Boolean) as HTMLElement[];
    if (imgs.length) {
      gsap.fromTo(imgs, { y: 50, opacity: 0 }, { y: 0, opacity: 1, stagger: 0.15, duration: 0.6, ease: 'power3.out', delay: 1 });
    }
    if (buttonsRef.current) {
      gsap.fromTo(buttonsRef.current, { y: 20, opacity: 0 }, { y: 0, opacity: 1, duration: 0.6, ease: 'power3.out', delay: 1.5 });
    }
  }, [currentIndex, setBackgroundColor]);
  return (
    <>
      <main
        ref={heroRef}
        className="relative h-[90vh] flex items-center justify-center overflow-hidden transition-colors duration-1000"
        style={{
          backgroundColor: currentFlavor.backgroundColor,
        }}
      >
        <div className="w-full max-w-[80%] mx-auto px-4">
          <div className="absolute inset-0 flex items-center justify-center overflow-hidden">
            <h1
              ref={(el) => {
                textRef.current = el;
              }}
              className={`whitespace-nowrap text-[60px] xs:text-[60px] sm:text-[80px] md:text-[120px] lg:text-[150px] xl:text-[160px] font-bold text-white/20 pointer-events-none select-none w-full text-center ${gravitasOne.className} leading-[0.8] transition-all duration-1000`}
            >
              {currentFlavor.flavor}
            </h1>
          </div>

          <div className="container mx-auto px-4 z-10 w-full h-full">
            <div className="grid grid-cols-1 md:grid-cols-5 gap-4 items-center h-full">
              <div className="md:col-span-1 flex flex-col gap-4 md:gap-8">
                <div
                  className="w-full"
                  style={{ opacity: 0 }}
                  ref={(el) => {
                    imagesRef.current[0] = el;
                  }}
                >
                  <Image
                    src={getImagePath(currentFlavor.images[0])}
                    alt={currentFlavor.flavor}
                    width={300}
                    height={300}
                    className="w-full h-auto aspect-square object-cover rounded-full"
                  />
                </div>
                <div
                  className="w-full"
                  style={{ opacity: 0 }}
                  ref={(el) => {
                    imagesRef.current[1] = el;
                  }}
                >
                  <Image
                    src={getImagePath(currentFlavor.images[1])}
                    alt={currentFlavor.flavor}
                    width={300}
                    height={300}
                    className="w-full h-auto aspect-square object-cover rounded-full"
                  />
                </div>
              </div>
              <div className="md:col-span-3 relative z-20 mt-8 md:mt-0">
                <div className="relative h-full flex flex-col items-center justify-center gap-4">
                  <div className="mx-auto w-auto relative flex items-center justify-center">
                    <div
                      ref={(el) => {
                        imagesRef.current[2] = el;
                        productImageRef.current = el;
                      }}
                      style={{ opacity: 0 }}
                      className="relative w-auto h-auto z-50 will-change-transform"
                    >
                      <Image
                        src={getImagePath(currentFlavor.Can)}
                        alt={`${currentFlavor.flavor} drink`}
                        width={600}
                        height={900}
                        className="mx-auto w-auto object-contain"
                        priority
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="md:col-span-1 flex flex-col gap-4 md:gap-8 mt-4 md:mt-0">
                <div
                  className="w-full"
                  style={{ opacity: 0 }}
                  ref={(el) => {
                    imagesRef.current[3] = el;
                  }}
                >
                  <Image
                    src={getImagePath(currentFlavor.images[2])}
                    alt={currentFlavor.flavor}
                    width={300}
                    height={300}
                    className="w-full h-auto aspect-square object-cover rounded-full"
                  />
                </div>
                <div
                  className="w-full"
                  style={{ opacity: 0 }}
                  ref={(el) => {
                    imagesRef.current[4] = el;
                  }}
                >
                  <Image
                    src={getImagePath(currentFlavor.images[3])}
                    alt={currentFlavor.flavor}
                    width={300}
                    height={300}
                    className="w-full h-auto aspect-square object-cover rounded-full"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div
          ref={buttonsRef}
          style={{ opacity: 0 }}
          className="absolute bottom-8 left-0 right-0 z-50 flex items-center justify-center gap-4 sm:gap-6"
        >
          <button
            onClick={() => changeFlavor("prev")}
            className="w-12 h-12 rounded-full bg-transparent border border-white/20 cursor-pointer flex items-center justify-center hover:bg-white/30 transition-colors active:scale-95"
            aria-label="Previous flavor"
          >
            <ChevronLeft className="text-white w-6 h-6" />
          </button>

          <button
            className="px-8 py-3 bg-white text-gray-900 rounded-full font-bold hover:bg-gray-100 active:scale-95 transition-all cursor-pointer"
            onClick={() => {
              console.log(`Shop now for ${currentFlavor.flavor}`);
            }}
          >
            Shop Now
          </button>

          <button
            onClick={() => changeFlavor("next")}
            className="w-12 h-12 rounded-full bg-transparent border border-white/20 cursor-pointer flex items-center justify-center hover:bg-white/30 transition-colors active:scale-95"
            aria-label="Next flavor"
          >
            <ChevronRight className="text-white w-6 h-6" />
          </button>
        </div>
      </main>
      {/* ABOUT SECTION */}
      <div
        ref={aboutContainerRef}
        className="relative min-h-screen bg-white py-20 px-6 flex items-center justify-center">
        <div
          ref={blobRef}
          className="absolute left-12 md:left-20 top-1/2 -translate-y-1/2 -z-10 pointer-events-none"
          style={{
            width: "300px",
            height: "400px",
            backgroundColor,
            borderRadius: "85% 15% 89% 11% / 51% 46% 54% 49%",
            filter: "blur(15px)",
            opacity: 0,
          }}
        />
        <div
          ref={contentWrapperRef}
          className="w-full max-w-6xl flex items-center justify-between gap-24"
        >
          <div className="shrink-0 w-1/3 h-80" />
          <div className="flex-1">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
              About Best Egyptian Juice
            </h2>
            <p className="text-lg leading-relaxed text-gray-700 mb-6">
              Best Egyptian Juice is a premium beverage brand that delivers a
              refreshing and flavorful experience in every sip. Crafted with
              high-quality ingredients and carefully selected flavors, Best
              combines great taste with consistent quality standards.
            </p>
            <p className="text-lg leading-relaxed text-gray-700">
              Whether you&apos;re enjoying it during a busy day, with friends, or at
              special moments, Best Juice offers the perfect balance of freshness
              and energy. More than just a drink, it represents vitality,
              enjoyment, and authentic Egyptian refreshment.
            </p>
          </div>
        </div>
        <div className="h-150" />
      </div>
    </>
  );
}
export default Hero;
