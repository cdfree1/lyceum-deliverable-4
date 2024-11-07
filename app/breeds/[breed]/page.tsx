import Image from 'next/image';
import Navbar from '@/app/components/navigation/navbar';
import { capitalizeFirstLetter } from '@/app/utils/capitalize';

type BreedProps = {
  params: {
    breed: string;
    fact: string;
  };
};

const breeds = ['Labrador', 'Pomeranian', 'Poodle'];

export async function generateStaticParams() {
  return breeds.map((breed) => ({
    breed,
  }));
}

export default async function BreedFacts({ params }: BreedProps) {
  const { breed } = await params;
  const response = await fetch(`https://dog.ceo/api/breed/${breed}/images/random`);
  const data = await response.json();
  const image = data.message;

  return (
    <div>
      <Navbar />
      <div className="flex flex-col items-center pt-4">
        <h1 className="text-green-500 font-extrabold text-3xl text-center">{capitalizeFirstLetter(breed)} Facts</h1>
        <Image src={image} alt={breed} width={300} height={300} className="rounded-lg shadow-lg pt-1" />
      </div>
    </div>
  );
}
