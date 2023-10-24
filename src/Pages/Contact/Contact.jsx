
const Contact = () => {
    return (
        <div className="text-center p-12 -mb-12">
            <div>
                <h1 className="text-4xl text-red-500 font-bold mb-12 text-center">Contact Us</h1>
                <div className=" border-2 p-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4  ">
                    <div className="card w-78 bg-base-100 shadow-xl">
                        <div className="card-body">
                            <h1 className="text-3xl font-semibold">Email</h1>
                            <p><span className="font-medium">Contact mail:</span> sound@safari.com <small>(Available: 24/7)</small> </p>
                            <p><span className="font-medium">Yahoo mail:</span> soundsafari@yahoo.com <small>(Available: 24/7)</small> </p>
                        </div>
                    </div>
                    <div className="card w-78 bg-base-100 shadow-xl">
                        <div className="card-body">
                            <h1 className="text-3xl font-semibold">Phone</h1>
                            <p><span className="font-medium">Mobile: </span>+880 1700000000 <small> (Available: 9am - 8pm)</small></p>
                            <p><span className="font-medium">Telephone:</span> +938792921 <small> (Available: 9am - 8pm)</small></p>
                        </div>
                    </div>
                    <div className="card w-78 bg-base-100 shadow-xl">
                        <div className="card-body">
                            <h1 className="text-3xl font-semibold">Address</h1>
                            <p>82/2, New Elephant Road, <br/> Dhaka, Bangladesh</p>
                            <p className="font-semibold">Open: 9am - 8pm</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;