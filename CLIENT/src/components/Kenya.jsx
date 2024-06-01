import SeedlingPic from "../assets/seedlings-water.webp"

const Kenya = () => {
    return (
        <section className="bg-background font-poppins flex flex-col text-dark-teal">
            <div id="Kenya" className="px-20 py-28 scroll-m-10">
                <h2 className="text-7xl my-8 font-semibold">Why Kenya?</h2>
                <p className="font-raleway font-semibold text-xl">Kenya currently has one of the lowest forest cover percentages of 8% compared to the global average of 30%. The combination of logging, charcoal burning, and illegal settlements all contribute to the loss of forests.</p>
            </div>
            <div className="w-full">
                <img className="w-full h-full object-contain" src={SeedlingPic} alt="" />
            </div>
            <div id="mission" className="px-20 py-28 flex flex-col text-center items-center scroll-m-10">
                <h2 className="w-2/3 text-5xl my-7">On a mission to plant <strong>15 billion trees by 2032</strong></h2>
                <p className="font-raleway text-xl">The Kenyan government launched a campaign to plant 15 billion trees in ten years from 2022 in a bid to reach 30% tree cover in Kenya. The campaign aims at reducing greenhouse emissions, stopping, and reversing deforestation. Tree planting has emerged as a powerful sustainable solution to mitigate the adverse effects of climate change and reduce environmental degradation.</p>
            </div>
        </section>
    )
}

export default Kenya