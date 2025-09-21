import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import VideoSection from "@/components/VideoSection"; // 1. Import the new component
import StatsSection from "@/components/StatsSection";
import WhyChooseUs from "@/components/WhyChooseUs";

export default function HomePage() {
  return (
    <main className="bg-black min-h-screen text-white">
      <Navbar />
      <Hero />
      <StatsSection />
      <VideoSection />
      <WhyChooseUs />
    </main>
  );
}
