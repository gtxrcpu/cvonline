// app/page.tsx
import About from "../components/About";
import Skills from "../components/Skills";
import Services from "../components/Services";
import Portfolios from "../components/Portfolios";
import Contact from "../components/Contact";

// app/page.tsx
export default function Home() {
  return (
    <div className="flex flex-col min-h-screen font-sans bg-gray-100">
      <header className="bg-gray-800 text-white p-6">
        <h1 className="text-3xl text-center">My Online CV</h1>
      </header>

      <main className="flex-grow">
        <About />
        <Skills />
        <Services />
        <Portfolios />
        <Contact />
      </main>

      <footer className="bg-gray-800 text-white p-4 text-center">
        <p>&copy; {new Date().getFullYear()} My Name. All rights reserved.</p>
      </footer>
    </div>
  );
}
