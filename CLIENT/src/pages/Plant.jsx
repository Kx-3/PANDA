import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../context/authContext";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Plant = () => {
  const session = useContext(AuthContext);
  const [trees, setTrees] = useState([]);
  const [sites, setSites] = useState([]);

  const [site, setSite] = useState("");
  const [tree, setTree] = useState("");

  const sendOrder = async () => {
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Token" + " " + session.session,
      },
      body: JSON.stringify({
        tree_species: tree,
        site_name: site,
      }),
    };
    const response = await fetch("https://panda-n1pc.onrender.com/api/plant/", options);
    const data = await response.json();
    if (data.message) {
      toast.success(data.message);
    } else if (data.error) {
      toast.error(data.error);
    }
    console.log(data);
    console.log(session.session);
  };

  const fetchTrees = async () => {
    const options = {
      method: "GET",
    };
    const response = await fetch("https://panda-n1pc.onrender.com/api/trees/", options);
    const data = await response.json();
    console.log(data);
    console.log(session.session);
    setTrees(data);
  };

  const fetchSites = async () => {
    const options = {
      method: "GET",
    };
    const response = await fetch("https://panda-n1pc.onrender.com/api/sites/", options);
    const data = await response.json();
    console.log(data);
    console.log(session.session);
    setSites(data);
  };

  useEffect(() => {
    fetchTrees();
    fetchSites();
  }, []);
  return (
    <>
      <NavBar />
      {session.session ? (
        <>
          <section className="flex flex-col items-center">
            <h1 className="font-poppins text-dark-teal text-5xl lg:text-6xl py-10 m-5">
              1. Select a tree species
            </h1>
            <div className="w-full flex flex-wrap justify-center bg-background py-10">
              {trees.map((tree) => {
                return (
                  <button
                    key={tree.id}
                    onClick={() => setTree(tree.name)}
                    className="w-[300px] h-[350px] flex flex-col bg-white font-raleway rounded-xl text-dark-teal border border-dark-teal m-4 hover:text-light-teal hover:border-light-teal focus:border-2 focus:border-light-teal focus:text-light-teal"
                  >
                    <div className="w-full">
                      <img
                        className="w-full h-full object-cover rounded-t-xl"
                        src={tree.img_url}
                        alt=""
                      />
                    </div>
                    <div className="mx-5 my-3 font-semibold">
                      <h2>
                        <strong>Name:</strong> {tree.name}
                      </h2>
                      <h2>
                        <strong>CO2 Offset:</strong> {tree.co2}KG
                      </h2>
                      <h2>
                        <strong>Price:</strong> KES {tree.price}
                      </h2>
                    </div>
                  </button>
                );
              })}
            </div>
          </section>
          <section className="flex flex-col items-center">
            <h1 className="font-poppins text-dark-teal text-5xl lg:text-6xl py-10 m-5">
              2. Select a reforestration site
            </h1>
            <div className="w-full flex flex-col items-center bg-background py-10">
              {sites.map((site) => {
                return (
                  <button
                    key={site.id}
                    onClick={() => setSite(site.name)}
                    className="w-[90vw] h-[60vh] lg:h-[350px] flex bg-white font-raleway rounded-xl text-dark-teal border border-dark-teal m-4 hover:text-light-teal hover:border-light-teal focus:border-2 focus:border-light-teal focus:text-light-teal"
                  >
                    <div className="w-[40vw] h-full">
                      <img
                        className="w-full h-full object-cover rounded-l-xl"
                        src={site.img_url}
                        alt=""
                      />
                    </div>
                    <div className="w-[40vw] mx-8 my-6 font-semibold text-left">
                      <h2 className="text-4xl lg:text-base">
                        <strong>Name:</strong> {site.name}
                      </h2>
                      <h2 className="hidden lg:block">
                        <strong>About:</strong> {site.about}
                      </h2>
                    </div>
                  </button>
                );
              })}
              <button
                onClick={sendOrder}
                className="bg-dark-teal text-2xl text-white rounded px-5 py-3 font-poppins my-5"
              >
                Plant
              </button>
              <ToastContainer
                toastClassName={"font-poppins"}
                hideProgressBar={true}
                position="top-right"
                autoClose={5000}
              />
            </div>
          </section>
        </>
      ) : (
        <section className="w-[100vw] h-[85vh] bg-white font-poppins flex flex-col justify-center items-center">
          <h1 className="text-5xl my-9">Ooops... You're not logged in</h1>
          <Link to="/login">
            <button className="text-3xl inline-flex items-center bg-dark-teal border-0 py-4 px-6 focus:outline-none hover:bg-light-teal rounded text-white">
              Log In
            </button>
          </Link>
          <p className="text-gray-500 my-8">
            Don't have an account?
            <Link className="mx-3 underline" to="/register">
              Register
            </Link>
          </p>
        </section>
      )}
      <Footer />
    </>
  );
};

export default Plant;
