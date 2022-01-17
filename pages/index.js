import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import todoist from "../images/todist.png"
import nuclear from '../images/nuclear.png'

import Header from '../components/Header'
import Tech from '../components/Tech'
import Projects from '../components/Projects'

export default function Home() {
  return (
    <div>
      <Header />
      <div className='content'>
        <Tech />
        <h2>Portfolio</h2>
        <Projects
          src={todoist}
          title={'ToDoist'}
          desc={'ToDo list creator with authentication'}
        />
        <Projects
        src={nuclear}
          title={'Nuclear Hangover'}
          desc={'Podcast host with merch store'}
        />
        </div>
      <style jsx>{ 
        `
        h2 {
          color: white;
          font-size: 20px; 
          
      }
        .content{
          margin-left:25px;
        }
        `
      }</style>
    </div>
  )
}
