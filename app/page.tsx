import Image from 'next/image';
import Link from 'next/link';
import styles from './styles/page.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
      <Link href="/dogs/dog1" passHref>
        <div className={styles.flier}>
          <Image src="/dog1.jpeg" alt="Dog 1" width={300} height={300} />
          <h2>Gorlak, Destroyer of Worlds</h2>
          <p>Breed: Labrador</p>
          <p>Age: 2 months</p>
        </div>
      </Link>
      <Link href="/dogs/dog2" passHref>
        <div className={styles.flier}>
          <Image src="/dog2.jpg" alt="Dog 2" width={300} height={300} />
          <h2>Instagram Reels</h2>
          <p>Breed: Pomeranian</p>
          <p>Age: 3 months</p>
        </div>
      </Link>
      <Link href="/dogs/dog3" passHref>
        <div className={styles.flier}>
          <Image src="/dog3.jpg" alt="Dog 3" width={300} height={300} />
          <h2>Greg</h2>
          <p>Breed: Poodle</p>
          <p>Age: 1 year</p>
        </div>
      </Link>
    </div>
  );
}