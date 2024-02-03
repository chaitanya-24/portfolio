import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Work from "./components/Work";
import Education from "./components/Education";
import Contact from "./components/Contact";
import Projects from "./components/Projects";
import Footer from "./components/Footer";
import Experience from "./components/Experience";

function Home() {
  return (
    <>
      <Navbar />
      <Header />
      <Work />
      <Education />
      <Experience />
      <Projects />
      <Contact />
      <Footer />
    </>
  );
}

export default Home;
