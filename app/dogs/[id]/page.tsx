import { notFound } from 'next/navigation';
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
  dog1: { name: 'Gorlak, Destroyer of Worlds', breed: 'Labrador', age: '2 months', image: '/dog1.jpeg' },
  dog2: { name: 'Instagram Reels', breed: 'Pomeranian', age: '3 months', image: '/dog2.jpg' },
  dog3: { name: 'Greg', breed: 'Poodle', age: '1 year', image: '/dog3.jpg' },
};

type Props = {
  params: {
    id: string;
  };
};

export default async function DogDetails({ params }: Props) {
  const { id } = await params;
  const dog = dogData[id];

  if (!dog) {
    notFound();
  }

  return (
    <div>
      <Image src={dog.image} alt={dog.name} width={300} height={300} />
      <h2>{dog.name}</h2>
      <p>Breed: {dog.breed}</p>
      <p>Age: {dog.age}</p>
    </div>
  );
}