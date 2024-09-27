import { useDispatch } from "react-redux";
import { addItem } from "../utils/cartSlice";

const ItemList = ({ items }) => {
    const dispatch = useDispatch();
    const handleAddItem = (item) => {
        //DISPATCH AN ACTION
        console.log(item);
        dispatch(addItem(item));
    }

    return (
        <div>{items.map((item) => (
            <div data-testid="foodItems" key={item.id} className="p-2 m-2 border-gray-200 border-b-2 text-left">
                <div className="py-2">
                    <div className="flex justify-between">
                        <span>{item.dish}</span>
                        <button className="p-2 mx-16 rounded-lg bg-black text-white shadow-lg"
                            onClick={() => handleAddItem(item)}>Add +</button>
                    </div>
                    <span> ₹ {item.price}</span>
                </div>
                <p className="text-xs">{item.description}</p>
            </div>
        ))}</div>)
}

export default ItemList;