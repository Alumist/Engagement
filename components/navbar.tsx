import Link from 'next/link';

function Navbar() {
  return (
    <div className='flex justify-center items-center text-7xl pt-10 pb-10 bg-[#fff2da]'>
      <Link href='/'>Nick & Karen</Link>
    </div>
  );
}
export default Navbar;
