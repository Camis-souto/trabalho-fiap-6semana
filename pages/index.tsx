import type { NextPage } from 'next';
import styles from '../styles/Home.module.css';
import Header from '../components/Header';
import Body from '../components/Body';
import Footer from '../components/Footer';

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Header/>
      <main className={styles.main}> 
        <Body/>
      </main>
        <Footer/>
    </div>
  )
}
export default Home
