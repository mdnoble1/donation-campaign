/* eslint-disable react/prop-types */
const DetailsCard = ({ donationDetail }) => {
  const { id, detail_image, title, description, text_color, price } =
    donationDetail || {};

  console.log(id, detail_image, title, description, text_color);

  return (
    <div className="flex justify-center">
        <div>
            <div className="relative">
                <img className="rounded-lg w-11/12 lg:w-full mx-auto" src={detail_image} alt="" />
                <div className="bg-black w-11/12 lg:w-full h-[80px] md:h-[110px] lg:h-[160px] rounded-b-lg absolute bottom-[1px] opacity-60 left-[17px] md:left-8 lg:left-0"></div>
                <button className="btn btn-primary font-semibold text-xl text-white absolute bottom-14 left-20">Donate ${price}</button>
            </div>
            <div className="text-center lg:text-left">
                <h2 className="font-bold text-2xl lg:text-4xl text-black mt-8">{title}</h2>
                <p className="w-11/12 lg:max-w-7xl text-gray-600 lg:text-lg mt-4 text-center lg:text-justify mx-auto lg:mx-0">{description}</p>
            </div>
        </div>
    </div>
  );
};

export default DetailsCard;
