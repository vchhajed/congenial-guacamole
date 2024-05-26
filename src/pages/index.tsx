// pages/index.tsx
import { useState, FormEvent } from 'react';
import { useRouter } from 'next/router';
import styles from '../styles/Index.module.css';

const Home: React.FC = () => {
  const router = useRouter();
  const [loading, setLoading] = useState<boolean>(false);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setLoading(true);

    const userText = event.currentTarget.userText.value as string;
    const response = await fetch('/api/generate', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ userText })
    });

    const data = await response.json();
    setLoading(false);
    router.push({
      pathname: '/display',
      query: {
        title: data.title,
        subtitle: data.subtitle,
        imageUrl: data.imageUrl,
      }
    });
  }

  return (
    <div className={styles.container}>
      <form onSubmit={handleSubmit} className={styles.form}>
        <input name="userText" type="text" placeholder="Enter your idea here" required className={styles.input} />
        <button type="submit" disabled={loading} className={styles.button}>
          Generate
        </button>
      </form>
      {loading && <p className={styles.loadingText}>Loading...</p>}
    </div>
  );
}

export default Home;
