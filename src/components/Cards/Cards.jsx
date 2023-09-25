import DonationCard from "./DonationCard/DonationCard";

/* eslint-disable react/prop-types */
const Cards = ({donationData}) => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 mt-12 lg:mt-28 container mx-auto gap-6 md:gap-8 lg:gap-12">
            {
                donationData?.map(donation => <DonationCard key={donation.id} donation={donation}></DonationCard>)
            }
        </div>
    );
};

export default Cards;