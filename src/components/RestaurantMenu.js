
import { useParams } from "react-router-dom";
import Shimmer from "./Shimmer";
import { useEffect, useState } from "react";
import restaurantListMenus from "../utils/menuMockByRestId";
import RestaurantCategory from "./RestaurantCategory";

const RestaurantMenu = () => {
    const [resInfo, setResInfo] = useState(null);
    const { resId } = useParams();
    const [showIndex, setShowIndex] = useState(null);
    const fetchMenu = () => {
        const foundRestaurant = restaurantListMenus.find(restaurant => restaurant?.info?.id === resId)
        console.log(foundRestaurant);
        setResInfo(foundRestaurant);
    }

    useEffect(() => {
        fetchMenu();
    }, []); 

    return (resInfo === null) ? <Shimmer/> : (
        <div className="text-center">
            {/* <h1>NAME OF THE RESTAURANT</h1> */}
            <h1 className="font-bold my-6 text-2xl">{resInfo?.info?.name}</h1>
            <p className="font-bold text-lg">{resInfo?.info?.cuisines.join(", ")} - {resInfo?.info?.costForTwo}</p>
            <h2>MENU</h2>
            <RestaurantCategory data={resInfo?.info?.categoriesRecommended} title={"Recommended"} showItems={0 === showIndex? true: false} setShowIndex={() => setShowIndex(0)}/>
            <RestaurantCategory data={resInfo?.info?.myFavourites} title={"My Favourites"}  showItems={1 === showIndex? true: false} setShowIndex={() => setShowIndex(1)}/>
        </div>
    )
}
export default RestaurantMenu;