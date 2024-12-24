import Image from 'next/image';
import fs from 'fs';
import path from 'path';

const folderPath = path.join(process.cwd(), 'public/images/michaelasphotos');
const listOfFiles = fs.readdirSync(folderPath);
function MichaelaPage() {
  return listOfFiles.map((file) => {
    return (
      <div key={file} style={{ display: 'inline-block', margin: '4rem' }}>
        <Image
          src={`/images/michaelasphotos/${file}`}
          alt='addy'
          width={200}
          height={200}
        />
      </div>
    );
  });
  // <div>
  //   <h1 className='text-3xl flex items-center justify-center py-8'>
  //     Shot by Addy
  //   </h1>
  //   <div className='flex flex-col justify-around'>
  //     <Image
  //       src='/images/adelynsphotos/097A7631.jpg'
  //       alt='addy'
  //       width={300}
  //       height={300}
  //     />
  //   </div>
  // </div>
}
export default MichaelaPage;
