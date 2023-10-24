import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import swal from 'sweetalert';


const ServiceDetails = () => {
    const [service, setService] = useState([]);
    const loadServices = useLoaderData();
    const { id } = useParams()
    console.log(id)
    useEffect(()=>{
        const findService = loadServices?.find(item => item.id == id)
        setService(findService)
    },[id, loadServices])
    const { title, picture, price, description, brand_members, albums } = service;

    const handelBook = () =>{
        swal("You have successfully Booked", "You clicked the button!", "success");
    }

    return (
        <div className="mt-12">
            <div className="card card-compact bg-base-100 shadow-xl">
                <figure><img className="w-3/4 h-96" src={picture} alt="" /></figure>
                <div className="card-body">
                    <div className="flex justify-between items-center">
                    <h2 className="card-title">{title}</h2>
                    <h2 className="card-title bg-red-600 px-6 py-3 text-white rounded-md">Price: ${price}</h2>
                    </div>
                    <p>{description}</p>
                    <div className="mt-4 grid grid-cols-1 lg:grid-cols-2 gap-8">
                        <div className="col-span-1 border-2 p-6">
                            <h1 className="text-xl font-semibold mb-4">Brand Members</h1>
                            <p>{brand_members}</p>
                        </div>
                        <div className="col-span-1 border-2 p-6">
                            <h1 className="text-xl font-semibold mb-4">Our Albums </h1>
                            <p>{albums}</p>
                        </div>
                    </div>
                    <div className="card-actions justify-center my-8">
                        <button onClick={handelBook} className="btn bg-red-600 text-white w-2/4">Book Your Concert</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ServiceDetails;