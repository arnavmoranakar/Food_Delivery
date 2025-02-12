import Shimmer from "/src/components/Shimmer";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import { useParams } from "react-router-dom";
import Accordion from "react-bootstrap/Accordion";
import "bootstrap/dist/css/bootstrap.min.css";

const RestaurantMenu = () => {
  // const [resInfo1, setResInfo] = useState(null);

  const { resId } = useParams();

  const resInfo = useRestaurantMenu(resId);
  //console.log(resId);

  /** 
  // here we use Custom Hook i.e useRestaurantMenu
  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    const data = await fetch(MENU_API + resId);

    const json = await data.json();
    console.log(json);

    setResInfo(json.data);
  };
*/
  if (resInfo === null) {
    return <Shimmer />;
  }

  //const {name} = resInfo?.cards[2]?.card?.card?.info;
  const { name, cuisines, costForTwoMessage } =
    resInfo?.cards[2]?.card?.card?.info;
  const { itemCards } =
    resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;
  //console.log(itemCards);
  return (
    <div className="res-info-container">
      <div className="res-info">
        <h1>{name}</h1>
        <p>
          {cuisines.join(", ")} - {costForTwoMessage}
        </p>
      </div>

      <div>
        <div className="recommended-menu">
          <Accordion>
            <Accordion.Item eventKey="0">
              <Accordion.Header>Recommended Menu</Accordion.Header>
              <Accordion.Body>
                {itemCards.map((item) => (
                  <div className="menu-item" key={item.card.info.id}>
                    <div>
                      <h4>{item.card.info.name}</h4>

                      <div>
                        Rs.
                        {item.card.info.price / 100 ||
                          item.card.info.defaultPrice / 100}
                      </div>
                      <div>
                        Rating :{" "}
                        {item.card.info.ratings.aggregatedRating.rating ||
                          "4.1"}
                      </div>
                      <div className="menu-description">
                        {item.card.info.description}
                      </div>

                      <div>
                        ___________________________________________________________________________________________________________________________________________________________________________________
                      </div>
                    </div>
                  </div>
                ))}
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
          {/* <ul>
                    {itemCards.map ((item) => (
                         <li key={item.card.info.id}>
                             {item.card.info.name} - Rs.{item.card.info.price/100 || item.card.info.defaultPrice/100} 
                         </li>
                         ))}
              
                </ul> */}
        </div>
      </div>
    </div>
  );
};

export default RestaurantMenu;
