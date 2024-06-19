
import PropTypes from 'prop-types';
import { FaLocationDot } from "react-icons/fa6";
import { Link } from 'react-router-dom';
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'


const PetCard = ({ pet }) => {

    return (
        <div>
            <div>
                {
                    pet.petImageURL ?
                        <img className='w-full h-[220px] object-cover rounded-t-lg' src={pet.petImageURL} alt="Pet Image" />
                        :
                        <h1><Skeleton /></h1>
                }
            </div>
            <div className='p-5 bg-blue-50 rounded-b-lg shadow-md'>
                <h2 className='text-2xl font-semibold'>{pet.petName || <Skeleton />}</h2>
                <h3 className='font-semibold text-lg py-2'> Pet Age : {pet.petAge || <Skeleton count={3} />} Years</h3>
                <p className='flex gap-3 items-center font-semibold'> <FaLocationDot />  {pet.petLocation || ""}</p>
                <div>
                    <Link to={`/pet-details/${pet._id || ""}`}><button className='w-full block mt-5 text-white hover:bg-gray-700 bg-gray-900 duration-300 px-5 text-center py-2 rounded-lg text-lg font-semibold'> See Details </button></Link>
                </div>
            </div>
        </div>
    );
};
PetCard.propTypes = {
    pet: PropTypes.object,
    isLoading: PropTypes.boolean,
};
export default PetCard;