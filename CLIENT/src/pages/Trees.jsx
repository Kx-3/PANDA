import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../context/authContext";
import { Link } from "react-router-dom";

const Trees = () => {
  const session = useContext(AuthContext);
  const [trees, setTrees] = useState([]);

  const fetchTrees = async () => {
    const options = {
      method: "GET"
    };
    const response = await fetch("http://127.0.0.1:8000/api/trees/", options);
    const data = await response.json();
    console.log(data);
    console.log(session.session);
    setTrees(data);
  };

  useEffect(() => {
    fetchTrees();
  }, []);

  return (
    <>
      <NavBar />
      <section className="flex flex-col items-center">
        <h1 className="font-poppins text-dark-teal text-5xl lg:text-6xl py-10 m-5">
          Tree Species
        </h1>
        <h3 className="font-raleway text-dark-teal text-2xl lg:text-3xl m-5">
          The following are the tree species available for planting through
          PANDA
        </h3>
        <div className="w-full flex flex-wrap justify-center py-10">
          {trees.map((tree) => {
            return (
              <Link key={tree.id} to={`/tree/${tree.id}`} state={tree}>
                <button className="w-[300px] h-[350px] flex flex-col bg-white font-raleway rounded-xl text-dark-teal border border-dark-teal m-4 hover:text-light-teal hover:border-light-teal focus:border-2 focus:border-light-teal focus:text-light-teal">
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
              </Link>
            );
          })}
        </div>
        <Footer/>
      </section>
    </>
  );
};

export default Trees;
