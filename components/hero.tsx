import Link from 'next/link';

function Hero() {
  return (
    <>
      <h1 className='text-3xl flex justify-center items-center mb-7'>
        Photographers
      </h1>
      <p className='text-xl flex justify-center items-center mb-7'>
        Click Below
      </p>
      <div className='flex justify-around items-center  text-center text-3xl p-10'>
        <Link href='/addy' className=' w-32 bg-[#ffe3b0] rounded-lg shadow-xl'>
          Addy
        </Link>
        <Link
          href='/michaela'
          className='w-32 bg-[#ffe3b0] rounded-lg shadow-xl'
        >
          Michaela
        </Link>
      </div>
    </>
  );
}
export default Hero;
