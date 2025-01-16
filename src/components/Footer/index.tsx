import { FiGithub, FiLinkedin } from "react-icons/fi";
import './footer.css';

export const Footer = (): JSX.Element => {
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>, url: string) => {
    const userConfirmed = window.confirm("Você está prestes a sair desta página. Deseja continuar?");

    if (!userConfirmed) {
      e.preventDefault();
    }
  };

  return (
    <div className="Footer">
      <footer>
        <div className="divH1PImg">
          <div className='backgroundImgFooter'>
            <img className="imgFooter" src="https://imgur.com/HCEpM4D" />
          </div>
          <div className="H1andP">
            <h1 className='textH1'>
              Thank you for visiting!
            </h1>
            <p>
              Follow me on my social networks and let's talk
            </p>
          </div>
        </div>
        <div>
          <div className='divIconsFooter'>
            <div className="backgroundIcon">
              <a className='IconsSocial'
                href='https://github.com/Alonsogio'
                onClick={(e) => handleClick(e, "https://github.com/Alonsogio")}
              >
                <FiGithub
                  className='IconFooter' />
              </a>
            </div>
            <div className="backgroundIcon">
              <a
                className='IconsSocial'
                href='https://www.linkedin.com/in/giovanna-alonso-b98165240/'
                onClick={(e) => handleClick(e, "https://www.linkedin.com/in/giovanna-alonso-b98165240/")}
              >
                <FiLinkedin
                  className='IconFooter' />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};
