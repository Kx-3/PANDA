import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import Hands from "../assets/hands-register.jpg";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Register = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const registerUser = async () => {
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username: username,
        email: email,
        first_name: firstname,
        last_name: lastname,
        password: password,
      }),
    };
    const response = await fetch(
      "https://panda-n1pc.onrender.com/api/register/",
      options
    );
    const data = await response.json();
    if (data.message) {
      toast.success(data.message);
    } else if (data.error) {
      toast.error(data.error);
    }
    console.log(data);
    localStorage.setItem("session", data.session);
    if (data.session) {
      setTimeout(() => {
        navigate("/");
        navigate(0);
      }, 5000);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    registerUser();
  };

  return (
    <>
      <NavBar />
      <section className="text-gray-600 font-poppins relative">
        <div className="container px-5 py-10 mx-auto">
          <div className="flex flex-col text-center w-full mb-12">
            <h1 className="sm:text-5xl text-dark-teal text-2xl font-medium title-font mb-4">
              Sign Up
            </h1>
          </div>
          <div className="flex">
            <form
              onSubmit={handleSubmit}
              className="lg:w-1/2 md:w-2/3 mx-auto flex flex-col items-center gap-10"
            >
              <div className="flex flex-wrap w-full">
                <div className="p-2 w-full">
                  <div className="relative flex flex-col">
                    <label htmlFor="username">Username</label>
                    <input
                      value={username}
                      onChange={(e) => setUsername(e.target.value)}
                      type="text"
                      id="username"
                      name="username"
                      className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-dark-teal focus:bg-white focus:ring-2 focus:ring-light-teal text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                    />
                    <label htmlFor="email">Email</label>
                    <input
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      type="text"
                      id="email"
                      name="email"
                      className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-dark-teal focus:bg-white focus:ring-2 focus:ring-light-teal text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                    />
                    <label htmlFor="first-name">First Name</label>
                    <input
                      value={firstname}
                      onChange={(e) => setFirstname(e.target.value)}
                      type="text"
                      id="first-name"
                      name="first-name"
                      className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-dark-teal focus:bg-white focus:ring-2 focus:ring-light-teal text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                    />
                    <label htmlFor="last-name">Last Name</label>
                    <input
                      value={lastname}
                      onChange={(e) => setLastname(e.target.value)}
                      type="text"
                      id="last-name"
                      name="last-name"
                      className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-dark-teal focus:bg-white focus:ring-2 focus:ring-light-teal text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                    />
                    <label htmlFor="password">Password</label>
                    <input
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      type="password"
                      id="password"
                      name="password"
                      className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-dark-teal focus:bg-white focus:ring-2 focus:ring-light-teal text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                    />
                  </div>
                </div>
              </div>
              <button
                type="submit"
                className="flex-shrink-0 text-white bg-dark-teal border-0 py-2 px-8 focus:outline-none hover:bg-light-teal rounded text-lg mt-10 sm:mt-0"
              >
                Register
              </button>
            </form>
            <div className="w-1/3 h-2/3 mr-20">
              <img
                className="w-full h-full object-contain rounded-xl"
                src={Hands}
                alt=""
              />
            </div>
            <ToastContainer
              toastClassName={"font-poppins"}
              hideProgressBar={true}
              position="top-right"
              autoClose={5000}
            />
          </div>
        </div>
        <Footer />
      </section>
    </>
  );
};

export default Register;
