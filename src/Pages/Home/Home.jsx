import { useLoaderData } from "react-router-dom";
import Cards from "../../components/Cards/Cards";
import Banner from "../../components/Header/Banner/Banner";

const Home = () => {

    const Data = useLoaderData();
    const donationData = Data.campaigns;

    return (
        <div>
            <Banner></Banner>
            <Cards donationData={donationData}></Cards>
        </div>
    );
};

export default Home;