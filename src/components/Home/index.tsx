import { Typewriter } from 'react-simple-typewriter';
import './home.css';
import { HiOutlineDownload } from "react-icons/hi";
import { FiGithub, FiLinkedin } from "react-icons/fi";

export const Home = (): JSX.Element => {

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>, url: string) => {
    const userConfirmed = window.confirm("Você está prestes a sair desta página. Deseja continuar?");

    if (!userConfirmed) {
      e.preventDefault();
    }
  };

  return (
    <div className='containerHome' id='home'>
      <div className='containerTextBtn'>
        <h1 className='myName'>
          Hello, I'm Giovanna Alonso
        </h1>
        <div className="typewriter-container" style={{
          fontFamily: 'Chakra Petch, sans-serif',
          fontSize: '44px',
          color: 'var(--primary-color)',
          fontWeight: '600',
          position: 'relative'
        }}>
          <Typewriter
            words={['<Frontend Developer/>', '<Backend Developer/>']}
            loop={0}
            cursor
            cursorStyle="|"
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={1000}
          />
        </div>
        <p className='textHome'>
          I enjoy developing complete projects, from building modern and intuitive interfaces on the <span className='destaqueColor'>Front-End</span> to implementing robust and efficient solutions on the <span className='destaqueColor'>Back-End</span>.
          <br />
          <br />
          My goal is to turn ideas into reality through code, delivering functional, well-structured and optimized applications. Whether creating user-friendly interfaces or archiving solid systems, I am always looking to offer the best user experience and meet the needs of the project.
        </p>
        <div className='divBtn'>
          <a
            className='StyleBtn'
            href='CvGiovannaNew.pdf'
            download="CvGiovannaNew">
            DOWNLOAD CV
            <HiOutlineDownload
              className='IconDownload' />
          </a>
          <div className='divIcons'>
            <a className='IconsSocial'
              href='https://github.com/Alonsogio'
              onClick={(e) => handleClick(e, "https://github.com/Alonsogio")}
            >
              <FiGithub
                className='Icon' />
            </a>
            <a
              className='IconsSocial'
              href='https://www.linkedin.com/in/giovanna-alonso-b98165240/'
              onClick={(e) => handleClick(e, "https://www.linkedin.com/in/giovanna-alonso-b98165240/")}
            >
              <FiLinkedin
                className='Icon' />
            </a>
          </div>
        </div>
      </div>
      <div className='backgroundImg'>
        <img src="https://imgur.com/HygQr6n.png" alt="" />
      </div>
      <div className='repartidor'></div>
    </div>

  )
};
