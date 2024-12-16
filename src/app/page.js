import Image from "next/image";

export default function Home() {
  return (
    <div className="bg-pink-800 flex flex-col min-h-screen font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col items-center gap-8 p-8 sm:p-20 flex-grow">
        <div className="text-center">
          <p className="text-5xl text-white font-bold uppercase">FELLE</p>
          <div className="flex justify-center items-center space-x-8 mt-6">
            <a
              className="text-lg sm:text-2xl text-white cursor-pointer hover:underline"
              href="https://x.com/animatedfelle" target="_blank" rel="noopener noreferrer"
            >
              X
            </a>
            <a
              className="text-lg sm:text-2xl text-white cursor-pointer hover:underline"
                  href="https://t.me/felle_sol" target="_blank" rel="noopener noreferrer"
            >
              Telegram
            </a>
            <a
              className="text-lg sm:text-2xl text-white cursor-pointer hover:underline"
              href="https://dexscreener.com/solana/crkpveq7g9riwkrwkjdzs4itolhc6vtyp3uhc2n4sra4" target="_blank" rel="noopener noreferrer"
            >
              Dexscreener
            </a>
          </div>
        </div>
        <div className="w-full flex justify-center mt-6">
          <video
            className="rounded-lg shadow-md w-full max-w-md sm:max-w-lg"
            autoPlay
            loop
            muted
            preload="auto"
          >
            <source src="/clip.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
        <div className="w-3/4 px-4 sm:px-10 lg:px-20 text-center sm:text-left">
          <p className="text-white text-sm sm:text-base leading-relaxed">
              8DqmSDWDik5cpixw149KCth6wPz66eUsP7HKAV4pump
          </p>
        </div>
      </main>
      <footer className="bg-pink-800 flex-shrink-0 w-full">
        <div className="relative flex justify-between items-end">
          <div className="absolute bottom-0 left-0">
            <Image
              src="/felle.png"
              alt="felle"
              width={500}
              height={500}
              className="w-[250px] md:w-[500px] object-contain"
            />
          </div>
          <div className="absolute bottom-6 right-0 flex space-x-8 mr-4 ">
            <a
              className=" transition duration-300"
              href="https://www.tiktok.com/@felleanimated"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src="/tiktok.png"
                alt="TikTok Icon"
                width={50}
                height={50}
                className="transform rounded-full hover:scale-110 transition duration-300"
              />
            </a>
            <a
              className=" transition duration-300"
              href="https://www.instagram.com/felleanimated"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src="/Instagram.png"
                alt="Instagram Icon"
                width={50}
                height={50}
                className="transform hover:scale-110 transition duration-300"
              />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
