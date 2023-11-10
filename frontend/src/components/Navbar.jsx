import { Link } from "react-router-dom";
import logo from "../assets/logo-k.png";

function Navbar() {
  return (
    <nav className="Navbar">
      <section className="navbar-mobile md:hidden">
        <div className="navbar fixed-top w-screen flex flex-row justify-between px-4 py-2 bg-head">
          <div className="logo-title flex flex-row">
            <div className="logo-mobile-container">
              <img className="logo-mobile h-12" src={logo} alt="logo" />
            </div>
            <div className="navbar-mobile self-center font-bold text-xl  ml-4">
              <h2> Kaamelott </h2>
            </div>
          </div>
          <ul className="links-mobile self-center w-1/2 flex flex-row gap-2 justify-around">
            <li>
              <Link to="/">Home</Link>{" "}
            </li>
            <li>
              <Link to="/quiz"> Quiz </Link>{" "}
            </li>
            <li>
              <Link to="/contact"> Contact</Link>{" "}
            </li>
          </ul>
        </div>
      </section>
      <section className="Navbar-desktop hidden md:flex">
        <div className="navbar-desktop fixed-top w-screen flex flex-row justify-between bg-head h-16">
          <div className="navbar-desktop text-2xl flex justify-center first-letter self-center font-bold  ml-4 w-1/3">
            <h2> Kaamelott - Le jeu </h2>
          </div>
          <div className="logo-desktop-container w-1/3 flex justify-center">
            <img className="logo-mobile h-full" src={logo} alt="logo" />
          </div>
          <ul className="links-desktop h-full text-xl w-1/3 flex flex-row gap-2 justify-around">
            <Link
              className=" py-4 px-4 h-full hover:bg-black hover:text-head"
              to="/"
            >
              Home
            </Link>{" "}
            <Link
              className=" py-4 px-4 h-full hover:bg-black hover:text-head"
              to="/quiz"
            >
              {" "}
              Quiz{" "}
            </Link>{" "}
            <Link
              className=" py-4 px-4 h-full hover:bg-black hover:text-head"
              to="/contact"
            >
              {" "}
              Contact
            </Link>{" "}
          </ul>
        </div>
      </section>
    </nav>
  );
}

export default Navbar;
