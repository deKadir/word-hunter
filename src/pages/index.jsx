import Link from 'next/link';
import styles from '../styles/home.module.scss';
import { Button } from '../components';

export default function Home() {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <Link href="guess">
          <Button>Guess the world</Button>
        </Link>
        <Link href="multichoice">
          <Button>Multichoice</Button>
        </Link>
      </main>
    </div>
  );
}
