import Link from 'next/link';

function Hero() {
  return (
    <div className='bg-[#fff4df]'>
      <p className='text-xl flex justify-center items-center mb-7'>
        Click Below
      </p>
      <div className='flex justify-around items-center  text-center text-3xl p-10'>
        <Link
          href='/addy'
          className=' bg-[#fdeccc] rounded-lg shadow-xl py-5 p-7'
        >
          Photos by Addy
        </Link>
        <Link
          href='/michaela'
          className=' bg-[#fdeccc] rounded-lg shadow-xl py-5 p-7'
        >
          Photos by Michaela
        </Link>
      </div>
    </div>
  );
}
export default Hero;
