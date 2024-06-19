import { useState } from 'react'
import { GrLogout } from 'react-icons/gr'
import { AiOutlineBars } from 'react-icons/ai'
import { NavLink } from 'react-router-dom'
import { Link } from 'react-router-dom'
import { FiPlusCircle } from "react-icons/fi";
import useAdmin from '../../../Hook/useAdmin'
import { ImSpinner } from 'react-icons/im';
import { BiSolidDonateHeart } from "react-icons/bi";
import { MdPets } from "react-icons/md";
import { IoArrowUndoOutline } from "react-icons/io5";
import { LuFileEdit } from "react-icons/lu";
import { MdFormatListBulleted } from "react-icons/md";
import { FaUsers } from "react-icons/fa";
import { MdOutlinePets } from "react-icons/md";
import UseAuth from '../../../Hook/UseAuth'



const Sidebar = () => {
    const [isActive, setActive] = useState(false)
    const { logout } = UseAuth()
    const [isAdmin, isAdminLoading] = useAdmin()
    const handleToggle = () => {
        setActive(!isActive)
    }

    if (isAdminLoading) {
        return <div className="h-full flex justify-center items-center text-green-500 pl-[10px] pr-[10px]"><ImSpinner className="animate-spin" /></div>
    }

    return (
        <>
            {/* Small Screen Navbar */}
            <div className='bg-blue-50 text-gray-800 flex justify-between md:hidden'>
                <div>
                    <div className='block cursor-pointer p-4 font-bold'>
                        <Link to='/' className='flex gap-5 items-center'>
                            <img
                                // className='hidden md:block'
                                src='https://i.postimg.cc/kg9MGmVF/Untitled-1.png'
                                alt='logo'
                                width='50'
                                height='50'
                            />
                            <h1 className="font-semibold text-2xl">Pet House</h1>
                        </Link>
                    </div>
                </div>

                <button
                    onClick={handleToggle}
                    className='mobile-menu-button p-4 focus:outline-none focus:bg-blue-50'
                >
                    <AiOutlineBars className='h-5 w-5' />
                </button>
            </div>

            {/* Sidebar */}
            <div
                className={`z-10 md:fixed flex flex-col justify-between overflow-x-hidden bg-blue-50 w-64 space-y-6 px-2 py-4 absolute inset-y-0 left-0 transform ${isActive && '-translate-x-full'
                    }  md:translate-x-0  transition duration-200 ease-in-out`}
            >
                <div>
                    <div>
                        <div className='w-full hidden md:flex px-4 py-2 shadow-lg rounded-lg justify-center items-center bg-rose-100 mx-auto'>
                            <Link to='/' className='flex items-center gap-5'>
                                <img
                                    // className='hidden md:block'
                                    src='https://i.postimg.cc/kg9MGmVF/Untitled-1.png'
                                    alt='logo'
                                    width='50'
                                    height='50'
                                />
                                <h1 className='text-2xl font-semibold'>Pet House</h1>
                            </Link>
                        </div>
                    </div>

                    {/* Nav Items */}
                    <div className='flex flex-col justify-between flex-1 mt-6'>
                        <nav>
                            {
                                isAdmin ?
                                    <>
                                        <NavLink
                                            to='/dashboard/users'
                                            className={({ isActive }) =>
                                                `flex items-center px-4 py-2 my-1  transition-colors duration-300 transform  hover:bg-gray-300   hover:text-gray-700 ${isActive ? 'bg-gray-300  text-gray-700' : 'text-gray-600'
                                                }`
                                            }
                                        >
                                            <span className='mx-4 font-medium flex items-center gap-3'> <FaUsers /> Users</span>
                                        </NavLink>
                                        <NavLink
                                            to='/dashboard/all-pets'
                                            className={({ isActive }) =>
                                                `flex items-center px-4 py-2 my-1  transition-colors duration-300 transform  hover:bg-gray-300   hover:text-gray-700 ${isActive ? 'bg-gray-300  text-gray-700' : 'text-gray-600'
                                                }`
                                            }
                                        >
                                            <span className='mx-4 font-medium flex items-center gap-3'> <MdOutlinePets /> All Pets</span>
                                        </NavLink>
                                        <NavLink
                                            to='/dashboard/all-donations'
                                            className={({ isActive }) =>
                                                `flex items-center px-4 py-2 my-1  transition-colors duration-300 transform  hover:bg-gray-300   hover:text-gray-700 ${isActive ? 'bg-gray-300  text-gray-700' : 'text-gray-600'
                                                }`
                                            }
                                        >
                                            <span className='mx-4 font-medium flex items-center gap-3'> <BiSolidDonateHeart /> All Donations Campaigns</span>
                                        </NavLink>
                                        <hr className='border border-dashed border-gray-400 my-5'></hr>
                                        <NavLink
                                            to='/dashboard/add-pet'
                                            className={({ isActive }) =>
                                                `flex items-center px-4 py-2 my-1  transition-colors duration-300 transform  hover:bg-gray-300   hover:text-gray-700 ${isActive ? 'bg-gray-300  text-gray-700' : 'text-gray-600'
                                                }`
                                            }
                                        >
                                            <span className='mx-4 font-medium flex items-center gap-3'> <FiPlusCircle /> Add Pet</span>
                                        </NavLink>
                                        <NavLink
                                            to='/dashboard/my-added-pets'
                                            className={({ isActive }) =>
                                                `flex items-center px-4 py-2 my-1  transition-colors duration-300 transform  hover:bg-gray-300   hover:text-gray-700 ${isActive ? 'bg-gray-300  text-gray-700' : 'text-gray-600'
                                                }`
                                            }
                                        >
                                            <span className='mx-4 font-medium flex items-center gap-3'> <MdPets /> My Added Pets</span>
                                        </NavLink>
                                        <NavLink
                                            to='/dashboard/adoption-request'
                                            className={({ isActive }) =>
                                                `flex items-center px-4 py-2 my-1  transition-colors duration-300 transform  hover:bg-gray-300   hover:text-gray-700 ${isActive ? 'bg-gray-300  text-gray-700' : 'text-gray-600'
                                                }`
                                            }
                                        >
                                            <span className='mx-4 font-medium flex items-center gap-3'> <IoArrowUndoOutline /> Adoption Request
                                            </span>
                                        </NavLink>
                                        <NavLink
                                            to='/dashboard/create-campaign'
                                            className={({ isActive }) =>
                                                `flex items-center px-4 py-2 my-1  transition-colors duration-300 transform  hover:bg-gray-300   hover:text-gray-700 ${isActive ? 'bg-gray-300  text-gray-700' : 'text-gray-600'
                                                }`
                                            }
                                        >
                                            <span className='mx-4 font-medium flex items-center gap-3'> <LuFileEdit /> Create Campaign
                                            </span>
                                        </NavLink>
                                        <NavLink
                                            to='/dashboard/my-campaign'
                                            className={({ isActive }) =>
                                                `flex items-center px-4 py-2 my-1  transition-colors duration-300 transform  hover:bg-gray-300   hover:text-gray-700 ${isActive ? 'bg-gray-300  text-gray-700' : 'text-gray-600'
                                                }`
                                            }
                                        >
                                            <span className='mx-4 font-medium flex items-center gap-3'> <MdFormatListBulleted /> My Campaigns
                                            </span>
                                        </NavLink>
                                        <NavLink
                                            to='/dashboard/my-donations'
                                            className={({ isActive }) =>
                                                `flex items-center px-4 py-2 my-1  transition-colors duration-300 transform  hover:bg-gray-300   hover:text-gray-700 ${isActive ? 'bg-gray-300  text-gray-700' : 'text-gray-600'
                                                }`
                                            }
                                        >
                                            <span className='mx-4 font-medium flex items-center gap-3'> <BiSolidDonateHeart /> My Donations
                                            </span>
                                        </NavLink>
                                    </>
                                    :
                                    <>

                                        <NavLink
                                            to='/dashboard/add-pet'
                                            className={({ isActive }) =>
                                                `flex items-center px-4 py-2 my-1  transition-colors duration-300 transform  hover:bg-gray-300   hover:text-gray-700 ${isActive ? 'bg-gray-300  text-gray-700' : 'text-gray-600'
                                                }`
                                            }
                                        >
                                            <span className='mx-4 font-medium flex items-center gap-3'> <FiPlusCircle /> Add Pet</span>
                                        </NavLink>
                                        <NavLink
                                            to='/dashboard/my-added-pets'
                                            className={({ isActive }) =>
                                                `flex items-center px-4 py-2 my-1  transition-colors duration-300 transform  hover:bg-gray-300   hover:text-gray-700 ${isActive ? 'bg-gray-300  text-gray-700' : 'text-gray-600'
                                                }`
                                            }
                                        >
                                            <span className='mx-4 font-medium flex items-center gap-3'> <MdPets /> My Added Pets</span>
                                        </NavLink>
                                        <NavLink
                                            to='/dashboard/adoption-request'
                                            className={({ isActive }) =>
                                                `flex items-center px-4 py-2 my-1  transition-colors duration-300 transform  hover:bg-gray-300   hover:text-gray-700 ${isActive ? 'bg-gray-300  text-gray-700' : 'text-gray-600'
                                                }`
                                            }
                                        >
                                            <span className='mx-4 font-medium flex items-center gap-3'> <IoArrowUndoOutline /> Adoption Request
                                            </span>
                                        </NavLink>
                                        <NavLink
                                            to='/dashboard/create-campaign'
                                            className={({ isActive }) =>
                                                `flex items-center px-4 py-2 my-1  transition-colors duration-300 transform  hover:bg-gray-300   hover:text-gray-700 ${isActive ? 'bg-gray-300  text-gray-700' : 'text-gray-600'
                                                }`
                                            }
                                        >
                                            <span className='mx-4 font-medium flex items-center gap-3'> <LuFileEdit /> Create Campaign
                                            </span>
                                        </NavLink>
                                        <NavLink
                                            to='/dashboard/my-campaign'
                                            className={({ isActive }) =>
                                                `flex items-center px-4 py-2 my-1  transition-colors duration-300 transform  hover:bg-gray-300   hover:text-gray-700 ${isActive ? 'bg-gray-300  text-gray-700' : 'text-gray-600'
                                                }`
                                            }
                                        >
                                            <span className='mx-4 font-medium flex items-center gap-3'> <MdFormatListBulleted /> My Campaigns
                                            </span>
                                        </NavLink>
                                        <NavLink
                                            to='/dashboard/my-donations'
                                            className={({ isActive }) =>
                                                `flex items-center px-4 py-2 my-1  transition-colors duration-300 transform  hover:bg-gray-300   hover:text-gray-700 ${isActive ? 'bg-gray-300  text-gray-700' : 'text-gray-600'
                                                }`
                                            }
                                        >
                                            <span className='mx-4 font-medium flex items-center gap-3'> <BiSolidDonateHeart /> My Donations
                                            </span>
                                        </NavLink>
                                    </>
                            }
                        </nav>
                    </div>
                </div>

                <div>
                    <hr />

                    {/* Profile Menu */}
                    <NavLink
                        to='/'
                        className={({ isActive }) =>
                            `flex items-center px-4 py-2 my-1  transition-colors duration-300 transform  hover:bg-gray-300   hover:text-gray-700 ${isActive ? 'bg-gray-300  text-gray-700' : 'text-gray-600'
                            }`
                        }
                    >


                        <span className='mx-4 font-medium'>Home</span>
                    </NavLink>
                    <NavLink
                        to='/pet-listing'
                        className={({ isActive }) =>
                            `flex items-center px-4 py-2 my-1  transition-colors duration-300 transform  hover:bg-gray-300   hover:text-gray-700 ${isActive ? 'bg-gray-300  text-gray-700' : 'text-gray-600'
                            }`
                        }
                    >


                        <span className='mx-4 font-medium'>Pet Listing</span>
                    </NavLink>
                    <NavLink
                        to='/donation-campaigns'
                        className={({ isActive }) =>
                            `flex items-center px-4 py-2 my-1  transition-colors duration-300 transform  hover:bg-gray-300   hover:text-gray-700 ${isActive ? 'bg-gray-300  text-gray-700' : 'text-gray-600'
                            }`
                        }
                    >


                        <span className='mx-4 font-medium'>Donation Campaign</span>
                    </NavLink>
                    <button
                        onClick={logout}
                        className='flex w-full items-center px-4 py-2 mt-1 text-gray-600 hover:bg-gray-300   hover:text-gray-700 transition-colors duration-300 transform'
                    >
                        <GrLogout className='w-5 h-5' />

                        <span className='mx-4 font-medium'>Logout</span>
                    </button>
                </div>
            </div>
        </>
    );
};

export default Sidebar;