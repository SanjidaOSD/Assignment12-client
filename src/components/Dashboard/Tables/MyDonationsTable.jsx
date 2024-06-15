import PropTypes from 'prop-types';
import DataTable from 'react-data-table-component';

const MyDonationsTable = ({MyDonationsData}) => {

    const columns = [
        {
            name: 'ID',
            selector: (id, idx) => <span>{`${idx + 1} .`}</span>,
            sortable: true,
            maxWidth: "100px",
        },
        {
            name: 'Name',
            selector: (user) => user.userName,
            sortable: true,
        },
        {
            name: 'Email',
            selector: (user) => user.userEmail,
            sortable: true,

        },
        {
            name: 'Amount',
            selector: (user) => user.amount,
            sortable: true,

        },
        {
            name: 'Address',
            selector: (user) => user.userAddress,
            sortable: true,

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

}

export default MyDonationsTable;