import React from "react";
import ReactDOM from "react-dom/client";
import { NavBar } from "@/components/NavBar";
import { Home } from "@/components/Home";
import { Skills } from "@/components/Skills";
import { Projetos } from "@/components/Projetos";
import { ContactForm } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import ParticlesComponent from "@/components/Particles";
import './styles/Global.css';
import './styles/Buttons.css';


ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ParticlesComponent id='particles' />
    <NavBar />
    <Home />
    <Skills />
    <Projetos />
    <ContactForm />
    <Footer />
  </React.StrictMode>
);