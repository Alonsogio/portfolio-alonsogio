import './skills.css';
import { motion } from 'framer-motion';
import CardSkills from '../CardSkills';
import { FaHtml5, FaCss3Alt, FaJs, FaNodeJs, FaReact, FaGit, FaPython, FaAngular, FaVuejs } from "react-icons/fa";
import { SiTypescript, SiDjango, SiPostgresql, SiPrisma, SiChakraui, SiZod, SiExpress, SiRedux } from "react-icons/si";
import { TbBrandNextjs } from "react-icons/tb";

export const Skills = (): JSX.Element => {
  const skills = [
    { icon: <FaHtml5 />, text: "HTML 5", percentage: 80 },
    { icon: <FaCss3Alt />, text: "CSS", percentage: 90 },
    { icon: <FaJs />, text: "JavaScript", percentage: 80 },
    { icon: <SiTypescript />, text: "TypeScript", percentage: 75 },
    { icon: <FaNodeJs />, text: "Node JS", percentage: 80 },
    { icon: <FaReact />, text: "React", percentage: 75 },
    { icon: <TbBrandNextjs />, text: "Next.js", percentage: 70 },
    { icon: <SiDjango />, text: "Django", percentage: 50 },
    { icon: <SiPostgresql />, text: "PostgreSQL", percentage: 75 },
    { icon: <FaGit />, text: "Git", percentage: 75 },
    { icon: <FaPython />, text: "Python", percentage: 70 },
    { icon: <SiPrisma />, text: "Prisma", percentage: 70 },
    { icon: <SiChakraui />, text: "Chakra", percentage: 60 },
    { icon: <SiZod />, text: "Zod", percentage: 50 },
    { icon: <FaAngular />, text: "Angular", percentage: 50 },
    { icon: <SiExpress />, text: "Express", percentage: 70 },
    { icon: <FaVuejs />, text: "Vue.js", percentage: 70 },
    { icon: <SiRedux />, text: "Redux", percentage: 60 },
  ];

  return (
    <>
      <div className="Skills" id='skills'>
        <motion.div
          className="card-container-skills"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5 }}
        >
          <div className='divH1andP'>
            <h1 className="mySkills">My Skills <span className="pontoMySkills">.</span></h1>
            <p className='descriptionSkills'>
              I have experience with a variety of technologies and tools, including <span className='destaqueColor'>HTML</span>, <span className='destaqueColor'>CSS</span>, <span className='destaqueColor'>JavaScript</span>, <span className='destaqueColor'>React</span> and <span className='destaqueColor'>Node.js</span>. I am always eager to learn new technologies and improve my skills, and I am constantly working on new projects to expand my knowledge.
            </p>
          </div>
          <div className="DivSkills">
            {skills.map((skill, index) => (
              <CardSkills
                icon={skill.icon}
                text={skill.text}
                percentage={skill.percentage}
              />
            ))}
          </div>
        </motion.div>
      </div >
      <div className='repartidorbranco'></div>
    </>
  );
};
