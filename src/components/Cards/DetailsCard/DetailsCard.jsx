/* eslint-disable no-unused-vars */

import swal from "sweetalert";

/* eslint-disable react/prop-types */
const DetailsCard = ({ donationDetail }) => {
  const { id, detail_image, title, description, text_color, price } =
    donationDetail || {};

  const handleAddDonation = () => {
    const addedDonatedArr = [];

    const donatedItems = JSON.parse(localStorage.getItem("donated"));

    if (!donatedItems) {
      addedDonatedArr.push(donationDetail);
      localStorage.setItem("donated", JSON.stringify(addedDonatedArr));
      swal("Congratulations!", "Thank You For Your Donation!", "success");
    } else {
      const isExist = donatedItems.find(
        (donationDetail) => donationDetail.id == id
      );

      if (!isExist) {
        addedDonatedArr.push(...donatedItems, donationDetail);
        localStorage.setItem("donated", JSON.stringify(addedDonatedArr));
        swal("Congratulations!", "Thank You For Your Donation!", "success");
      }

      else {
        swal("Already Donated!", "Thank You Once Again!", "error");
      }

    }
  };

  return (
    <div className="flex justify-center">
      <div>
        <div className="relative">
          <img
            className="rounded-lg w-11/12 lg:w-full mx-auto"
            src={detail_image}
            alt=""
          />
          <div className="bg-black w-11/12 lg:w-full h-[80px] md:h-[110px] lg:h-[160px] rounded-b-lg absolute bottom-[1px] opacity-60 left-[17px] md:left-8 lg:left-0"></div>
          <button
            onClick={handleAddDonation}
            className="bg-blue-600 px-4 lg:px-6 py-2 lg:py-4 rounded-lg hover:bg-blue-400 font-semibold lg:text-xl text-white absolute bottom-5 md:bottom-8 lg:bottom-14 left-10 md:left-14 lg:left-20"
          >
            Donate ${price}
          </button>
        </div>
        <div className="text-center lg:text-left">
          <h2 className="font-bold text-2xl lg:text-4xl text-black mt-8">
            {title}
          </h2>
          <p className="w-11/12 lg:w-full text-gray-600 lg:text-lg mt-4 text-center lg:text-justify mx-auto lg:mx-0">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
};

export default DetailsCard;
