import { Helmet } from "react-helmet";
import AboutUs from "../../components/AboutUs/AboutUs";
import CallToAction from "../../components/CallToAction/CallToAction";
import FeaturedStories from "../../components/FeaturedStories/FeaturedStories";
import HappyClients from "../../components/HappyClients/HappyClients";
import PetsCategory from "../../components/PetsCategory/PetsCategory";
import Slider from "../../components/Slider/Slider";

const Home = () => {
    return (
        <div>
            <Helmet>
                <title>Home | Pet House</title>
            </Helmet>
            <Slider/>
            <PetsCategory/>
            <CallToAction/>
            <AboutUs/>
            <FeaturedStories/>
            <HappyClients/>
        </div>
    );
};

export default Home;