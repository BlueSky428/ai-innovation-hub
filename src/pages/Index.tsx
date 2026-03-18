import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Experience from "@/components/Experience";
import Achievements from "@/components/Achievements";
import Competencies from "@/components/Competencies";
import Education from "@/components/Education";
import Contact from "@/components/Contact";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <Experience />
      <Achievements />
      <Competencies />
      <Education />
      <Contact />
    </div>
  );
};

export default Index;
