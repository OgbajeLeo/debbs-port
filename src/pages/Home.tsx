import About from "../components/About";
import Hero from "../components/Hero"
import Navbar from "../components/Navbar"
import ProjectsSection from "../components/PojectSection";

const Home = () => {
  return (
    <div className="no-scrollbar">
      <Navbar />
      <Hero />
      <About />
      <ProjectsSection />
    </div>
  );
}

export default Home