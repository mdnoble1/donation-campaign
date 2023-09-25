import { useLoaderData } from "react-router-dom";
import Cards from "../../components/Cards/Cards";
import Banner from "../../components/Header/Banner/Banner";

const Home = () => {

    const donationData = useLoaderData();

    return (
        <div>
            <Banner></Banner>
            <Cards donationData={donationData.campaigns}></Cards>
        </div>
    );
};

export default Home;