import {
    Navbar,
    Collapse,
    Typography,
    IconButton,
    Button,
    Menu,
    MenuHandler,
    MenuList,
    MenuItem,
    Avatar,
} from "@material-tailwind/react";
import { MdOutlineSpaceDashboard } from "react-icons/md";
import { useEffect, useState } from "react";
import { FaBars, FaUser, FaXmark } from "react-icons/fa6";
import { Link, NavLink } from "react-router-dom";
import { ImSpinner } from "react-icons/im";
import UseAuth from "../../Hook/UseAuth";
import useAdmin from "../../Hook/useAdmin";
import ThemeController from "../ThemeController/ThemeController";

const Menubar = () => {
    const [isAdmin, isAdminLoading] = useAdmin();
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isSecondMenuOpen, setIsSecondMenuOpen] = useState(false);
    const closeMenu = () => setIsMenuOpen(false);
    const closeSecondMenu = () => setIsSecondMenuOpen(false);
    const [openNav, setOpenNav] = useState(false);
    const { user, isUserLoading, logout } = UseAuth();
    const [theme, setTheme] = useState(false);
    const [themeClicked, setThemeClicked] = useState(false)

    const handleTheme = (e) => {
        if (e.target.checked) {
            setTheme(true);
            setThemeClicked(true)
            localStorage.setItem('theme-color', 'dark')
        }
        else {
            setTheme(false)
            setThemeClicked(false)
            localStorage.setItem('theme-color', 'light')
        }
    }

    const themeControl = (theme) =>{
        if(theme === "dark"){
            document.querySelector('body').classList.add("dark-theme")
            document.querySelector('body').classList.remove("light-theme")
        }else{
            document.querySelector('body').classList.add("light-theme")
            document.querySelector('body').classList.remove("dark-theme")
        }
    }

    useEffect(() => {
        const savedTheme = localStorage.getItem('theme-color');
        themeControl(savedTheme)
    }, [theme])

    const handleWindowResize = () =>
        window.innerWidth >= 960 && setOpenNav(false);

    useEffect(() => {
        window.addEventListener("resize", handleWindowResize);

        return () => {
            window.removeEventListener("resize", handleWindowResize);
        };
    }, []);

    return (
        <>
            <Navbar className="mx-auto container px-5 py-3 rounded-none shadow-none bg-transparent border-none">
                <div className="flex items-center justify-between text-blue-gray-900">
                    <Typography
                        as="a"
                        href="/"
                        variant="h6"
                        className="mr-4 cursor-pointer py-1.5 flex items-center gap-4"
                    >
                        <img className="w-10" src="https://i.postimg.cc/kg9MGmVF/Untitled-1.png" alt="Logo" />
                        <h3 className="text-xl">Pet House</h3>
                    </Typography>
                    <div className="hidden lg:flex gap-5">
                        <ul className="my-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
                            <Typography
                                as="li"
                                variant="small"
                                color="blue-gray"
                                className="p-1 font-medium"
                            >
                                <NavLink to={'/'} className="flex items-center hover:text-red-500 border-b-2 border-transparent font-semibold transition-colors">
                                    Home
                                </NavLink>
                            </Typography>
                            <Typography
                                as="li"
                                variant="small"
                                color="blue-gray"
                                className="p-1 font-medium"
                            >
                                <NavLink to={'/pet-listing'} className="flex items-center hover:text-red-500 border-b-2 border-transparent font-semibold transition-colors">
                                    Pet Listing
                                </NavLink>
                            </Typography>
                            <Typography
                                as="li"
                                variant="small"
                                color="blue-gray"
                                className="p-1 font-medium"
                            >
                                <NavLink to={'/donation-campaigns'} className="flex items-center hover:text-red-500 border-b-2 border-transparent font-semibold transition-colors">
                                    Donation Campaigns
                                </NavLink>
                            </Typography>

                        </ul>
                        <div className="mt-[2px]">
                            <ThemeController handleTheme={handleTheme} themeClicked={themeClicked}/>
                        </div>
                        <div>
                            {
                                !isAdminLoading && !isUserLoading && user ?
                                    <div>
                                        <Menu open={isMenuOpen} handler={setIsMenuOpen} placement="bottom-end">
                                            <MenuHandler>
                                                <div
                                                    color="white"
                                                    className="flex items-center rounded-full mx-auto cursor-pointer"
                                                >
                                                    <Button className="p-0 bg-transparent rounded-full">
                                                        <img className="h-8 w-8 border-2 border-red-500 rounded-full" src={user?.photoURL} alt="User Photo" />
                                                    </Button>
                                                </div>
                                            </MenuHandler>
                                            <MenuList className="p-1">
                                                return (
                                                <MenuItem
                                                    onClick={closeMenu}
                                                    className={`flex items-start flex-col gap-2 rounded hover:bg-white focus:bg-white`}
                                                >
                                                    <Typography
                                                        as="li"
                                                        variant="small"
                                                        color="blue-gray"
                                                        className="p-1 font-medium"
                                                    >

                                                        <button disabled className="flex gap-2 items-center">
                                                            <FaUser className="mb-1" />
                                                            <span className="font-semibold">{user?.displayName}</span>
                                                        </button>

                                                    </Typography>
                                                    <Typography
                                                        as="li"
                                                        variant="small"
                                                        color="blue-gray"
                                                        className="p-1 font-medium"
                                                    >
                                                        <Link to={`${isAdmin ? "/dashboard/users" : "/dashboard/add-pet"}`} className="flex gap-2 items-center hover:text-red-500 border-b-2 border-transparent font-semibold transition-colors">
                                                            <MdOutlineSpaceDashboard className="text-lg -ml-[2px]" />
                                                            Dashboard
                                                        </Link>
                                                    </Typography>
                                                    <Typography
                                                        as="li"
                                                        variant="small"
                                                        color="blue-gray"
                                                        className="p-1 font-medium w-full"
                                                    >
                                                        <Button onClick={logout} className="bg-red-500 w-full px-5 py-2 normal-case tracking-wide">
                                                            Log Out
                                                        </Button>
                                                    </Typography>
                                                </MenuItem>
                                                );

                                            </MenuList>
                                        </Menu>
                                    </div>
                                    :
                                    isAdminLoading && isUserLoading && !user ? <div className="h-full flex justify-center items-center text-red-500 pl-[10px] pr-[10px]"><ImSpinner className="animate-spin" /></div> :
                                        <Button className="btn bg-red-500 py-2 px-4 rounded-md normal-case"> <Link to={'/login'} >Join Now</Link> </Button>
                            }
                        </div>
                    </div>
                    <IconButton
                        variant="text"
                        className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
                        ripple={false}
                        onClick={() => setOpenNav(!openNav)}
                    >
                        {openNav ? (
                            <FaXmark className="h-6 w-6" strokeWidth={2} />
                        ) : (
                            <FaBars className="h-6 w-6" strokeWidth={2} />
                        )}
                    </IconButton>
                </div>
                <Collapse open={openNav}>
                    <div className="block lg:hidden">
                        <ul className="my-2 flex flex-col text-center gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
                            <Typography
                                as="li"
                                variant="small"
                                color="blue-gray"
                                className="p-1 font-medium mx-auto inline-block"
                            >
                                <NavLink to={'/'} className="flex items-center hover:text-red-500 border-b-2 border-transparent font-semibold transition-colors">
                                    Home
                                </NavLink>
                            </Typography>
                            <Typography
                                as="li"
                                variant="small"
                                color="blue-gray"
                                className="p-1 font-medium mx-auto inline-block"
                            >
                                <NavLink to={'/pet-listing'} className="flex items-center hover:text-red-500 border-b-2 border-transparent font-semibold transition-colors">
                                    Pet Listing
                                </NavLink>
                            </Typography>
                            <Typography
                                as="li"
                                variant="small"
                                color="blue-gray"
                                className="p-1 font-medium mx-auto inline-block"
                            >
                                <NavLink to={'/donation-campaigns'} className="flex items-center hover:text-red-500 border-b-2 border-transparent font-semibold transition-colors">
                                    Donation Campaigns
                                </NavLink>
                            </Typography>
                            <Typography
                                as="li"
                                variant="small"
                                color="blue-gray"
                                className="p-1 font-medium mx-auto inline-block"
                            >

                            </Typography>
                        </ul>

                        <div>
                            <Menu open={isSecondMenuOpen} handler={setIsSecondMenuOpen} placement="top-center">
                                <MenuHandler>
                                    <div
                                        color="white"
                                        className="flex items-center rounded-full mx-auto cursor-pointer"
                                    >
                                        <Button className="p-0 bg-transparent rounded-full mx-auto">
                                            <Avatar
                                                variant="circular"
                                                size="sm"
                                                alt="tania andrew"
                                                className="border border-gray-900 p-0.5"
                                                src={user?.photoURL}
                                            />
                                        </Button>
                                    </div>
                                </MenuHandler>
                                <MenuList className="p-1">
                                    return (
                                    <MenuItem
                                        onClick={closeSecondMenu}
                                        className={`flex items-start flex-col gap-2 rounded hover:bg-white focus:bg-white`}
                                    >
                                        <Typography
                                            as="li"
                                            variant="small"
                                            color="blue-gray"
                                            className="p-1 font-medium"
                                        >
                                            <Link to={` ${isAdmin ? "/dashboard/users" : "/dashboard/add-pet"}`} className="flex gap-2 items-center hover:text-red-500 border-b-2 border-transparent font-semibold transition-colors">
                                                <MdOutlineSpaceDashboard className="text-lg -ml-[2px]" />
                                                Dashboard
                                            </Link>
                                        </Typography>
                                        <Typography
                                            as="li"
                                            variant="small"
                                            color="blue-gray"
                                            className="p-1 font-medium w-full"
                                        >
                                            <Button onClick={logout} className="bg-red-500 w-full px-5 py-2 normal-case tracking-wide">
                                                Log Out
                                            </Button>
                                        </Typography>
                                    </MenuItem>
                                    );

                                </MenuList>
                            </Menu>
                        </div>
                    </div>
                </Collapse>

            </Navbar>
        </>
    );
};

export default Menubar;