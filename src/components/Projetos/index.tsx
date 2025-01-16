import React, { useState } from 'react';
import './projetos.css';
import { motion } from 'framer-motion';
import { FaAngular, FaCss3Alt, FaHtml5, FaJs, FaReact, FaVuejs } from 'react-icons/fa';
import { SiTypescript, SiVercel } from 'react-icons/si';
import { FiGithub } from 'react-icons/fi';

export const Projetos = (): JSX.Element => {

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>, url: string) => {
    const userConfirmed = window.confirm("Você está prestes a sair desta página. Deseja continuar?");

    if (!userConfirmed) {
      e.preventDefault();
    }
  };

  const [activeIndex, setActiveIndex] = useState(3);

  const handleImageClick = (index: number) => {
    setActiveIndex(index);
  };

  const images = [
    {
      src: "https://i.imgur.com/eveKDfI.png",
      name: "Anotation",
      job: "Front-End",
      git: "https://github.com/Alonsogio/desafio-tecnico-speedio",
      deploy: "https://desafio-speedio.vercel.app/",
      description: "Application for writing notes.",
      tech: [
        { icon: <FaCss3Alt />, tooltip: "CSS", color: "#254bdd" },
        { icon: <FaJs />, tooltip: "JavaScript", color: "#efd81d" },
        { icon: <FaVuejs />, tooltip: "Vue.js", color: "#3fb27f" },
      ]
    },
    {
      src: "https://i.imgur.com/izoXwgO.png",
      name: "Buguer",
      job: "Front-End",
      git: "https://vercel.com/alonsogios-projects/react-entrega-hamburgueria-da-kenzie-alonsogio/7kLWr17rHDQ4M4M19T5zCzjrSvNA/source",
      deploy: "https://react-entrega-hamburgueria-da-kenzie-alonsogio.vercel.app/",
      description: "Interface of a functional burger joint.",
      tech: [
        { icon: <FaHtml5 />, tooltip: "HTML", color: "#dd4b25" },
        { icon: <FaCss3Alt />, tooltip: "CSS", color: "#254bdd" },
        { icon: <FaReact />, tooltip: "React", color: "#5ed3f3" },
        { icon: <FaJs />, tooltip: "JavaScript", color: "#efd81d" },
      ]
    },
    {
      src: "https://i.imgur.com/EcKkI44.png",
      name: "SweetCake",
      description: "Responsive cake buying and selling web application.",
      job: "FullStack",
      git: "https://github.com/Alonsogio/Sweet_Cake",
      deploy: "https://sweetcake-1328a.web.app/",
      tech: [
        { icon: <FaHtml5 />, tooltip: "HTML", color: "#dd4b25" },
        { icon: <FaCss3Alt />, tooltip: "CSS", color: "#254bdd" },
        { icon: <SiTypescript />, tooltip: "TypeScript", color: "#2f74c0" },
        { icon: <FaAngular />, tooltip: "Angular", color: "#d71a16" },
      ]
    },
    {
      src: "https://i.imgur.com/rS7WYQs.png",
      name: "NuKenzie",
      job: "Front-End",
      git: "https://vercel.com/alonsogios-projects/react-entrega-s1-nu-kenzie-alonsogio/Ak1D8rFLgNh2kFsAkgk5p424ytwv/source",
      deploy: "https://react-entrega-s1-nu-kenzie-alonsogio-5qvc0f9x5-alonsogio.vercel.app/",
      description: "Finance control application.",
      tech: [
        { icon: <FaReact />, tooltip: "React", color: "#5ed3f3" },
        { icon: <FaJs />, tooltip: "JavaScript", color: "#efd81d" },
        { icon: <FaCss3Alt />, tooltip: "CSS", color: "#254bdd" },
      ]
    },
    {
      src: "https://i.imgur.com/DGqbSYV.png",
      name: "KenzieHub",
      job: "Front-End",
      git: "https://vercel.com/alonsogios-projects/react-entrega-kenzie-hub-alonsogio/3ofDDt3MtdaEJuJdMQ4HtnnEph7c/source",
      deploy: "https://react-entrega-kenzie-hub-alonsogio-dawnjdnj6-alonsogio.vercel.app/",
      description: "Application for registering technologies.",
      tech: [
        { icon: <FaReact />, tooltip: "React", color: "#5ed3f3" },
        { icon: <FaCss3Alt />, tooltip: "CSS", color: "#254bdd" },
        { icon: <SiTypescript />, tooltip: "TypeScript", color: "#2f74c0" },
      ]
    }
  ];

  return (
    <div className='container-projects' id='projects'>
      <motion.div
        className="card-container-projetos"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.5 }}
      >
        <div className='divH1'>
          <h1 className="Projetos">Projetos
            <span className="pontoProjeto">.</span>
          </h1>
        </div>
        <section className="slider-container">
          <div className="slider-images">
            {images.map((image, index) => (
              <div
                key={index}
                className={`slider-img ${activeIndex === index ? 'active' : ''}`}
                onClick={() => handleImageClick(index)}
              >
                <img src={image.src} alt={image.name} />
                <h1 className="NameProject">{image.name}</h1>
                <div className="divInfos">
                  <div className="details">
                    <div className='divnamejob'>
                      <h2>{image.name}</h2>
                      <p>({image.job})</p>
                    </div>
                    <span className='descriptionjob'>
                      {image.description}
                    </span>
                    <div className='divIconsBtn'>
                      <div className="jobTec">
                        {image.tech.map((tech, i) => (
                          <div key={i} style={{ color: tech.color, fontSize: '40px' }} className="icon-container">
                            {tech.icon}
                            <div className="tooltip">{tech.tooltip}</div>
                          </div>
                        ))}
                      </div>
                      <div className='iconsSocial'>
                        <div className='backgroungIcon'>
                          <a className='IconsSocial'
                            href={image.git}
                            onClick={(e) => handleClick(e, image.git)}

                          >
                            <FiGithub
                              style={{ fontSize: '30px' }}
                              className='Icon' />
                          </a>
                        </div>
                        <div className='backgroungIcon'>
                          <a className='IconsSocial'
                            href={image.deploy}
                            onClick={(e) => handleClick(e, image.deploy)}
                          >
                            <SiVercel
                              style={{ fontSize: '30px' }}
                              className='Icon' />
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </motion.div>
      <div className='repartidorCarr'></div>
    </div>
  );
};
