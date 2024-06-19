import { PropTypes } from 'prop-types';
import { Link } from 'react-router-dom';

const CampCard = ({ campaign }) => {
    const {_id, campaignName, donationImageURL, maxDonationAmount } = campaign || {}
    return (
        <div>
            <div>
                <img className='w-full h-[220px] object-cover rounded-lg' src={donationImageURL} alt="Pet Image" />
            </div>
            <div className='p-5 bg-blue-50 rounded-b-lg shadow-md'>
                <h2 className='text-2xl font-semibold'>{campaignName}</h2>
                <h3 className='font-semibold text-lg py-2'> Maximum Donation Amount : $ {maxDonationAmount}</h3>
                <p className='flex gap-3 items-center font-semibold'></p>
                <div>
                    <Link to={`/campaign-details/${_id}`}><button className='w-full block mt-5 text-white hover:bg-gray-700 duration-300 bg-gray-900 px-5 text-center py-2 rounded-lg text-lg font-semibold'> See Details </button></Link>
                </div>
            </div>
        </div>
    );
};


CampCard.propTypes = {
    campaign: PropTypes.object,
};

export default CampCard;