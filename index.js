
import Head from 'next/head';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Doozy – Say I Do with Doozy</title>
        <meta name="description" content="Because no one dreams of spending 12 hours making a seating chart." />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>Say I Do with Doozy</h1>
        <p className={styles.description}>Because no one dreams of spending 12 hours making a seating chart.</p>
        <a href="/chat" className={styles.button}>Don't Panic. Start Planning</a>
        <div className={styles.icons}>💍 📓 💖 🥂</div>
      </main>

      <footer className={styles.footer}>
        <a href="#">About</a>
        <a href="#">Contact</a>
        <a href="#">Journal</a>
        <a href="#">Privacy Policy</a>
      </footer>
    </div>
  );
}
