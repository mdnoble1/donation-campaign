/* eslint-disable no-unused-vars */
import { Link } from "react-router-dom";

/* eslint-disable react/prop-types */
const DonationCard = ({ donation }) => {
  const { id, image, title, category, category_bg, card_bg, text_color } =
    donation || {};

  // console.log(id, image, title, category, category_bg, card_bg, text_color);

  return (
    <div>
      <Link to={`/donationDetails/${id}`}>
        <div
          className={`drop-shadow-xl rounded-xl w-[312px] pb-4 mx-auto`}
          style = {{background:card_bg}}
        >
          <figure>
            <img src={image} alt="" />
          </figure>
          <div className="mt-4 ml-4">
            <h2
              className={`py-1 px-4 font-semibold w-fit rounded-lg`} style = {{background:category_bg , color:text_color}}
            >{category}
            </h2>
            <h2 className={`mt-4 font-semibold text-xl`} style = {{color:text_color}}>
              {title}
            </h2>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default DonationCard;
