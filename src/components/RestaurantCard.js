import { useContext } from "react";
import { CDN_IMAGE_URL } from "../utils/constants";
import UserContext from "../utils/UserContext";

const RestaurantCard = (props) => {
    const {restData} = props;
    const {cloudinaryImageId, name, costForTwo, cuisines, avgRating, sla} = restData?.info;
    const user = useContext(UserContext);
    return (
        <div data-testid="resCard" className="m-4 p-4 w-[250px] bg-gray-100 hover:bg-gray-200">
            <img className="rounded-lg" alt="food" src={CDN_IMAGE_URL+cloudinaryImageId}/>
            <h3 className="font-bold py-4">{name}</h3>
            <h4>{costForTwo}</h4>
            <h4>{cuisines.join(", ")}</h4>
            <h4>{avgRating}</h4>
            <h4>{sla.deliveryTime} minutes</h4>
            <h4>User: {user.loggedInUser}</h4>
        </div>
    )
}

// HIGHER ORDER COMPONENT
// input RestaurantCard => gives output RestaurantCardPromoted (component)
// component is just a normal JS function which returns a JSX

export const withPromotedLabel = (RestaurantCard) => {
    return (props) => {
        return (
            <div>
                <label className="absolute bg-black text-white m-2 p-2 rounded-lg">Promoted</label>
                <RestaurantCard {...props}/>
            </div>
        )
    }
}

export default RestaurantCard;