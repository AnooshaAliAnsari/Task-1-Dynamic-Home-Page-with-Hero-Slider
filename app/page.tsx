import HeroSlider from "@/components/HeroSlider";

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <HeroSlider />
      
      {/* Additional sections can go here */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16 text-gray-900">
            Welcome to My Portfolio
          </h2>
          <p className="text-xl text-center text-gray-600 max-w-3xl mx-auto">
            This is a fully responsive hero slider built with Next.js 14, TypeScript, 
            and Tailwind CSS. 
          </p>
        </div>
      </section>
    </main>
  );
}