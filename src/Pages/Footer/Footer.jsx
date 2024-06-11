import {Typography} from "@material-tailwind/react";

const Footer = () => {

    const LINKS = [
        {
          title: "Product",
          items: ["Overview", "Features", "Solutions", "Tutorials"],
        },
        {
          title: "Company",
          items: ["About us", "Careers", "Press", "News"],
        },
        {
          title: "Resource",
          items: ["Blog", "Newsletter", "Events", "Help center"],
        },
      ];

    return (
        <div>
            <footer className="relative w-full">
                <div className="mx-auto w-full max-w-7xl px-8">
                    <div className="grid grid-cols-1 justify-between gap-4 md:grid-cols-2">
                        <Typography variant="h5" className="mb-6 flex gap-4 items-center">
                            <img className="h-10" src="https://i.postimg.cc/kg9MGmVF/Untitled-1.png" alt="" />
                            <h3 className="text-xl font-semibold">Pet House</h3>
                        </Typography>
                        <div className="grid grid-cols-3 justify-between gap-4">
                            {LINKS.map(({ title, items }) => (
                                <ul key={title}>
                                    <Typography
                                        variant="small"
                                        color="blue-gray"
                                        className="mb-3 font-medium opacity-40"
                                    >
                                        {title}
                                    </Typography>
                                    {items.map((link) => (
                                        <li key={link}>
                                            <Typography
                                                as="a"
                                                href="#"
                                                color="gray"
                                                className="py-1.5 font-normal transition-colors hover:text-blue-gray-900"
                                            >
                                                {link}
                                            </Typography>
                                        </li>
                                    ))}
                                </ul>
                            ))}
                        </div>
                    </div>
                    <div className="mt-12 flex w-full flex-col items-center justify-center border-t border-blue-gray-50 py-4 md:flex-row md:justify-between">
                        <Typography
                            variant="small"
                            className="mb-4 text-center font-normal text-blue-gray-900 md:mb-0"
                        >
                            &copy; 2024 <a href="https://material-tailwind.com/">Pet House</a>. All
                            Rights Reserved.
                        </Typography>
                        <div className="flex gap-4 text-blue-gray-900 sm:justify-center">
                            <Typography as="a" href="#" className="opacity-80 transition-opacity hover:opacity-100">
                                
                            </Typography>
                            <Typography as="a" href="#" className="opacity-80 transition-opacity hover:opacity-100">
                                
                            </Typography>
                            <Typography as="a" href="#" className="opacity-80 transition-opacity hover:opacity-100">
                                
                            </Typography>
                            <Typography as="a" href="#" className="opacity-80 transition-opacity hover:opacity-100">
                               
                            </Typography>
                            <Typography as="a" href="#" className="opacity-80 transition-opacity hover:opacity-100">
                                
                            </Typography>
                        </div>
                    </div>
                </div>
            </footer>
           

        </div>
    );
};

export default Footer;