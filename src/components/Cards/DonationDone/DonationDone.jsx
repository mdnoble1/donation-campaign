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

  console.log(category_bg,
    card_bg,
    text_color)

  return (
    <div className="flex justify-center">
        <div className="flex md:gap-6 lg:gap-6 rounded-xl drop-shadow-xl w-11/12 lg:w-full" style = {{background:card_bg}}>
          <div>
            <img src={description_image} alt="" />
          </div>
          <div className="mt-7 md:mt-6 lg:mt-6 ml-2 md:ml-6 lg:ml-6 space-y-4 md:space-y-2 lg:space-y-2" >
            <h2
              className={`py-1 px-4 text-xs md:text-base lg:text-base font-semibold w-fit rounded-lg`}
              style = {{background:category_bg , color:text_color}}
            >
              {category}
            </h2>
            <h2 className={`mt-2 font-semibold text-sm md:text-xl lg:text-xl`} style = {{color:text_color}}>
              {title}
            </h2>
            <h3 className="text-xs md:text-base lg:text-base font-semibold mt-2" style = {{color:text_color}}>${price}</h3>
            <button className="px-3 lg:px-6 py-2 lg:py-4 rounded-lg hover:opacity-60 font-semibold text-xs md:text-base lg:text-base text-white mt-2" style = {{background:text_color}}>
              View Details
            </button>
          </div>
        
      </div>
    </div>
  );
};

export default DonationDone;
