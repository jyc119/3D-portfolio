import { BrowserRouter, Routes, Route } from "react-router-dom";
import {
  About,
  Contact,
  Experience,
  Feedbacks,
  Hero,
  Navbar,
  Tech,
  Works,
  StarsCanvas,
  SunAnimation,
} from "./components";

const App = () => {
  return (
    <BrowserRouter>
      <div className="relative z-0 bg-primary">
        {/* Navbar is typically common to all pages, so it can remain outside the Routes */}
        <Navbar />

        <Routes>
          <Route
            path="/"
            element={
              <div>
                <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
                  <Hero />
                </div>
                <About /> {/* About component is placed right below Hero */}
              </div>
            }
          />
          <Route
            path="/works"
            element={
              <div>
                <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
                  <Works />
                </div>
                <Tech /> {/* About component is placed right below Hero */}
              </div>
            }
          />
          <Route path="/experience" element={<Experience />} />
          <Route path="/feedbacks" element={<Feedbacks />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>

        {/* StarsCanvas can be placed here if you want it to appear on all pages */}
        <StarsCanvas />
      </div>
    </BrowserRouter>
  );
};

export default App;
