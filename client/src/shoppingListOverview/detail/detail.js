import DetailProvider from "./detailProvider";
import Toolbar from "./detailToolbar";
import MemberList from "./memberList";
import ItemList from "./itemList";
import { ShoppingListProvider } from "../shoppingListItem";

import { Card } from "react-bootstrap";

function Detail ({selectedList}) {
    if (!selectedList) {
        return <p>Select a shopping list to see details</p>;
    }
    return (
        <div style={{width: 600}}>
            <Card className="card-header">
                <h3>
                    Detail seznamu
                </h3>
                <p>Název: {selectedList.name}</p>
                <p>Stav: {selectedList.state}</p>
                <p>Majitel: {selectedList.owner}</p>
            </Card>
            <Card className="card-body">
              <DetailProvider selectedList={selectedList}>
                <ShoppingListProvider>
                    <Toolbar/>
                </ShoppingListProvider>
                 <MemberList/>
                 <ItemList/>
              </DetailProvider>
            </Card>
        </div>
    )
}

export default Detail