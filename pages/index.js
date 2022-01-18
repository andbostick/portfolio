import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import { useMediaQuery } from "react-responsive";
import todoist from "../images/todist.png";
import nuclear from "../images/nuclear.png";

import Header from "../components/Header";
import Tech from "../components/Tech";
import Projects from "../components/Projects";
import ContactForm from "../components/ContactForm";

export default function Home() {
  return (
    <div>
      <Header />
      <div className="content">
        <Tech />
        <h2>Portfolio</h2>
        <Projects
          src={todoist}
          title={"ToDoist"}
          desc={"ToDo list creator with authentication"}
          url={'https://peaceful-wozniak-a77c4c.netlify.app/'}
          git={'https://github.com/andbostick/todo-board'}
        />
        <Projects
          src={nuclear}
          title={"Nuclear Hangover"}
          desc={"Podcast host with merch store"}
          url={'https://nuclearhangover.com'}
          git={'https://github.com/andbostick/next-nuclear'}
        />
        <h2>Contact Me</h2>
        <ContactForm />
      </div>
      <style jsx>{`
        h2 {
          color: white;
          font-size: 20px;
          font-weight: 500;
        }
        .content {
          margin-left: 15px;
          
        }
        @media (min-width: 1024px) {
          .content {
            margin: 0 15rem 0 15rem;
          }
        }
      `}</style>
    </div>
  );
}
