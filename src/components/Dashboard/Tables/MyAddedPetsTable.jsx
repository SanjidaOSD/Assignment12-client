import { Button } from '@material-tailwind/react';
import PropTypes from 'prop-types';
import DataTable from 'react-data-table-component';
import { Link } from 'react-router-dom';

const MyAddedPetsTable = ({ myAddedPets, handlePetDelete, handleAdoptions }) => {

    const columns = [
        {
            name: 'ID',
            selector: (id, idx) => <span>{`${idx + 1} .`}</span>,
            sortable: true,
            maxWidth: "100px",
        },
        {
            name: 'Pet Name',
            selector: (pet) => pet.petName,
            sortable: true,
        },
        {
            name: 'Pet Category',
            selector: (pet) => pet.petCategory,
            sortable: true,
            maxWidth: "200px"

        },
        {
            name: 'Pet Image',
            selector: (pet) => <img className='w-12 h-8 object-cover my-2 rounded-md' src={pet.petImageURL} alt="Pet Image" />,
            sortable: true,
            maxWidth: "120px",
        },
        {
            name: 'Adoption Status',
            selector: (pet) => <p>{pet.adopted ? "Adopted" : "Not Adopted"}</p>,
            sortable: true
        },
        {
            name: 'Actions',
            selector: (pet) => <div>
                <Link to={`/dashboard/pet-update/${pet._id}`}><Button className='px-5 py-2 mr-2'>Update</Button></Link>
                <Button onClick={()=>handlePetDelete(pet._id)} className='px-5 py-2 mr-2'>Delete</Button>
                <Button onClick={()=>handleAdoptions(pet._id)} className='px-5 py-2 mr-2'>Adopted</Button>
            </div>,
            minWidth : "400px"
        },
    ]

    return (
        <DataTable columns={columns}
            data={myAddedPets}
            highlightOnHover
            pagination
            persistTableHead />
    );
};

MyAddedPetsTable.propTypes = {
    myAddedPets: PropTypes.array,
    handlePetDelete: PropTypes.func,
    handleAdoptions: PropTypes.func,

};

export default MyAddedPetsTable;