import { useRouter } from 'next/router';
import Image from 'next/image';

type DogData = {
  [key: string]: {
    name: string;
    breed: string;
    age: string;
    image: string;
  };
};

const dogData: DogData = {
  'dog1': { name: 'Gorlak, Destroyer of Worlds', breed: 'Labrador', age: '2 months', image: '/dog1.jpeg' },
  'dog2': { name: 'Instagram Reels', breed: 'Pomeranian', age: '3 months', image: '/dog2.jpg' },
  'dog3': { name: 'Greg', breed: 'Poodle', age: '1 year', image: '/dog3.jpg' },
};

const DogDetails = () => {
  const router = useRouter();
  const { id } = router.query;

  if (typeof id !== 'string' || !(id in dogData)) {
    return <div>Dog not found</div>;
  }

  const dog = dogData[id];

  return (
    <div>
      <Image src={dog.image} alt={dog.name} width={300} height={300} />
      <h2>{dog.name}</h2>
      <p>Breed: {dog.breed}</p>
      <p>Age: {dog.age}</p>
    </div>
  );
};

export default DogDetails;