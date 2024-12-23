import Image from 'next/image';

function AddyPage() {
  return (
    <div>
      <h1 className='text-3xl flex items-center justify-center py-8'>
        Shot by Addy
      </h1>
      <div className='flex flex-col justify-around'>
        <Image
          src='/images/adelynsphotos/097A7631.jpg'
          alt='addy'
          width={300}
          height={300}
        />
      </div>
    </div>
  );
}
export default AddyPage;
