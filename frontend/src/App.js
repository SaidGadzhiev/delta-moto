import "@/App.css";
import { Toaster } from "sonner";
import useLenis from "@/hooks/useLenis";
import { Navbar } from "@/components/site/Navbar";
import { Hero } from "@/components/site/Hero";
import { Marquee } from "@/components/site/Marquee";
import { Mission } from "@/components/site/Mission";
import { Experience } from "@/components/site/Experience";
import { DeltaWay } from "@/components/site/DeltaWay";
import { Contact } from "@/components/site/Contact";

function App() {
  useLenis();
  return (
    <div className="App">
      <Navbar />
      <main>
        <Hero />
        <Marquee />
        <Mission />
        <Experience />
        <DeltaWay />
        <Contact />
      </main>
      <Toaster
        theme="dark"
        position="bottom-right"
        toastOptions={{
          style: {
            background: "#1C1C1C",
            border: "1px solid #C9A227",
            color: "#fff",
          },
        }}
      />
    </div>
  );
}

export default App;
