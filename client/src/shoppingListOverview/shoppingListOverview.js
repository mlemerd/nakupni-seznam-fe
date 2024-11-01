import OverviewProvider from "./shoppingListOVerviewProvider";
import { ShoppingListProvider } from "./shoppingListItem";

function Overview () {
    return (
        <ShoppingListProvider>
            <OverviewProvider />
        </ShoppingListProvider>
)
}

export default Overview