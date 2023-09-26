/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
import { useEffect, useState } from "react";
import DonationDone from "../../components/Cards/DonationDone/DonationDone";

const Donation = () => {

    const [donated , setDonated] = useState([]);

    const [noDataFound , setNoDataFound] = useState(false);

    useEffect(() => {

        const donatedItems = JSON.parse(localStorage.getItem("donated"));

        if (donatedItems) {
            setDonated(donatedItems);
        }

        else {
            setNoDataFound("Nothing Donated Yet!")
        }
        

    }, []);

    // console.log(donated)

    return (
        <div className="lg:mt-28">
            { noDataFound ? <p className="h-[80vh] flex justify-center items-center text-xl lg:text-4xl font-semibold">{noDataFound}</p> : 
            <div>

                <div className="grid grid-cols-2 gap-10 container mx-auto">
                    {
                       donated.map(donatedItem => <DonationDone key={donatedItem.id} donatedItem={donatedItem}></DonationDone>) 
                    }
                </div>

            </div>}
        </div>
    );
};

export default Donation;