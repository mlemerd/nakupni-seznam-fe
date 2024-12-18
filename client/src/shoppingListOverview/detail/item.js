import { useState } from "react";
import { useTranslation } from "react-i18next";

function Item ({data, handlerMap}) {
    const [value, setValue] = useState(data.name)
    const {t} = useTranslation()

    return(
        <div>
            <input 
                type="text"
                value={value}
                onChange={(e) => setValue(e.target.value)}
                onBlur={() => handlerMap.updateItemName({ id: data.id, name: value })}
            /> {" "}
            <button onClick={() => handlerMap.toggleResolveItem({ id: data.id })}>
                {data.resolved ? t("restore") : t("done")}
            </button>
            <button onClick={() => handlerMap.deleteItem({ id: data.id })}>
                {t("delete")}
            </button>
        </div>
    )
}

export default Item