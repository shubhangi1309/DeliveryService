import { useEffect, useState } from "react";
import restaurantListMenus from "../utils/menuMockByRestId"
// import { RESTAURANT_FOOD_MENU } from "../utils/constants";

const useRestaurantMenu = (resId) => {
    const [restaurantMenu, setRestaurantMenu] = useState(null);

    const fetchData = () => {
        // const data = await fetch(RESTAURANT_FOOD_MENU+resId);
        // jsonData = data.json();
        const foundRestaurant = restaurantListMenus.find(restaurant => restaurant?.info?.id === resId)
        console.log(foundRestaurant);
        setRestaurantMenu(foundRestaurant);
    }

    useEffect(fetchData(),[]);

   return restaurantMenu;
}

export default useRestaurantMenu;