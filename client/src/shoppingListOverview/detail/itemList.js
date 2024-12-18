import { useContext, useEffect } from "react";
import { DetailContext } from "./detailProvider";
import Item from "./item";
import { useTranslation } from "react-i18next";

function ItemList() {
    const { data, handlerMap, showResolved, toggleShowResolved } = useContext(DetailContext);
    const {t} = useTranslation()
    useEffect(() => {
        console.log("ItemList data: ", data);
    }, [data]);


    if (!data || !data.itemList) {
        return <div>Loading...</div>;
    }

    return (
        <div>
            Item List <button onClick={() => handlerMap.addItem()}>{t("addItem")}</button>
            <button onClick={() => toggleShowResolved()}>
                {showResolved ? t("unresolvedItems") : t("allItems")}
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
