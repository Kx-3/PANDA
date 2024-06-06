import Logo from "../assets/pandalogo.png";
import { Link } from "react-router-dom";


const Footer = () => {
  return (
    <section className="relative h-[40vh] md:h-[50vh] w-full bg-footer flex px-10 lg:px-20 pt-10 flex-wrap box-border">
      <div className="h-[200px] w-[200px]">
        <img className="w-full h-full object-contain" src={Logo} alt="Logo" />
      </div>
      <div className="font-raleway text-light-teal flex flex-col gap-2 mx-20 text-xl">
        <h3 className="text-white mb-3">Quick Links</h3>
        <Link to="/plant">Plant</Link>
        <Link to="/trees">Trees</Link>
        <Link to="/sites">Sites</Link>
      </div>
      <div className="text-gray-400 flex justify-center w-full items-center"><p>Terms of Service . Privacy Policy . Copyright &copy; PANDA</p></div>
    </section>
  );
};

export default Footer;
