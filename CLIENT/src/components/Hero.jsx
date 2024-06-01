import Seedling from "../assets/hands-seedling.webp"

const Hero = () => {
    return (
        <section className="w-full h-screen font-poppins flex px-20 py-10 items-center">
            <div className="w-1/2">
                <h1 className="text-dark-teal text-7xl my-8 font-bold">Join us to reforest Kenya</h1>
                <p className="font-semibold font-raleway my-5 text-xl text-dark-teal">The simplest way for citizens and companies to plant trees around Kenya and offset their CO2 emissions</p>
            </div>
            <div className="w-1/2">
                <img className="object-contain w-full h-full" src={Seedling} alt="" />
            </div>
        </section>
    )
}

export default Hero