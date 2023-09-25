/* eslint-disable react/prop-types */
const Cards = ({donationData}) => {
    return (
        <div>
            {
                donationData.map(donation => console.log(donation))
            }
        </div>
    );
};

export default Cards;