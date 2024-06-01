import { Link } from "react-router-dom";
import Logo from "../assets/pandalogo.png";

const NavBar = () => {
  return (
    <header className="h-[15vh] text-gray-600 body-font bg-background/70 sticky top-0 w-full font-raleway shadow-lg">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
          <div className="h-[10vh] w-[200px]">
            <Link to="/">
              <img
                className="w-full h-full object-contain"
                src={Logo}
                alt="Logo"
              />
            </Link>
          </div>
        </a>
        <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center text-light-teal">
          <a href="#Kenya" className="mr-5 hover:text-gray-900">
            Why Kenya
          </a>
          <a href="#mission" className="mr-5 hover:text-gray-900">
            Mission
          </a>
        </nav>
        <div className="flex gap-3">
          <Link to="/login">
            <button className="inline-flex items-center bg-dark-teal border-0 py-1 px-3 focus:outline-none hover:bg-light-teal rounded text-white">
              Log In
            </button>
          </Link>
          <Link to="/register">
            <button className="inline-flex items-center bg-dark-teal border-0 py-1 px-3 focus:outline-none hover:bg-light-teal rounded text-white">
              Sign Up
            </button>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default NavBar;
