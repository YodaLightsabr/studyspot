import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>StudySpot</title>
        <meta name="description" content="StudySpot - The right way to study" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />

      <Hero styles={{
        backgroundColor: 'lavender',
        color: 'darkblue'
      }}>
        StudySpot is a work-in-progress open source alternative to Quizlet or Kahoot that doesn't serve ads or cost money.
        <br />
        <br />
        This is a recreation of a previous version that was not open source and is old.
      </Hero>

    </div>
  )
}
