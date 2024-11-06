import { notFound } from 'next/navigation';
import Image from 'next/image';
import Navbar from '@/app/components/navigation/navbar';

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
      <h1 className="text-green-500 font-extrabold text-center text-xl">Your New Friend!</h1>
      <Navbar />
      <div className="flex flex-col items-center pt-4">
        <Image src={dog.image} alt={dog.name} width={300} height={300} className="rounded-lg shadow-lg" />
        <h2 className="mt-4 text-2xl font-bold">{dog.name}</h2>
        <p className="mt-2 text-lg">Breed: {dog.breed}</p>
        <p className="mt-1 text-lg">Age: {dog.age}</p>
      </div>
    </div>
  );
}