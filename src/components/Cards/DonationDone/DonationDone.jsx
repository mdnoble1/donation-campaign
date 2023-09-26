/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
const DonationDone = ({ donatedItem }) => {
  const {
    description_image,
    title,
    category,
    category_bg,
    card_bg,
    text_color,
    price,
  } = donatedItem;

  return (
    <div className="flex justify-center">
        <div className="flex gap-6 rounded-xl bg-blue-100 drop-shadow-xl w-11/12 lg:w-full">
          <div>
            <img src={description_image} alt="" />
          </div>
          <div className="mt-6 ml-6">
            <h2
              className={`bg-blue-300 py-1 px-4 text-blue-800 font-semibold w-fit rounded-lg`}
            >
              {category}
            </h2>
            <h2 className={`mt-2 font-semibold text-xl text-blue-800`}>
              {title}
            </h2>
            <h3 className="text-blue-800 font-semibold mt-2">${price}</h3>
            <button className="bg-blue-800 px-3 lg:px-6 py-2 lg:py-4 rounded-lg hover:bg-blue-400 font-semibold  text-white mt-2">
              View Details
            </button>
          </div>
        
      </div>
    </div>
  );
};

export default DonationDone;
