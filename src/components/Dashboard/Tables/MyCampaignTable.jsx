import { Button } from '@material-tailwind/react';
import PropTypes from 'prop-types';
import DataTable from 'react-data-table-component';
import { Progress } from "@material-tailwind/react";
import { Link } from 'react-router-dom';

const MyCampaignTable = ({ myCampaings, handlePause, handleActive }) => {
    const columns = [
        {
            name: 'ID',
            selector: (id, idx) => <span>{`${idx + 1} .`}</span>,
            sortable: true,
            maxWidth: "20px",
        },
        {
            name: 'Campaign Name',
            selector: (data) => <div>{data.campaignName}</div>,
            sortable: true,
            maxWidth: "200px"
        },
        {
            name: 'Max Donation Amount',
            selector: (data) => <div>{`$ ${data.maxDonationAmount}`}</div>,
            sortable: true,
            maxWidth: "200px"
        },
        {
            name: 'Donation Progress',
            selector: (data) => <div className='flex gap-3 items-center'>
                {`${parseInt(data.totalDonatedAmount / data.maxDonationAmount * 100)} %`}
                <Progress value={parseInt(data.totalDonatedAmount / data.maxDonationAmount * 100)} variant="gradient" className='w-[220px]' />
            </div>,
            sortable: true,
            minWidth: "250px"
        },
        {
            name: 'Pause Campaign',
            selector: (data) => <div>
                <Button onClick={() => handlePause(data._id)} disabled={data.pauseStatus} className={`py-[6px] normal-case ${data.pauseStatus ? "px-4" : "px-[23px] bg-green-500"}`}>{data.pauseStatus ? "Paused" : "Pause"}</Button>
                {
                    data.pauseStatus === true && <Button onClick={()=>handleActive(data._id)} className={`py-[6px] normal-case ml-3 px-5 bg-green-500`}> Active </Button>
                }
            </div>,
            minWidth:"200px"
        },
        {
            name: 'Edit Campaign',
            selector: (data) => <div>
                <Link to={`/dashboard/update-campaign/${data._id}`}><Button className={`py-[6px] normal-case px-8 bg-green-500`}> Edit </Button></Link>
            </div>,
        },
        {
            name: 'View Donators',
            selector: (data) => <div>
                <Button>View</Button>
            </div>,
        },

    ]

    return (
        <DataTable columns={columns}
            data={myCampaings}
            highlightOnHover
            pagination
            persistTableHead />
    );
};


MyCampaignTable.propTypes = {
    myCampaings: PropTypes.array,
    handlePause: PropTypes.func,
    handleActive: PropTypes.func,
}
export default MyCampaignTable;