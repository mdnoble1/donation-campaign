import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import ShowChart from "../../components/PieChart/ShowChart";

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

    


    return (
        <div className="container mx-auto text-center mt-10">
            <ShowChart donations={donations} remainingDonations={remainingDonations}></ShowChart>
        </div>
    );
};

export default Statistics;