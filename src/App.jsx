import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router";
import AppProvider  from "./Context/AppProvider";
import Navbar from "./Components/Navbar";
import Home from "./Pages/Home";
import Patients from "./Pages/Patients";
import About from "./Pages/About";
import Footer from "./Components/Footer";

function App() {
  return (
    <AppProvider>
      <Router>
        <div className="bg-pale dark:bg-primary min-h-screen flex flex-col">
          <Navbar />
          <main className="flex-1">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/patients" element={<Patients />} />
              <Route path="/about" element={<About />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </AppProvider>
  );
}

export default App;
