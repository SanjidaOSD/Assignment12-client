import { Button } from '@material-tailwind/react';
import PropTypes from 'prop-types';
import DataTable from 'react-data-table-component';

const MyDonationsTable = ({MyDonationsData, handleRefund}) => {

    const columns = [
        {
            name: 'ID',
            selector: (id, idx) => <span>{`${idx + 1} .`}</span>,
            sortable: true,
            maxWidth: "100px",
        },
        {
            name: 'Pet Image',
            selector: (data) => <div><img className='h-10 w-16 rounded-lg my-2 object-cover' src={data.petImage} alt="Donation Image" /></div>,
            sortable: true,
        },
        {
            name: 'Campaign Name',
            selector: (data) => data.petName,
            sortable: true,

        },
        {
            name: 'Donated Amount',
            selector: (data) => <p>$ { data.paidAmount}</p>,
            sortable: true,

        },
        {
            name: 'Ask for Refund',
            selector: (data) => <div>
                <Button onClick={()=>handleRefund(data._id)}>Refund</Button>
            </div> ,

        },

    ]

    return (
        <DataTable columns={columns}
            data={MyDonationsData}
            highlightOnHover
            pagination
            persistTableHead />
    );
};

MyDonationsTable.propTypes = {
    MyDonationsData: PropTypes.array,
    handleRefund: PropTypes.func,

}

export default MyDonationsTable;