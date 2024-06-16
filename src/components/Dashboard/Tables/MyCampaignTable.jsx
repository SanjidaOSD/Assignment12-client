import { Button } from '@material-tailwind/react';
import PropTypes from 'prop-types';
import DataTable from 'react-data-table-component';
import { Progress } from "@material-tailwind/react";
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { DialogPanel, Dialog, DialogTitle, Transition, TransitionChild } from '@headlessui/react';

const MyCampaignTable = ({ myCampaings, handlePause, handleActive }) => {

    let [isOpen, setIsOpen] = useState(false)

    function open() {
        setIsOpen(true)
    }

    function close() {
        setIsOpen(false)
    }

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
                    data.pauseStatus === true && <Button onClick={() => handleActive(data._id)} className={`py-[6px] normal-case ml-3 px-5 bg-green-500`}> Active </Button>
                }
            </div>,
            minWidth: "200px"
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
                <Button onClick={open} className='px-5 py-[6px]'>View</Button>
                <div>
                    <Transition appear show={isOpen}>
                        <Dialog as="div" className="relative z-10 focus:outline-none" onClose={close}>
                            <div className="fixed inset-0 z-10 w-screen overflow-y-auto bg-black bg-opacity-40">
                                <div className="flex min-h-full items-center justify-center p-4">
                                    <TransitionChild
                                        enter="ease-out duration-300"
                                        enterFrom="opacity-0 transform-[scale(95%)]"
                                        enterTo="opacity-100 transform-[scale(100%)]"
                                        leave="ease-in duration-200"
                                        leaveFrom="opacity-100 transform-[scale(100%)]"
                                        leaveTo="opacity-0 transform-[scale(95%)]"
                                    >
                                        <DialogPanel className="w-full max-w-md rounded-xl bg-white p-6 ">
                                            <DialogTitle as="h3" className="text-2xl font-semibold text-center text-gray-700">
                                                All Donators
                                            </DialogTitle>
                                            <div>
                                                {
                                                    data.donators.map((item, idx) => {
                                                        return <div key={idx}>
                                                            <div className='flex items-center py-[5px]'>
                                                                <div>
                                                                    <h3 className='mr-3'>{idx+1} . </h3>
                                                                </div>
                                                                <div className='flex justify-between items-center flex-grow'>
                                                                    <h2>{item.name}</h2>
                                                                    <p>$ {item.donatedAmount}</p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    })
                                                }
                                            </div>
                                        </DialogPanel>
                                    </TransitionChild>
                                </div>
                            </div>
                        </Dialog>
                    </Transition>
                </div>

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