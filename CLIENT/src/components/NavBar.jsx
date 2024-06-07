import { Link, useNavigate } from "react-router-dom";
import Logo from "../assets/pandalogo.png";
import { useContext } from "react";
import { AuthContext } from "../context/authContext";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const NavBar = () => {
  const session = useContext(AuthContext);
  const navigate = useNavigate();

  const logoutUser = async () => {
    const options = {
      method: "POST",
      headers: {
        Authorization: "Token" + " " + session.session,
      },
    };
    const response = await fetch("http://127.0.0.1:8000/api/logout/", options);
    const data = await response.json();
    if (data.message) {
      toast.success(data.message);
    } else if (data.error) {
      toast.error(data.error);
    }
    console.log(data);
    console.log(session.session);
    localStorage.clear();
    if (data.message) {
      setTimeout(() => {
        navigate(0);
      }, 5000);
    }
  };

  return (
    <header className="h-[15vh] text-gray-600 body-font bg-background/70 sticky top-0 w-full font-raleway shadow-lg">
      <div className="container mx-auto flex flex-wrap p-5 flex-row md:items-center">
        <div className="h-[10vh] w-[200px]">
          <Link to="/">
            <img
              className="w-full h-full object-contain"
              src={Logo}
              alt="Logo"
            />
          </Link>
        </div>
        <nav className="ml-auto flex flex-wrap items-center text-base justify-center text-light-teal">
          <Link className="mr-5 hover:text-gray-900" to="/plant">
            Plant
          </Link>
          <Link className="mr-5 hover:text-gray-900" to="/trees">
            Trees
          </Link>
          <Link className="mr-5 hover:text-gray-900" to="/sites">
            Sites
          </Link>
          {session.session ? (
            <button
              onClick={logoutUser}
              className="inline-flex items-center bg-dark-teal border-0 py-1 px-3 focus:outline-none hover:bg-light-teal rounded text-white"
            >
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
        </nav>
      </div>
      <ToastContainer
        toastClassName={"font-poppins"}
        hideProgressBar={true}
        position="top-right"
        autoClose={5000}
      />
    </header>
  );
};

export default NavBar;
