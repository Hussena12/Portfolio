import NavBar from "./components/navBar/navBar.js";
import Hero from "./components/hero/hero.js";
import Projects from "./components/projects/projects.js";
import Footer from "./components/footer/footer.js";
import Contact from "./components/contact/contact.js";
import Skills from "./components/skills/skills.js";
import { ThemeProvider } from "./theme.js";

function App() {
  return (
    <ThemeProvider>
      <div>
        <NavBar />
        <Hero />
        <Projects />
        <Skills />
        <Contact />
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;
