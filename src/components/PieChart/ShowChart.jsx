/* eslint-disable no-undef */
/* eslint-disable react/prop-types */

import Chart from "react-google-charts";

const ShowChart = ({ donations, remainingDonations }) => {
  const donationNumber = parseFloat(donations);
  const remainingDonationNumber = parseFloat(remainingDonations);

  const data = [
    ["Donation", "Number"],
    ["Your Donation", donationNumber],
    ["Total Donation", remainingDonationNumber],
  ];

  return (
    <div>
      <Chart
        chartType="PieChart"
        data={data}
        width="11/12"
        height="600px"
      ></Chart>
    </div>
  );
};

export default ShowChart;
