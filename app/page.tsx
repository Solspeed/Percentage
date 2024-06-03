import Percentage from '@/public/images/percentage.png'

export default function Home() {
  return (
    <div className="relative flex h-screen pt-14 flex-col items-center  overflow-hidden bg-no-repeat bg-cover bg-background-image bg-bottom">
      <img src={Percentage.src} alt="Percentage" className="w-[5.4rem] h-[5.4rem] aspect-square" />
      <div className="mt-40 font-cczoinks text-6xl text-center text-yellow-400 max-md:mt-10 max-md:max-w-full max-md:text-4xl">
        Feel that nostalgia onchain!!
      </div>
    </div>
  );
}
