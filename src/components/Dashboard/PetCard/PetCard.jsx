import PropTypes from 'prop-types';
import { GrLocation } from "react-icons/gr";
import { Link } from 'react-router-dom';

const PetCard = ({ pet }) => {
    const { _id, petImageURL, petName, petAge, petLocation } = pet || {}
    return (
        <div>
            <div>
                <img className='w-full h-[220px] object-cover rounded-lg' src={petImageURL} alt="Pet Image" />
            </div>
            <div className='p-5 bg-gray-50 rounded-b-lg shadow-md'>
                <h2 className='text-2xl font-semibold'>{petName}</h2>
                <h3 className='font-semibold text-lg py-2'> Pet Age : {petAge} Years</h3>
                <p className='flex gap-3 items-center font-semibold'> <GrLocation />  {petLocation}</p>
                <div>
                    <Link to={`/pet-details/${_id}`}><button className='w-full block mt-5 hover:text-white hover:bg-gray-700 duration-300 bg-gray-200 px-5 text-center py-2 rounded-lg text-lg font-semibold'> See Details </button></Link>
                </div>
            </div>
        </div>
    );
};
PetCard.propTypes = {
    pet: PropTypes.object,
};
export default PetCard;