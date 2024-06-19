import { useEffect, useRef, useState } from "react";
import { Helmet } from "react-helmet";
import useAxiosSecure from "../../Hook/useAxiosSecure";
import CampCard from "../../components/CampCard/CampCard";
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

const DonationCampaigns = () => {
    const axiosSecure = useAxiosSecure();
    const [campaigns, setCampaigns] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [hasMore, setHasMore] = useState(true);
    const [page, setPage] = useState(0);
    const elementRef = useRef(null);

    const fetchMoreItems = async () => {
        setIsLoading(true);
        try {
            const { data } = await axiosSecure.get(`/donationCampaigns?limit=6&skip=${page * 6}`);
            if (data.length === 0) {
                setHasMore(false);
            } else {
                const sortedData = data.sort((a, b) => new Date(b.date) - new Date(a.date));
                setCampaigns((previousCampaigns) => [...previousCampaigns, ...sortedData]);
                setPage((previousPage) => previousPage + 1);
            }
        } catch (error) {
            console.error("Error fetching campaigns:", error);
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
        fetchMoreItems(); 
    }, []);

    return (
        <div>
            <Helmet>
                <title>Donation Campaigns | Pet House</title>
            </Helmet>
            <h1 className="text-2xl font-semibold text-center pt-5 pb-8">Donation Campaigns</h1>
            {isLoading && page === 0 ? (
                <div className="container mx-auto px-5 grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 pb-16">
                    {Array.from({ length: 6 }).map((_, index) => (
                        <div key={index}>
                            <Skeleton height={200} />
                            <Skeleton count={5} />
                        </div>
                    ))}
                </div>
            ) : (
                <>
                    <div className="container mx-auto px-5 grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 pb-16">
                        {campaigns.map(campaign => <CampCard key={campaign._id} campaign={campaign} />)}
                    </div>
                    {hasMore && (
                        <div ref={elementRef} className="text-center">
                            <p className="text-lg text-center my-10">Loading more items...</p>
                        </div>
                    )}
                </>
            )}
        </div>
    );
};

export default DonationCampaigns;
