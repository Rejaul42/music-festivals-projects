import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
const Service = ({ service }) => {
    const { id, title, picture, price, description } = service;
    return (
        <div>
            <div className="card  bg-base-100 shadow-xl">
                <figure><img className='rounded-lg h-48 w-80' src={picture} alt="" /></figure>
                <div className="card-body">
                    <div className='flex items-center justify-between'>
                        <h2 className="card-title">{title}</h2>
                        <h2 className='text-end text-green-600 text-xl font-semibold'>Price: ${price}</h2>
                    </div>
                    <div>
                        {
                            description.length > 200 ?
                                `${description.slice(0, 200)}....` :
                                {
                                    description
                                }
                        }
                    </div>
                    <div className="card-actions ">
                        <button className="btn bg-[#4D4844B3] text-white w-full"><Link to={`/service-details/${id}`}>View Details</Link></button>
                    </div>
                </div>
            </div>
        </div>
    );
};
Service.propTypes = {
    service: PropTypes.object
}
export default Service;