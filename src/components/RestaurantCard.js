// Name exports
import { CDN_URL } from "../utils/constants";
const RestaurantCard = (props) => {
  //const {resName,cuisine,star,deliveryTime} = props;
  console.log(props); // JS object */

  const { resData } = props;

  const { cloudinaryImageId, name, cuisines, costForTwo, avgRating } =
    resData?.info;

  const { deliveryTime } = resData?.info?.sla;
  return (
    <div
      className="res-card"
      style={{
        // backgroundColor:"#f0f0f0"
        backgroundColor: "white",
      }}
    >
      <img
        className="res-logo"
        alt="res-logo"
        src={CDN_URL + cloudinaryImageId}
      ></img>

      <h4>{name}</h4>

      <h5 className="cuisine-text">{cuisines.join(", ")}</h5>

      <h5>{costForTwo}</h5>

      <h5>{avgRating} Stars</h5>

      <h5>{deliveryTime} Minutes</h5>
    </div>
  );
};

export default RestaurantCard;
