import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../context/authContext";
import { Link } from "react-router-dom";

const Sites = () => {
  const session = useContext(AuthContext);
  const [sites, setSites] = useState([]);
  const fetchSites = async () => {
    const options = {
      method: "GET"
    };
    const response = await fetch("http://127.0.0.1:8000/api/sites/", options);
    const data = await response.json();
    console.log(data);
    console.log(session.session);
    setSites(data);
  };

  useEffect(() => {
    fetchSites();
  }, []);

  return (
    <>
      <NavBar />
      <section className="flex flex-col items-center">
        <h1 className="font-poppins text-dark-teal text-5xl lg:text-6xl py-10 m-5">
          Reforestration Sites
        </h1>
        <h3 className="font-raleway text-dark-teal text-2xl lg:text-3xl m-5">
          The following are the reforestration sites available for planting through
          PANDA
        </h3>
        <div className="w-full flex flex-col items-center py-10">
          {sites.map((site) => {
            return (
              <button key={site.id} className="w-[90vw] h-[60vh] lg:h-[350px] flex bg-white font-raleway rounded-xl text-dark-teal border border-dark-teal m-4 hover:text-light-teal hover:border-light-teal focus:border-2 focus:border-light-teal focus:text-light-teal">
                <div className="w-[40vw] h-full">
                  <img
                    className="w-full h-full object-cover rounded-l-xl"
                    src={site.img_url}
                    alt=""
                  />
                </div>
                <div className="w-[40vw] mx-8 my-6 font-semibold text-left">
                  <h2 className="text-4xl lg:text-base"><strong>Name:</strong> {site.name}</h2>
                  <h2 className="hidden lg:block"><strong>About:</strong> {site.about}</h2>
                </div>
              </button>
            );
          })}
        </div>
        <Footer/>
      </section>
    </>
  );
};

export default Sites;
