import "../Banner/banner.css"
const Banner = () => {
    return (
        <div className=" banner">
            <div>
            <h1 className=" h-screen text-3xl md:text-5xl lg:text-7xl text-white font-extrabold flex justify-center items-center ">
                <p> Do not miss the <br /> <span className="text-red-500">Music</span> Magic Moments and<br />Epic <span className="text-red-500">Concert</span> Experience</p>
            </h1>
            </div>
        </div>
    );
};

export default Banner;