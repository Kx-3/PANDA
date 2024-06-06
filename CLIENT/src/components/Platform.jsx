import Logo from "../assets/pandalogo.png";
import { Link } from "react-router-dom";

const Platform = () => {
  return (
    <section className="w-full bg-white font-poppins flex flex-col text-dark-teal">
      <div
        id="Kenya"
        className="p-5 w-full px-20 py-28 flex flex-col text-center justify-center items-center"
      >
        <h2 className="text-7xl my-8 font-semibold">
          Reforestration Made Easy
        </h2>
        <p className="font-raleway text-xl">
          We make reforesting the world and fighting climate change easy. Here
          is how.
        </p>
        <div className="m-10 w-[500px] py-5 border-2 border-black rounded-lg flex flex-col items-center">
          <h2 className="text-4xl my-8 font-medium text-black">
            Plant <span className="text-dark-teal">Trees</span>
          </h2>
          <p className="font-raleway text-xl">
            Plant trees around Kenya in a few clicks.
          </p>
          <div className="h-[120px] w-[100px]">
            <img
              className="w-full h-full object-contain"
              src={Logo}
              alt="Logo"
            />
          </div>
          <Link to="/plant">
            <button className="m-5 bg-dark-teal text-xl text-white hover:bg-light-teal px-5 py-2 rounded">
              Plant Trees
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Platform;
