import { Link } from "react-router-dom";
import Logo from "../assets/pandalogo.png";
import { useContext } from "react";
import { AuthContext } from "../context/authContext";

const NavBar = () => {
  const session = useContext(AuthContext);

  const logoutUser = async () => {
    const options = {
      method: "POST",
      headers: {
        "Authorization": 'Token'+' '+session.session
      },
    }
    const response = await fetch("http://127.0.0.1:8000/api/logout/", options);
    const data = await response.json();
    console.log(data);
    console.log(session.session)
  }

  return (
    <header className="h-[15vh] text-gray-600 body-font bg-background/70 sticky top-0 w-full font-raleway shadow-lg">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <div className="h-[10vh] w-[200px]">
          <Link to="/">
            <img
              className="w-full h-full object-contain"
              src={Logo}
              alt="Logo"
            />
          </Link>
        </div>
        <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center text-light-teal">
          <a href="#Kenya" className="mr-5 hover:text-gray-900">
            Why Kenya
          </a>
          <a href="#mission" className="mr-5 hover:text-gray-900">
            Mission
          </a>
        </nav>
        {session ? (
            <button onClick={logoutUser} className="inline-flex items-center bg-dark-teal border-0 py-1 px-3 focus:outline-none hover:bg-light-teal rounded text-white">
              Log Out
            </button>
        ) : (
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
        )}
      </div>
    </header>
  );
};

export default NavBar;
