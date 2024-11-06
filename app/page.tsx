import Image from 'next/image';
import Link from 'next/link';
import styles from './styles/page.module.css';
import Navbar from './components/navigation/navbar';

export default function Home() {
  return (
    <div className="bg-white text-center text-lg min-h-screen">
      <h1 className ="text-green-500 font-extrabold text-3xl">
        Adopt a Dog!
      </h1>
      <Navbar />
      <div className={styles.container}>
          <div className={styles.flier}>
          <Link href="/dogs/dog1" passHref>
            <Image src="/dog1.jpeg" alt="Dog 1" width={300} height={300} />
          </Link>
            <h2>Gorlak, Destroyer of Worlds</h2>
            <Link href="/breeds/labrador" passHref className="hover:underline text-green-500">Breed: Labrador</Link>
            <p>Age: 2 months</p>
          </div>
          <div className={styles.flier}>
          <Link href="/dogs/dog2" passHref>
            <Image src="/dog2.jpg" alt="Dog 2" width={300} height={300} />
          </Link>
            <h2>Instagram Reels</h2>
            <Link href="/breeds/pomeranian" passHref className="hover:underline text-green-500">Breed: Pomeranian</Link>
            <p>Age: 3 months</p>
          </div>
          <div className={styles.flier}>
          <Link href="/dogs/dog3" passHref>
            <Image src="/dog3.jpg" alt="Dog 3" width={300} height={300} />
          </Link>
            <h2>Greg</h2>
          <Link href="/breeds/poodle" passHref className="hover:underline text-green-500">Breed: Poodle</Link>
            <p>Age: 1 year</p>
          </div>
      </div>
    </div>
  );
}