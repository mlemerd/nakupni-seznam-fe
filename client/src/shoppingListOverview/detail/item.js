import { useState } from "react";

function Item ({data, handlerMap}) {
    const [value, setValue] = useState(data.name)

    return(
        <div>
            <input 
                type="text"
                value={value}
                onChange={(e) => setValue(e.target.value)}
                onBlur={() => handlerMap.updateItemName({ id: data.id, name: value })}
            /> {" "}
            <button onClick={() => handlerMap.toggleResolveItem({ id: data.id })}>
                {data.resolved ? "vrátit" : "hotovo"}
            </button>
            <button onClick={() => handlerMap.deleteItem({ id: data.id })}>
                smazat
            </button>
        </div>
    )
}

export default Item