import About from "../components/About";
import Hero from "../components/Hero";
import NavBar from "../components/Navbar";
import Features from "../components/Features";
import Projects from "../components/Projects";
import Story from "../components/Story";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

const page = () => {
  return (
    <main className="relative min-h-screen w-screen overflow-x-hidden">
      <NavBar />
      <Hero />
      <About />
      <Features />
      <Projects />
      <Story />
      <Contact />
      <Footer />
    </main>
  )
}

export default page