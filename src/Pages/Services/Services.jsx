import { useEffect, useState } from "react";
import Service from "../Service/Service";
const Services = () => {
    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch('services.json')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])
    return (
        <div className=" my-12 mx-auto">
            <h1 className="text-4xl text-red-500 font-bold mb-12 text-center">Services</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                {
                    services?.map(service => <Service key={service.id} service={service} ></Service>)
                }
            </div>
        </div>
    );
};

export default Services;