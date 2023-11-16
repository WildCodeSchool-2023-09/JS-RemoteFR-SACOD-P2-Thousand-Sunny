import gif1 from "../assets/ca-fait-rien-cassez-vous.gif";
import gif2 from "../assets/javoue-suis-perdue.gif";

function Error() {
  const backImage = [gif1, gif2];

  return (
    <div className="flex font-amarante font-bold justify-center flex-col items-center h-screen text-black text-6xl md:text-8xl tall:text-6xl text-center bg-back">
      <img
        className="h-1/2 mb-8"
        src={`${backImage[Math.floor(Math.random() * 2)]}`}
        alt="Gif"
      />
      <h1>Error 404</h1>
      <h2 className="mb-20">Page not Found</h2>
    </div>
  );
}

export default Error;
