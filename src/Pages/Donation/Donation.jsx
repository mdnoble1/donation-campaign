/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
import { useEffect, useState } from "react";
import DonationDone from "../../components/Cards/DonationDone/DonationDone";

const Donation = () => {
  const [donated, setDonated] = useState([]);

  const [noDataFound, setNoDataFound] = useState(false);

  const [isShowAll, setIsShowAll] = useState(false);

  useEffect(() => {
    const donatedItems = JSON.parse(localStorage.getItem("donated"));

    if (donatedItems) {
      setDonated(donatedItems);
    } else {
      setNoDataFound("Nothing Donated Yet!");
    }
  }, []);

  // console.log(donated)

  return (
    <div className="my-8 md:my-14 lg:my-28">
      {noDataFound ? (
        <p className="h-[80vh] flex justify-center items-center text-xl lg:text-4xl font-semibold">
          {noDataFound}
        </p>
      ) : (
        <div>
          <div className="grid lg:grid-cols-2 gap-10 container mx-auto">
            {isShowAll
              ? donated.map((donatedItem) => (
                  <DonationDone
                    key={donatedItem.id}
                    donatedItem={donatedItem}
                  ></DonationDone>
                ))
              : donated
                  .slice(0, 4)
                  .map((donatedItem) => (
                    <DonationDone
                      key={donatedItem.id}
                      donatedItem={donatedItem}
                    ></DonationDone>
                  ))}
          </div>

          <div className="flex justify-center mt-6 lg:mt-10">
            <button
              onClick={() => setIsShowAll(!isShowAll)}
              className="bg-green-600 px-3 lg:px-6 py-2 lg:py-4 rounded-lg hover:bg-green-400 font-semibold md:text-lg lg:text-xl text-white mt-2"
            >
              {isShowAll ? "See Less " : "See All"}
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Donation;
