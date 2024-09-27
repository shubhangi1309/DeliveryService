import ItemList from "./ItemList";

const RestaurantCategory = ({data, title, showItems, setShowIndex}) => {
    const handleClick = () => {
        setShowIndex()
    }
    return (
        <div>
            <div className="w-6/12 mx-auto my-4 bg-gray-50 shadow-lg p-4">
                <div className="flex justify-between cursor-pointer" onClick={handleClick} >
                    <span className="font-bold text-lg">{title} ({data.length})</span>
                    <span>⬇️</span>
                </div>
                {showItems && <ItemList items={data}/>}
            </div>
        </div>
    )
}

export default RestaurantCategory;