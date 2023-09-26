/* eslint-disable react/prop-types */
const DetailsCard = ({ donationDetail }) => {
  const { id, detail_image, title, description, text_color, price } =
    donationDetail || {};

  console.log(id, detail_image, title, description, text_color);

  return (
    <div className="flex justify-center">
        <div>
            <div className="relative">
                <img className="rounded-lg" src={detail_image} alt="" />
                <div className="bg-black w-[1320px] h-[160px] rounded-b-lg absolute bottom-[1px] opacity-60"></div>
                <button className="btn btn-primary font-semibold text-xl text-white absolute bottom-14 left-20">Donate ${price}</button>
            </div>
            <div>
                <h2 className="font-bold text-4xl text-black mt-8">{title}</h2>
                <p className="max-w-7xl text-gray-600 text-lg mt-4 text-justify">{description}</p>
            </div>
        </div>
    </div>
  );
};

export default DetailsCard;
