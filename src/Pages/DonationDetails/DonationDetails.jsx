/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { useParams } from "react-router-dom";
import DetailsCard from "../../components/Cards/DetailsCard/DetailsCard";

const DonationDetails = () => {

    const [donationDetail , setDonationDetail] = useState();

    const {id} = useParams();

    const Data = useLoaderData();
    const donationData = Data.campaigns;

    useEffect(() => {

        const findDonationDetail = donationData?.find(donationDetail => donationDetail.id == id)

        setDonationDetail(findDonationDetail);

    } , [id , donationData]);

    

    return (
        <div className="my-12 lg:my-28 container mx-auto">
            <DetailsCard donationDetail={donationDetail}></DetailsCard>
        </div>
    );
};

export default DonationDetails;