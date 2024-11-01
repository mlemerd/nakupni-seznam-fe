import Header from "./header";
import Toolbar from "./toolbar";
import { ShoppingListProvider, useShoppingList } from "./shoppingListItem";
import OverviewList from "./shoppingListOverviewList";

function OverviewProvider() {
    const {
        handleCreate,
    } = useShoppingList();

    return (
        <>
            <Header />
            <Toolbar 
                handleCreate={handleCreate}
            />
            <OverviewList />
        </>
    );
}

export default function App() {
    return (
        <ShoppingListProvider>
            <OverviewProvider />
        </ShoppingListProvider>
    );
}