import Percentage from '@/public/images/percentage.png';
import ComingSoon from '@/public/images/COMING SOOOOON....png';

export default function Home() {
  return (
    <div className="relative grow flex h-screen justify-between py-14 snap-center gap-16  flex-col items-center overflow-hidden bg-no-repeat bg-cover bg-background-image bg-center">
      <img src={Percentage.src} alt="Percentage" className="w-[5.4rem] h-[5.4rem] aspect-square" />
      <div className='flex flex-col gap-2'>
        <div className=" font-cczoinks md:text-[3.4rem] text-center text-[#FED501] max-md:mt-10 md:w-auto max-w-full text-4xl">
          Feel that nostalgia onchain!!
        </div>
        <div className="font-chathura md:text-6xl font-bold text-center text-[#FED501] text-4xl">
          JOIN THE WAITLIST NOW
        </div>
        <div className='w-full flex justify-center'>
          <input type="text" placeholder="your email" className=" sm:w-full  h-[4.4rem] rounded-lg border-2 border-black text-black px-6 font-chathura text-[2.48rem]" />
        </div>
        <button className='key-button mt-6 text-black  mx-auto flex justify-center items-center font-extrabold font-chathura text-[2.48rem] bg-[#FED501] h-10  sm:h-14'>JOIN WAITLIST</button>
      </div>
      <div className="  w-full flex justify-center items-center">
        <img src={ComingSoon.src} alt="Coming Soon" className="sm:w-[20.4rem] w-[15.2rem] h-[2.7rem] sm:h-[3.4rem]" />
      </div>
    </div>
  );
}
