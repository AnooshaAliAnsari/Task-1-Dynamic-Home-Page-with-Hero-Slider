// lib/data.ts
export interface HeroSlide {
  id: number;
  title: string;
  description: string;
  image: string;
  ctaText: string;
  ctaLink: string;
  category: string;
}

export const heroSlides: HeroSlide[] = [
  {
    id: 1,
    title: "AI Project Demo",
    description: "Revolutionary AI-powered web application with real-time data processing and machine learning integration.",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
    ctaText: "View Project",
    ctaLink: "/projects/ai-demo",
    category: "AI & Machine Learning"
  },
  {
    id: 2,
    title: "Web Development Services",
    description: "Custom, responsive websites built with Next.js, React, and modern web technologies.",
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
    ctaText: "Learn More",
    ctaLink: "/services/web-development",
    category: "Web Development"
  },
  {
    id: 3,
    title: "Mobile App Design",
    description: "Beautiful, intuitive mobile applications for iOS and Android with React Native.",
    image: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?ixlib=rb-4.0.3&auto=format&fit=crop&w=2071&q=80",
    ctaText: "See Portfolio",
    ctaLink: "/portfolio/mobile",
    category: "Mobile Development"
  },
  {
    id: 4,
    title: "E-commerce Platform",
    description: "Scalable online stores with Next.js Commerce, Stripe integration, and SEO optimization.",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
    ctaText: "View Demo",
    ctaLink: "/projects/ecommerce",
    category: "E-commerce"
  }
];