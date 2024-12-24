import Link from 'next/link';

function SocialsComponent() {
  return (
    <div className='flex justify-around items-center  text-center text-3xl p-10'>
      <Link
        href='https://www.instagram.com/adelynbeltranphoto/?igsh=NTc4MTIwNjQ2YQ%3D%3D#'
        className='bg-[#fdeccc] rounded-lg shadow-xl py-5 p-7'
        target='_blank'
      >
        Instagram
      </Link>
      <Link
        href='https://www.instagram.com/m.colleenphoto/?igsh=NTc4MTIwNjQ2YQ%3D%3D#'
        className='bg-[#fdeccc] rounded-lg shadow-xl py-5 p-7'
        target='_blank'
      >
        Instagram
      </Link>
    </div>
  );
}
export default SocialsComponent;
