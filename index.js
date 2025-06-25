
import Head from 'next/head';
import './Home.module.css';

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Doozy – Say I Do with Doozy</title>
        <meta name="description" content="Because no one dreams of spending 12 hours making a seating chart." />
      </Head>

      <main className="main">
        <h1 className="title">Say I Do with Doozy</h1>
        <p className="description">Because no one dreams of spending 12 hours making a seating chart.</p>
        <a href="/chat" className="button">Don't Panic. Start Planning</a>
        <div className="icons">💍 📓 💖 🥂</div>
      </main>

      <footer className="footer">
        <a href="#">About</a>
        <a href="#">Contact</a>
        <a href="#">Journal</a>
        <a href="#">Privacy Policy</a>
      </footer>
    </div>
  );
}
