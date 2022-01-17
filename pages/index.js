import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

import Header from '../components/Header'
import Tech from '../components/Tech'
import Projects from '../components/Projects'

export default function Home() {
  return (
    <div>
      <Header />
      <Tech />
      <Projects />
    </div>
  )
}
