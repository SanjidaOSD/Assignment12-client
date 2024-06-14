import PropTypes from 'prop-types';
import DataTable from 'react-data-table-component';

const AdoptionRequestTable = ({ filteredPet, handleAccept, handleRemove, }) => {

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
            name: 'Phone',
            selector: (user) => user.userPhone,
            sortable: true,

        },
        {
            name: 'Address',
            selector: (user) => user.userAddress,
            sortable: true,

        },
        {
            name: 'Actions',
            selector: (data) => <div>
                <button disabled={data.status === 'accepted'} onClick={()=>handleAccept(data._id)} className={`cursor-pointer py-[6px] rounded-md  text-white font-semibold ${data.status === 'accepted' ? 'bg-blue-gray-700 px-5' : "px-[26px] bg-green-600" } `}>{data.status === 'accepted' ? 'Accepted' : 'Accept'}</button>
                <button onClick={()=>handleRemove(data._id)} className='px-5 py-[6px] rounded-md bg-red-600 ml-3 cursor-pointer text-white font-semibold'>Reject</button>
            </div>,
        },
        
    ]


    return (
        <DataTable columns={columns}
            data={filteredPet}
            highlightOnHover
            pagination
            persistTableHead />
    );
};

AdoptionRequestTable.propTypes = {
    filteredPet: PropTypes.array,
    handleAccept: PropTypes.func,
    handleRemove: PropTypes.func,

};

export default AdoptionRequestTable;