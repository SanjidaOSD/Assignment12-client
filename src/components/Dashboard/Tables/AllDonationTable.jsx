import { Button } from '@material-tailwind/react';
import PropTypes from 'prop-types';
import DataTable from 'react-data-table-component';
import { Link } from 'react-router-dom';

const AllDonationTable = ({ AllDonationCampaigns, handleDelete, handlePause }) => {


    const columns = [
        {
            name: 'ID',
            selector: (id, idx) => <span>{`${idx + 1} .`}</span>,
            sortable: true,
            maxWidth: "100px",
        },
        {
            name: 'Campaign Photo',
            selector: (data) => <div><img className='h-10 w-16 rounded-lg my-2 object-cover' src={data.donationImageURL} alt="Pet Image" /></div>,
            sortable: true,
        },
        {
            name: 'Campaign Name',
            selector: (data) => data.campaignName,
            sortable: true,

        },
        {
            name: 'Campaign Status',
            selector: (data) => <p>{data.pauseStatus === true ? "Paused" : "Active"}</p>,

        },
        {
            name: 'Pause Campaign',
            selector: (data) => <div>
                <Button onClick={() => handlePause(data._id)} disabled={data.pauseStatus} className={`py-[6px] normal-case ${data.adopted ? "px-4" : "px-[23px] bg-green-500"}`}>{data.pauseStatus ? "Paused" : "Pause"}</Button>
            </div>,
        },
        {
            name: 'Actions',
            selector: (data) => <div>
                <Link to={`/dashboard/pet-update/${data._id}`}><Button className='px-4 py-[6px] normal-case bg-green-500'>Update</Button></Link>
                <Button className='px-4 py-[6px] normal-case ml-2 bg-red-500' onClick={() => handleDelete(data._id)}>Delete</Button>
            </div>,

        },

    ]

    return (
        <DataTable columns={columns}
            data={AllDonationCampaigns}
            highlightOnHover
            pagination
            persistTableHead />
    );
};

AllDonationTable.propTypes = {
    AllDonationCampaigns: PropTypes.array,
    handleDelete: PropTypes.func,
    handlePause: PropTypes.func,
}

export default AllDonationTable;