import { useContext, useEffect, useState } from 'react';
import restaurantList from '../utils/mockData';
import RestaurantCard, {withPromotedLabel} from './RestaurantCard';
import Shimmer from './Shimmer';
import { Link } from 'react-router-dom';
import useOnlineStatus from '../utils/useOnlineStatus';
import UserContext from '../utils/UserContext';

const Body = () => {
    const [listOfRestaurants, setListOfRestaurants] = useState(restaurantList);
    const [filteredListRest, setFilteredListRest] = useState(restaurantList);
    const [searchText,setSearchText] = useState("");
    const onlineStatus = useOnlineStatus();
    const RestaurantCardPromoted = withPromotedLabel(RestaurantCard);
   
    const fetchData = async () => {
        const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=26.8977149&lng=75.7769496&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING")
        const json = await data.json()
        console.log(json);
        setListOfRestaurants(json);
    }

    // useEffect(fetchData(), [])

    //Conditional rendering
    // if(listOfRestaurants.length === 0 ) {
    //     return (<Shimmer/>)
    // }

    if(onlineStatus === false) {
        return (
            <div>
                <h1>Looks like you're offline! Please check your internet.</h1>
            </div>
        )
    }

    const { loggedInUser, setUserName } = useContext(UserContext);
    
    return listOfRestaurants.length === 0 ? <Shimmer/> : (
        <div className="body">
            {/* Top rated restaurant button filter greater than 4 stars */}
            <div className="filter flex">
                <div className="search m-4 p-4">
                    <input type='text' data-testid = "searchInput" className='border border-solid border-black' value = {searchText} onChange={(e) => {
                        setSearchText(e.target.value)
                    }}/>
                    <button className="px-4 py-2 m-4 bg-green-100 rounded-lg" onClick={() => {
                        const filteredList = restaurantList.filter((rest) => rest.info.name.toLocaleLowerCase().includes(searchText.toLocaleLowerCase()))
                        setFilteredListRest(filteredList);
                    }}>Search</button>
                </div>
                <div className="search m-4 p-4 flex items-center">
                    <button className="px-4 py-2 bg-gray-100 rounded-lg" onClick={() => {
                        const filteredList = listOfRestaurants.filter((rest) => rest.info.avgRating>4)
                        setListOfRestaurants(filteredList);
                    }}>Top Rated Restaurants</button>
                </div>
                <div className="search m-4 p-4 flex items-center">
                    <label>UserName </label>
                    <input className="border border-black p-1" value={loggedInUser} onChange={(e) => setUserName(e.target.value)}/>
                </div>
            </div>
            <div className="flex flex-wrap">
                {
                    filteredListRest.map(restaurant =><Link key={restaurant.info.id} to={"/restaurants/"+restaurant?.info?.id}>{restaurant?.info?.promoted ? <RestaurantCardPromoted restData = {restaurant}/> : <RestaurantCard restData = {restaurant}/>}</Link>)
                }
            </div>
        </div>
    )
}

export default Body;