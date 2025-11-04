import React from "react";
import Navbar from "./Components/Navbar";
import Profile from "./Components/Profile";
import Tech from "./Components/Tech";
import Expe from './Components/Expe';
import Project from "./Components/Project";
import Contact from "./Components/Contact";
import Footer from './Components/Footer';

export default function App() {
  return (
    <div>
      <Navbar />
      <div class="absolute inset-0 -z-10 h-full w-full [background:radial-gradient(130%_130%_at_50%_20%,#12002b_40%,#8b5cf6_100%)]"></div>
      <Profile />
      <Tech/>
      <Expe/>
      <Project/>
      <Contact/>
      <Footer/>
    </div>
  );
}
