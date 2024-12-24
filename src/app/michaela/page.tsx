import Image from 'next/image';
import fs from 'fs';
import path from 'path';
import Link from 'next/link';

const folderPath = path.join(process.cwd(), 'public/images/michaelasphotos');
const listOfFiles = fs.readdirSync(folderPath);
function MichaelaPage() {
  return (
    <>
      <div className='flex justify-center items-center text-xl pt-10 pb-10 bg-[#fff2da]'>
        <Link href='/'>Back</Link>
      </div>
      <div className='grid grid-cols-2 gap-9 py-20 lg:grid-cols-5 justify-items-center bg-[#fff4df]'>
        {listOfFiles.map((file) => (
          <Image
            key={file}
            src={`/images/michaelasphotos/${file}`}
            alt='addy'
            width={200}
            height={200}
            className='rounded-lg hover:scale-110 transform transition duration-500 ease-in-out '
          />
        ))}
      </div>
    </>
  );
}
export default MichaelaPage;
