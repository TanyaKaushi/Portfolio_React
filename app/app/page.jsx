import Navbar     from '../components/Navbar/Navbar';
import Hero        from '../components/Hero/Hero';
import Stats       from '../components/Stats/Stats';
import About       from '../components/About/About';
import Skills      from '../components/Skills/Skills';
import Experience  from '../components/Experience/Experience';
import Projects    from '../components/Projects/Projects';
import Blogs       from '../components/Blogs/Blogs';
import Education   from '../components/Education/Education';
import Contact     from '../components/Contact/Contact';
import Footer      from '../components/Footer/Footer';

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Stats />
        <About />
        <Education />
        <Skills />
        <Experience />
        <Projects />
        <Blogs />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
