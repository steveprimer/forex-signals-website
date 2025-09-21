import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";

export default function HomePage() {
  return (
    <main className="bg-customgray min-h-screen">
      <Navbar />
      <Hero />
      <Services />
      {/* You can add the rest of your page content here */}
    </main>
  );
}
