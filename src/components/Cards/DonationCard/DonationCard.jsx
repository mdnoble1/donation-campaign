/* eslint-disable no-unused-vars */
import { Link } from "react-router-dom";

/* eslint-disable react/prop-types */
const DonationCard = ({ donation }) => {
  const { id, image, title, category, category_bg, card_bg, text_color } =
    donation || {};

  // console.log(id, image, title, category, category_bg, card_bg, text_color);

  return (
    <div>
      <Link to={`/donation/${id}`}>
        <div
          className={`bg-blue-100 drop-shadow-xl rounded-xl w-[312px] pb-4 mx-auto`}
        >
          <figure>
            <img src={image} alt="" />
          </figure>
          <div className="mt-4 ml-4">
            <h2
              className={`bg-blue-300 py-1 px-4 text-blue-800 font-semibold w-fit rounded-lg`}
            >
              {category}
            </h2>
            <h2 className={`mt-4 font-semibold text-xl text-blue-800`}>
              {title}
            </h2>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default DonationCard;
