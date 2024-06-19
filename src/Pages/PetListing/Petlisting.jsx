import { Helmet } from "react-helmet";
import PetCard from "../../components/Dashboard/PetCard/PetCard";
import { useEffect, useRef, useState } from "react";
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
import useAxiosSecure from "../../Hook/useAxiosSecure";

const PetListing = () => {
    const axiosSecure = useAxiosSecure();
    const [pets, setPets] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [hasMore, setHasMore] = useState(true);
    const [page, setPage] = useState(0);
    const [search, setSearch] = useState("");
    const [selectedCategory, setSelectedCategory] = useState("");
    const elementRef = useRef(null);

    const fetchMoreItems = async () => {
        setIsLoading(true);
        try {
            const { data } = await axiosSecure.get(`/pets?search=${search}&category=${selectedCategory}&limit=6&skip=${page * 6}`);
            if (data.length === 0) {
                setHasMore(false);
            } else {
                setPets((previousPets) => [...previousPets, ...data]);
                setPage((previousPage) => previousPage + 1);
            }
        } catch (error) {
            console.error("Error fetching pets:", error);
        } finally {
            setIsLoading(false);
        }
    };

    const onIntersection = (entries) => {
        const firstEntry = entries[0];
        if (firstEntry.isIntersecting && hasMore && !isLoading) {
            fetchMoreItems();
        }
    };

    useEffect(() => {
        const observer = new IntersectionObserver(onIntersection);
        if (elementRef.current) {
            observer.observe(elementRef.current);
        }

        return () => {
            if (observer) {
                observer.disconnect();
            }
        };
    }, [elementRef.current, hasMore, isLoading]);

    useEffect(() => {
        setPets([]);
        setPage(0);
        setHasMore(true);
        fetchMoreItems();
    }, [search, selectedCategory]);

    const handleSearch = (e) => {
        e.preventDefault();
        const searchValue = e.target.search.value || "";
        setSearch(searchValue);
    };

    const handleCategoryChange = (e) => {
        setSelectedCategory(e.target.value);
    };

    return (
        <div>
            <Helmet>
                <title>Pet Listing | Pet House</title>
            </Helmet>
            <h1 className="text-2xl font-semibold text-center pt-5 pb-8">Pet Listing</h1>
            <div className="pb-8">
                <form onSubmit={handleSearch} className="flex w-full justify-center items-center gap-5">
                    <div>
                        <select name="category" value={selectedCategory} onChange={handleCategoryChange} className="block max-w-[260px] mx-auto py-2 px-5 bg-blue-50 font-semibold border rounded-lg">
                            <option value="">All Categories</option>
                            <option value="dog">Dog</option>
                            <option value="cat">Cat</option>
                            <option value="bird">Bird</option>
                            <option value="fish">Fish</option>
                            <option value="rabbits">Rabbits</option>
                        </select>
                    </div>
                    <div>
                        <input type="text" name="search" className="block max-w-[260px] mx-auto py-2 px-5 bg-blue-50 font-semibold border rounded-lg" />
                    </div>
                    <div>
                        <button type="submit" className="px-5 py-2 block font-semibold bg-blue-50 rounded-lg">Search</button>
                    </div>
                </form>
            </div>
            {
                isLoading && page === 0 ? (
                    <div className="container mx-auto px-5 grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 pb-16">
                        {[...Array(6)].map((_, index) => (
                            <div key={index}>
                                <Skeleton height={200} />
                            </div>
                        ))}
                    </div>
                ) : (
                    <>
                        <div className="container mx-auto px-5 grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 pb-16">
                            {pets.map(pet => <PetCard key={pet._id} pet={pet} />)}
                        </div>
                        {hasMore && (
                            <div ref={elementRef} className="text-center">
                                <p className="text-lg font-semibold text-center mb-16">Loading more items...</p>
                            </div>
                        )}
                    </>
                )
            }
        </div>
    );
};

export default PetListing;
