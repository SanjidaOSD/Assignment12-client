import { Button } from '@material-tailwind/react';
import PropTypes from 'prop-types';
import DataTable from 'react-data-table-component';

const MyAddedPetsTable = ({myAddedPets}) => {

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
            selector: (pet) => <img className='w-12 my-2 rounded-md' src={pet.petImage} alt="Pet Image" />,
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
                <Button className='px-5 py-2 mr-2'>Update</Button>
                <Button className='px-5 py-2 mr-2'>Delete</Button>
                <Button className='px-5 py-2 mr-2'>Adopted</Button>
            </div>,
            width : "400px"
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
};

export default MyAddedPetsTable;