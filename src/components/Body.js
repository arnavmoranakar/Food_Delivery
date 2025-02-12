import RestaurantCard from "./RestaurantCard";
// import resList from "../utils/mockData";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import {Link} from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Body = () =>{

    //local state variable
    const [listOfRestaurants, setListOfRestaurants] = useState([]);
    const [filteredRestaurants, setFilteredRestaurants] = useState([]);

    const [searchText, setSearchText] = useState("");

    const onlineStatus = useOnlineStatus();

    // Whenever state variable changes, react triggers a reconciliation cycle (rerender the components)
    //console.log("Body rendered");
    
    // // Normal  JS variable
    //  let listOfRestaurants = null;
    // Normal JS variable
    // let listOfRestaurantsJS = [
    //     {
    //     "info": {
    //     "id": "69876",
    //     "name": "Subway",
    //     "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/10/24/0f27fbff-1e49-4161-a0a5-848062423b76_69876.JPG",
        
    //     "costForTwo": "₹350 for two",
    //     "cuisines": [
    //       "sandwich",
    //       "Salads",
    //       "wrap",
    //       "Healthy Food"
    //     ],
    //     "avgRating": 4.3,
        
    //     "sla": {
    //       "deliveryTime": 31,
    //     },
    //     }
    // },

    // {
    //     "info": {
    //     "id": "69877",
    //     "name": "KFC",
    //     "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/10/24/0f27fbff-1e49-4161-a0a5-848062423b76_69876.JPG",
        
    //     "costForTwo": "₹350 for two",
    //     "cuisines": [
    //       "sandwich",
    //       "Salads",
    //       "wrap",
    //       "Healthy Food"
    //     ],
    //     "avgRating": 3.8,
        
    //     "sla": {
    //       "deliveryTime": 31,
    //     },
    //     }
    // },



    useEffect(()=>{
        fetchData();
    },[]);
 
    const fetchData = async () => {
        const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9715987&lng=77.5945627&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
    
        const json = await data.json();

        console.log(json);

        // Optional Chaining :- Good way to handleing the data 
        setListOfRestaurants(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        setFilteredRestaurants(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    };

    // Conditional rendering
    // if(listOfRestaurants.length === 0)
    // {
    //     return <Shimmer/>;
    // }

    if(onlineStatus === false)
    {
        return ( 
            <div className="online-status">
                 <h1> Looks like you're offline !!! </h1>
                 <h1>Please check your internet connection. </h1>
            </div>
        )      
    };

    return listOfRestaurants.length === 0 ? 
        ( <Shimmer  />) : (
        <div className="body">
            <div className="filter">
            <div className="search">
                <input type = "text" 
                className="search-bar" 
                placeholder="Search Restaurants"
                value = {searchText}
                onChange = {(e) => {
                    setSearchText(e.target.value);
                }}
                
                />
             
                <button className="search-btn"
                onClick = { () => {
                    // Filter the restaurant card and update the  UI
                    // serachText 
                    console.log("searchText");

                    const filteredRestaurants = listOfRestaurants.filter((restaurants) => 
                    restaurants.info.name.toLowerCase().includes(searchText.toLowerCase())
                    );
                    setFilteredRestaurants(filteredRestaurants);
                }}
                
                >Search</button>
    
            </div>
                <button className="filter-btn"
                onClick ={() => { 
                 // Filter the restaurant card and update the  UI
                 // serachText
                 console.log(searchText);
                const filterdList = listOfRestaurants.filter(
                    (restaurant) => restaurant.info.avgRating > 4.3
                );
                setFilteredRestaurants(filterdList);
                }}

            
                >Top Rated Restaurants</button>
            </div>

            <div className="res-container">
                {/* <RestaurantCard 
                    // resName="Maghana Foods" 
                    // passing props to the components (passing arugments to the function)
                    // resData = {resList[0]}
                /> */}
                
                {/* <RestaurantCard 
                    resName="KFC"
                    cuisine="Burger, Fast Food"
                    star = "4.4 Stars"
                    deliveryTime = "38 Minutes"
                /> */}

                 {/* // another way
                <RestaurantCard resData ={resList[1]}/>
                <RestaurantCard resData ={resList[2]}/> */}

                {/* // Optmal way */}
                
                {filteredRestaurants.map((restaurant) => (
                    <Link key = {restaurant.info.id} to={"/restaurant/"+restaurant.info.id} className="custom-link"><RestaurantCard  resData = {restaurant}/> </Link>
                    
                ))}
            </div>
        </div>
    )
};

export default Body;
//Chinese Wok
/* https://www.swiggy.com/dapi/restaurants/search/v3?lat=12.9715987&lng=77.5945627&str=Chinese%20Wok&trackingId=007c06ec-6a3a-f008-45b8-9e31a81ed07a&submitAction=ENTER&queryUniqueId=da57819b-cfa6-2eb3-5ddf-1a2512feaf29*/

// import { useState, useEffect } from "react";
// import RestaurantCard from "./RestaurantCard";
// import Shimmer from "./Shimmer";

// const Body = () => {
//     const [listOfRestaurants, setListOfRestaurants] = useState([]);
//     const [filteredRestaurants, setFilteredRestaurants] = useState([]);
//     const [searchText, setSearchText] = useState("");
//     const [nextOffset, setNextOffset] = useState([]);
//     const [isFetching, setIsFetching] = useState(false);

//     useEffect(() => {
//         const fetchData = async () => {
//             const response = await fetch(
//                 "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9715987&lng=77.5945627&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
//             );
//             const json = await response.json();
//             setListOfRestaurants(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants || []);
//             setFilteredRestaurants(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants || []);
//             setNextOffset(json?.data?.nextOffset || "");
//         };

//         fetchData();
//     }, []);

//     return listOfRestaurants.length === 0 ? (
//         <Shimmer />
//     ) : (
//         <div className="body">
//             <input
//                 type="text"
//                 value={searchText}
//                 onChange={(e) => setSearchText(e.target.value)}
//             />
//             <button onClick={() => { /* Implement filtering logic */ }}>Search</button>
//             <div className="res-container">
//                 {filteredRestaurants.map((restaurant) => (
//                     <RestaurantCard key={restaurant.info.id} resData={restaurant} />
//                 ))}
//             </div>
//         </div>
//     );
// };

// export default Body;
