import OverviewProvider from "./shoppingListOVerviewProvider";
import { ShoppingListProvider } from "./shoppingListItem";

function Overview ({setSelectedList}) {
    return (
        <ShoppingListProvider>
            <OverviewProvider setSelectedList={setSelectedList}/>
        </ShoppingListProvider>
    )
}

export default Overview