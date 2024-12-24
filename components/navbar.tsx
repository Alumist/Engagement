import Link from 'next/link';

function Navbar() {
  return (
    <div className='flex justify-center items-center text-7xl m-9 p-3 border-b-2 border-gray-300'>
      <Link href='/'>Nick & Karen</Link>
    </div>
  );
}
export default Navbar;
