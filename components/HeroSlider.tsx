"use client";

import { useState, useEffect, useCallback } from "react";
import { ChevronLeft, ChevronRight, Circle } from "lucide-react";
import { heroSlides, HeroSlide } from "@/lib/data";

interface HeroSliderProps {
  slides?: HeroSlide[];
  autoPlay?: boolean;
  autoPlayInterval?: number;
}

export default function HeroSlider({
  slides = heroSlides,
  autoPlay = true,
  autoPlayInterval = 5000
}: HeroSliderProps) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(autoPlay);
  const [isTransitioning, setIsTransitioning] = useState(false);

  // Auto-play functionality
  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      nextSlide();
    }, autoPlayInterval);

    return () => clearInterval(interval);
  }, [currentSlide, isAutoPlaying, autoPlayInterval]);

  const nextSlide = useCallback(() => {
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
      setIsTransitioning(false);
    }, 300);
  }, [slides.length]);

  const prevSlide = useCallback(() => {
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
      setIsTransitioning(false);
    }, 300);
  }, [slides.length]);

  const goToSlide = useCallback((index: number) => {
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentSlide(index);
      setIsTransitioning(false);
    }, 300);
  }, []);

  const toggleAutoPlay = () => {
    setIsAutoPlaying((prev) => !prev);
  };

  return (
    <section className="relative w-full h-screen overflow-hidden">
      {/* Slides Container */}
      <div className="absolute inset-0 w-full h-full">
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`absolute inset-0 w-full h-full transition-all duration-700 ease-in-out transform ${
              index === currentSlide
                ? "scale-100 opacity-100"
                : "scale-105 opacity-0"
            } ${isTransitioning ? "transition-all duration-700" : ""}`}
            style={{
              backgroundImage: `linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.6)), url(${slide.image})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
            }}
            role="img"
            aria-label={slide.title}
          />
        ))}
      </div>

      {/* Content Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/20 via-black/10 to-black/30" />

      {/* Slide Content */}
      <div className="absolute inset-0 flex items-center justify-center px-4 md:px-8 lg:px-16 max-w-7xl mx-auto">
        <div className="text-center text-white max-w-4xl mx-auto transform translate-y-8 md:translate-y-0 transition-all duration-700">
          {/* Category Badge */}
          <div className="inline-flex items-center px-4 py-2 mb-6 bg-white/20 backdrop-blur-sm rounded-full border border-white/30">
            <span className="text-sm font-medium text-white/90">
              {slides[currentSlide].category}
            </span>
          </div>

          {/* Title */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight drop-shadow-2xl">
            {slides[currentSlide].title}
          </h1>

          {/* Description */}
          <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto leading-relaxed opacity-95 drop-shadow-lg">
            {slides[currentSlide].description}
          </p>

          {/* CTA Button */}
          <a
            href={slides[currentSlide].ctaLink}
            className="inline-flex items-center px-8 py-4 bg-white text-gray-900 font-semibold text-lg rounded-full hover:bg-gray-100 hover:scale-105 hover:shadow-2xl transition-all duration-300 transform focus:outline-none focus:ring-4 focus:ring-white/50 group"
            aria-label={`View ${slides[currentSlide].title}`}
          >
            {slides[currentSlide].ctaText}
            <ChevronRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
          </a>
        </div>
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-6 md:left-12 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/40 backdrop-blur-sm p-3 rounded-full border border-white/30 transition-all duration-300 hover:scale-110 focus:outline-none focus:ring-4 focus:ring-white/50 group"
        aria-label="Previous slide"
      >
        <ChevronLeft className="w-6 h-6 text-white group-hover:text-gray-900 transition-colors" />
      </button>

      <button
        onClick={nextSlide}
        className="absolute right-6 md:right-12 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/40 backdrop-blur-sm p-3 rounded-full border border-white/30 transition-all duration-300 hover:scale-110 focus:outline-none focus:ring-4 focus:ring-white/50 group"
        aria-label="Next slide"
      >
        <ChevronRight className="w-6 h-6 text-white group-hover:text-gray-900 transition-colors" />
      </button>

      {/* Slide Indicators */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex space-x-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentSlide
                ? "w-10 bg-white scale-110"
                : "bg-white/50 hover:bg-white/75"
            } focus:outline-none focus:ring-2 focus:ring-white/75`}
            aria-label={`Go to slide ${index + 1}`}
            aria-pressed={index === currentSlide}
          />
        ))}
      </div>

      {/* Auto-play Toggle (Optional) */}
      <button
        onClick={toggleAutoPlay}
        className="absolute top-8 right-8 bg-white/20 hover:bg-white/40 backdrop-blur-sm p-3 rounded-full border border-white/30 transition-all duration-300 hover:scale-110 focus:outline-none focus:ring-4 focus:ring-white/50"
        aria-label={isAutoPlaying ? "Pause autoplay" : "Start autoplay"}
      >
        <Circle className={`w-6 h-6 text-white transition-all duration-300 ${isAutoPlaying ? "animate-ping" : ""}`} />
      </button>
    </section>
  );
}