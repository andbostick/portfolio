import Head from "next/head";

import styles from "../styles/Home.module.css";
import { useMediaQuery } from "react-responsive";
import todoistMobile from '../images/todistMobile.png'
import nuclear from "../images/nuclear1.png";


import Header from "../components/Header";
import Tech from "../components/Tech";
import Projects from "../components/Projects";
import ProjectsRight from "../components/ProjectsRight";
import ContactForm from "../components/ContactForm";

export default function Home() {
  return (
    <div>
      <Head>
      <link rel="preconnect" href="https://fonts.googleapis.com"/>
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin/>
      <link href="https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,400;0,900;1,300&display=swap" rel="stylesheet"/>
      <link href="https://fonts.googleapis.com/css2?family=Roboto&display=swap" rel="stylesheet"/>
      <link href="https://fonts.googleapis.com/css2?family=Proza+Libre:wght@400;500&display=swap" rel="stylesheet"/>
      </Head>
      <Header />
      <div className="content">
        <Tech />
        <h2>Portfolio</h2>
        <div className="projects-container">
        
        
        <Projects
          src={todoistMobile}
          title={"ToDoist"}
          desc={"ToDo list creator with authentication"}
          url={'https://peaceful-wozniak-a77c4c.netlify.app/'}
          git={'https://github.com/andbostick/todo-board'}
          />
          
          
        <ProjectsRight
          src={nuclear}
          title={"Nuclear Hangover"}
          desc={"Podcast host with merch store"}
          url={'https://nuclearhangover.com'}
          git={'https://github.com/andbostick/next-nuclear'}
          />
          
          </div>
        <h2>Contact Me</h2>
        <ContactForm />
      </div>
      <style jsx>{`
        .projects-container{
          display: grid;
          grid-template-columns: 1fr;
          gap: 40px;
          margin-bottom: 50px;
        }
        h2 {
          font-family: Lato;
          color: white;
          font-size: 20px;
          font-weight: 500;
        }
        .content {
          margin-left: 15px;
          
        }
        @media(min-width:768px){
          .content{
            width:70%;
            margin: 0 auto;
          }
        }
        @media (min-width: 1024px) {
          .content {
            width: 60%;
            margin: 0 auto;
          }
        }
      `}</style>
    </div>
  );
}
