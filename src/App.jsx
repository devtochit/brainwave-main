import ButtonGradient from "./assets/svg/ButtonGradient";
import Benefits from "./components/Benefits";
import Collaboration from "./components/Collaboration";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";

import Services from "./components/Services";
import ProblemNDSolutions from "./components/P&S";
import ShapeTheFuture from "./components/shapeTheFuture";
import Roadmap from "./components/Roadmap";
const App = () => {
  return (
    <>
      <div className="pt-[4.75rem] lg:pt-[5.25rem] overflow-hidden">
        <Header />
        <Hero />
        {/* <Benefits /> */}
        <Collaboration />
        <ProblemNDSolutions />
        <ShapeTheFuture />
        <Roadmap />
        <Footer />
      </div>

      <ButtonGradient />
    </>
  );
};

export default App;
