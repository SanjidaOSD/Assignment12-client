import AboutUs from "../../components/AboutUs/AboutUs";
import CallToAction from "../../components/CallToAction/CallToAction";
import PetsCategory from "../../components/PetsCategory/PetsCategory";
import Slider from "../../components/Slider/Slider";

const Home = () => {
    return (
        <div>
            <Slider/>
            <PetsCategory/>
            <CallToAction/>
            <AboutUs/>
        </div>
    );
};

export default Home;