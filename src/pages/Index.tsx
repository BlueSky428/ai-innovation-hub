import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Experience from "@/components/Experience";
import Education from "@/components/Education";
import Achievements from "@/components/Achievements";
import Competencies from "@/components/Competencies";
import TriviaAndReference from "@/components/TriviaAndReference";
import Contact from "@/components/Contact";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <Experience />
      <Education />
      <Achievements />
      <Competencies />
      <TriviaAndReference />
      <Contact />
    </div>
  );
};

export default Index;
