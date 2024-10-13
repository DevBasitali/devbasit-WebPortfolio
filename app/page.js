import'../styles/global.css';
import HomePage from "@/pages/HomePage"
import About from "@/pages/About";
import Services from "@/pages/Services";
import Skill from "@/pages/Skill";
import Projects from "@/pages/Projects";
import Testimonal from "@/pages/Testimonal";
import Contact from '@/pages/Contact';



export default function Home() {
  return (
    <div className="">
      <HomePage/>
      <About />
      <Services />
      <Skill />
      <Projects/>
      <Testimonal/>
      <Contact/>
    </div>
  );
}
