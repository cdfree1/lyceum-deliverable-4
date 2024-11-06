import react from 'react';
import Link  from 'next/link';

const Navbar = () => {
  return (
    <div className="pt-1">
        <nav className = "width-full bg-green-500 text-white flex space-x-4 justify-center">
            <Link href = "/" className="hover:underline">Home</Link>
            <Link href = "/about" className="hover:underline">About</Link>
        </nav>
    </div>
  );
}

export default Navbar;
