import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";

export default function HomePage() {
  return (
    <main className="bg-customgray min-h-screen">
      <Navbar />
      <Hero />
      {/* You can add the rest of your page content here */}
    </main>
  );
}
