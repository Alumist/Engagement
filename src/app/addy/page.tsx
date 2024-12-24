import Image from 'next/image';
import fs from 'fs';
import path from 'path';

const folderPath = path.join(process.cwd(), 'public/images/adelynsphotos');
const listOfFiles = fs.readdirSync(folderPath);
function AddyPage() {
  return (
    <div className='grid grid-cols-2 gap-9 py-20 lg:grid-cols-5 justify-items-center bg-[#fff4df]'>
      {listOfFiles.map((file) => (
      <Image
        key={file}
        src={`/images/adelynsphotos/${file}`}
        alt='addy'
        width={200}
        height={200}
        className='rounded-lg hover:scale-110 transform transition duration-500 ease-in-out '
      />
      ))}
    </div>
  );
}
export default AddyPage;
