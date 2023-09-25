/* eslint-disable react/prop-types */
const DonationCard = ({ donation }) => {

    const {image , title , category , categoryBg , card_bg , text_color} = donation || {};

    console.log(image , title , category , categoryBg , card_bg , text_color)

  return (
    <div>
      <div className={`bg-blue-100 drop-shadow-xl rounded-xl w-[312px] pb-4 mx-auto`}>
        <figure>
          <img
            src={image}
            alt=""
          />
        </figure>
        <div className="mt-4 ml-4">
          <h2 className={`bg-blue-300 py-1 px-4 text-blue-800 font-semibold w-fit rounded-lg`}>{category}</h2>
          <h2 className={`mt-4 font-semibold text-xl text-blue-800`}>{title}</h2>
        </div>
      </div>
    </div>
  );
};

export default DonationCard;
