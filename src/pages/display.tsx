// pages/display.tsx
import { useRouter } from 'next/router';
import styles from '../styles/Display.module.css';

const Display: React.FC = () => {
  const router = useRouter();
  const { title, subtitle, imageUrl } = router.query;

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <h1>Awesome Generator</h1>
      </header>
      <nav className={styles.nav}>
        {/* <a href="/" className={styles.link}>Home</a>
        <a href="/about" className={styles.link}>About</a>
        <a href="/contact" className={styles.link}>Contact</a> */}
      </nav>
      <main className={styles.main}>
        {title && <h2 className={styles.title}>{title}</h2>}
        {subtitle && <h3 className={styles.subtitle}>{subtitle}</h3>}
        {imageUrl && <img src={imageUrl as string} alt="Generated" className={styles.image} />}
      </main>
      <footer className={styles.footer}>
        © 2024 Awesome Generator. All rights reserved.
      </footer>
    </div>
  );
}

export default Display;
