import { useState } from 'react';
import { TiThMenuOutline } from "react-icons/ti";
import './navbar.css';

export const NavBar = (): JSX.Element => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="NavBar">
      <div className='DivHi1'>
        <h1>FullStack <span className="ponto">.</span></h1>
      </div>
      <div className="MenuIcon" onClick={toggleMenu}>
        <TiThMenuOutline className='IconMenu' />
      </div>
      <div className={`BtnsNav ${isMenuOpen ? 'active' : ''}`}>
        <a className='optionsMenu' href="#home">HOME</a>
        <a className='optionsMenu' href="#skills">SKILLS</a>
        <a className='optionsMenu' href="#contact">CONTACT</a>
        <a className="StyleBtn" href="#projects">PROJECTS</a>
      </div>
    </div>
  );
};
