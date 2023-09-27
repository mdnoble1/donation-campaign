import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";

const Statistics = () => {
    const [donations, setDonations] = useState(0);
    const [remainingDonations, setRemainingDonations] = useState(0);

    const data = useLoaderData();
    const totalDonationData = data.campaigns.length;
  
    useEffect(() => {
  
      
      const getDonatedData = localStorage.getItem('donated');
  
      if (getDonatedData) {
        const donatedData = JSON.parse(getDonatedData);
  
        
        const myDonations = donatedData.length;
        const remainingDonations = totalDonationData - myDonations;
  
        
        const yourPercentage = (myDonations / totalDonationData) * 100;
        const remainingPercentage = (remainingDonations / totalDonationData) * 100;
  
        
        setDonations(yourPercentage.toFixed(2));
        setRemainingDonations(remainingPercentage.toFixed(2));
      }
    }, [totalDonationData]);

    console.log(donations , remainingDonations)

    


    return (
        <div>
            <h2>PieChart Dekhbo</h2>
        </div>
    );
};

export default Statistics;