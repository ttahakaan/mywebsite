import { useEffect, useState } from 'react';
import Image from 'next/image';
import { Inter } from 'next/font/google';
import logo from '../assets/tkk.png';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  const [isBlinking, setIsBlinking] = useState(true);

  useEffect(() => {
    const blinkInterval = setInterval(() => {
      setIsBlinking((prevIsBlinking) => !prevIsBlinking);
    }, 500); // Yanıp sönme hızını burada belirleyebilirsiniz (milisaniye cinsinden)

    return () => clearInterval(blinkInterval);
  }, []);

  return (
    <main className='bg-slate-800'>
      <div className='flex justify-center items-center h-screen'>
        <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2'>
          <Image src={logo} alt='Taha Kaan Kutal LOGO' width={500} height={500} quality={100} />
          <div className={`bg-black h-14 text-white text-center text-3xl border ${isBlinking ? 'opacity-0' : 'opacity-100'}`}>
            Coming Soon.
          </div>
        </div>
      </div>
    </main>
  );
}
