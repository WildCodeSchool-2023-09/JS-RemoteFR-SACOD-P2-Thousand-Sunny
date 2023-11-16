import { Link } from "react-router-dom";
import { useEffect } from "react";
import sound from "../assets/kaamelott.mp3";

function Home() {
  useEffect(() => {
    const audio = new Audio(sound);
    audio.play();
  });

  return (
    <div className="flex h-[calc(100vh-6rem)] md:h-[calc(100vh-7rem)] tall:h-[calc(100vh-6rem)] justify-center items-center bg-[url('./assets/Affiche-film.jpg')] md:bg-[url('./assets/fonds.png')] bg-cover bg-no-repeat fixed w-screen bg-center md:bg-top">
      <Link
        to="/quiz"
        className="px-24 md:px-40 py-4 md:py-8 bg-label hover:bg-label-hover rounded-[25px] font-bold text-2xl md:text-4xl border-solid border-black border-[1px] md:mt-[30%] tall:mt-0"
      >
        Start
      </Link>
    </div>
  );
}

export default Home;
