import { Button } from '@material-tailwind/react';
import PropTypes from 'prop-types';
import DataTable from 'react-data-table-component';
import { Link } from 'react-router-dom';

const AllPetsTable = ({AllPets, handleDelete, handleAdopt}) => {
    const columns = [
        {
            name: 'ID',
            selector: (id, idx) => <span>{`${idx + 1} .`}</span>,
            sortable: true,
            maxWidth: "100px",
        },
        {
            name: 'Photo',
            selector: (data) => <div><img className='h-10 w-16 rounded-lg my-2 object-cover' src={data.petImageURL} alt="Pet Image" /></div>,
            sortable: true,
        },
        {
            name: 'Pet Name',
            selector: (data) => data.petName,
            sortable: true,

        },
        {
            name: 'Adopt Status',
            selector: (data) => <p>{data.adopted === true ? "Adopted" : "Not Adopted"}</p>,
        
        },
        {
            name: 'Adopt Status',
            selector: (data) => <div>
                <Button onClick={()=>handleAdopt(data._id)} disabled={data.adopted} className={`py-[6px] normal-case ${data.adopted ? "px-4" : "px-[23px] bg-green-500"}`}>{data.adopted ? "Adopted" : "Adopt"}</Button>
            </div>,

        },
        {
            name: 'Actions',
            selector: (data) => <div>
                <Link to={`/dashboard/pet-update/${data._id}`}><Button className='px-4 py-[6px] normal-case bg-green-500'>Update</Button></Link>
                <Button className='px-4 py-[6px] normal-case ml-2 bg-red-500' onClick={()=>handleDelete(data._id)}>Delete</Button>
            </div>,

        },

    ]

    return (
        <DataTable columns={columns}
            data={AllPets}
            highlightOnHover
            pagination
            persistTableHead />
    );
};


AllPetsTable.propTypes = {
    AllPets: PropTypes.array,
    handleUpdate: PropTypes.func,
    handleDelete: PropTypes.func,
    handleAdopt: PropTypes.func,
}


export default AllPetsTable;