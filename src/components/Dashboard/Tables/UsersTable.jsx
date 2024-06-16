import { Button } from '@material-tailwind/react';
import PropTypes from 'prop-types';
import DataTable from 'react-data-table-component';

const UsersTable = ({ users, handleAdmin }) => {

    const columns = [
        {
            name: 'ID',
            selector: (id, idx) => <span>{`${idx + 1} .`}</span>,
            sortable: true,
            maxWidth: "100px",
        },
        {
            name: 'Photo',
            selector: (data) => <div><img className='h-10 w-16 rounded-lg my-2 object-cover' src={data.photo} alt="Donation Image" /></div>,
            sortable: true,
        },
        {
            name: 'Email',
            selector: (data) => data.email,
            sortable: true,

        },
        {
            name: 'Name',
            selector: (data) => <p> {data.name}</p>,
            sortable: true,

        },
        {
            name: 'Ask for Refund',
            selector: (data) => <div>
                <Button disabled={data.role === 'admin'} onClick={() => handleAdmin(data._id)}>Make Admin</Button>
            </div>,

        },

    ]

    return (
        <DataTable columns={columns}
            data={users}
            highlightOnHover
            pagination
            persistTableHead />
    );
};

UsersTable.propTypes = {
    users: PropTypes.array,
    handleAdmin: PropTypes.func,

}

export default UsersTable;
