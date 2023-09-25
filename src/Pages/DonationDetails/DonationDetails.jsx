/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { useParams } from "react-router-dom";

const DonationDetails = () => {

    const [donationDetail , setDonationDetail] = useState();

    const {id} = useParams();
    console.log(id)

    const Data = useLoaderData();
    const donationData = Data.campaigns;
    console.log(donationData)

    useEffect(() => {

        const findDonationDetail = donationData?.find(donationDetail => donationDetail.id == id)

        console.log(findDonationDetail)

    } , [id , donationData])

    

    return (
        <div>
            donation detail dekhabo
        </div>
    );
};

export default DonationDetails;