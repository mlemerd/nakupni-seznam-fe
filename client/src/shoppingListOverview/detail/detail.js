import DetailProvider from "./detailProvider";
import Toolbar from "./detailToolbar";
import MemberList from "./memberList";
import ItemList from "./itemList";
import ShoppingListChart from "./shoppingListChart";
import { ShoppingListProvider } from "../shoppingListItem";
import { useTranslation } from "react-i18next";

import { Card } from "react-bootstrap";

function Detail ({selectedList}) {
    const {t} = useTranslation()
    if (!selectedList) {
        return <p>{t("select")}</p>;
    }
    return (
        <div style={{width: 600}}>
            <Card className="card-header">
                <h3>
                    {t("detail")}
                </h3>
                <p>{t("name")}: {selectedList.name}</p>
                <p>{t("state")}: {selectedList.state}</p>
                <p>{t("owner")}: {selectedList.owner}</p>
            </Card>
            <Card className="card-body">
              <DetailProvider selectedList={selectedList}>
                <ShoppingListProvider>
                    <Toolbar/>
                </ShoppingListProvider>
                 <MemberList/>
                 <ItemList/>
                 <ShoppingListChart/>
              </DetailProvider>
            </Card>

        </div>
    )
}

export default Detail