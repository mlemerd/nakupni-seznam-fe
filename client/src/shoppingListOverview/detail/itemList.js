import { useContext, useEffect } from "react";
import { DetailContext } from "./detailProvider";
import Item from "./item";

function ItemList() {
    const { data, handlerMap, showResolved, toggleShowResolved } = useContext(DetailContext);

    useEffect(() => {
        console.log("ItemList data: ", data);
    }, [data]);


    if (!data || !data.itemList) {
        return <div>Loading...</div>;
    }

    return (
        <div>
            Item List <button onClick={() => handlerMap.addItem()}>Add Item</button>
            <button onClick={() => toggleShowResolved()}>
                {showResolved ? "Not Resolved Only" : "All Items"}
            </button>
            <div>
                {data.itemList.map((item) => (
                    <Item key={item.id} data={item} handlerMap={handlerMap} />
                ))}
            </div>
        </div>
    );
}

export default ItemList;
