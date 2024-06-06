import { useLocation } from "react-router-dom";
import NavBar from "../components/NavBar";

const Tree = () => {
  const tree = useLocation().state;
  return (
    <>
      <NavBar />
      <section className="flex flex-col lg:flex-row lg:px-16 lg:py-10">
        <div className="w-full h-[60vh] lg:w-1/2 lg:h-full">
          <img
            className="h-full w-full object-cover"
            src={tree.img_url}
            alt=""
          />
        </div>
        <div className="font-raleway font-medium text-2xl w-full lg:w-[40vw] text-dark-teal pl-10 py-10 lg:pt-0">
            <h1><strong>Name:</strong> {tree.name}</h1>
            <h1><strong>Common Name:</strong> {tree.common_name}</h1>
            <h1><strong>CO2 Offset:</strong> {tree.co2}KG</h1>
            <h1><strong>Description:</strong> {tree.description}</h1>
        </div>
      </section>
    </>
  );
};

export default Tree;
