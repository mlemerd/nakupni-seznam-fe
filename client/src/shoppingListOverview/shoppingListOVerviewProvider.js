import { useMemo, useState, useContext } from "react";
import Header from "./header";
import Toolbar from "./toolbar";
import { useShoppingList, ShoppingListProvider } from "./shoppingListItem";
import OverviewList from "./shoppingListOverviewList";
import UserContext from "../users/userProvider";

function OverviewProvider() {
    const { shoppingListOverviewList, handleCreate, handleArchive, handleDelete } = useShoppingList();
    const [showArchived, setShowArchived] = useState(false);
    const { loggedInUser = null } = useContext(UserContext) || {};

    const filteredShoppingListList = useMemo(() => {
        if (!loggedInUser) return []; // Handle case where there is no logged-in user
        return shoppingListOverviewList.filter((item) => {
            const isOwner = item.owner === loggedInUser;
            const isMember = item.memberList?.includes(loggedInUser);
            const isActive = item.state === "active";
            return showArchived ? (isOwner || isMember) : (isActive && (isOwner || isMember));
        });
    }, [showArchived, shoppingListOverviewList, loggedInUser]);

    return (
        <>
            <Header />
            <Toolbar 
                handleCreate={handleCreate}
                showArchived={showArchived}
                setShowArchived={setShowArchived}
            />
            <OverviewList 
                shoppingListOverviewList={filteredShoppingListList}
                handleArchive={handleArchive}
                handleDelete={handleDelete}
            />
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


/* import { useMemo, useState, useContext } from "react";
import Header from "./header";
import Toolbar from "./toolbar";
import { useShoppingList, ShoppingListProvider } from "./shoppingListItem";
import OverviewList from "./shoppingListOverviewList";
import UserContext from "../users/userProvider";

function OverviewProvider() {
    const { shoppingListOverviewList, handleCreate, handleArchive, handleDelete } = useShoppingList();
    const [showArchived, setShowArchived] = useState(false);
    const { loggedInUser = null } = useContext(UserContext) || {};


    const filteredShoppingListList = useMemo(() => {
        if (showArchived) {
            return shoppingListOverviewList.filter(
                (item) => item.owner === loggedInUser || item.memberList?.includes(loggedInUser)
            );
        } else {
            return shoppingListOverviewList.filter(
                (item) =>
                    item.state === "active" &&
                    (item.owner === loggedInUser || item.memberList?.includes(loggedInUser))
            );
        }
    }, [showArchived, shoppingListOverviewList, loggedInUser]);

    return (
        <>
            <Header />
            <Toolbar 
                handleCreate={handleCreate}
                showArchived={showArchived}
                setShowArchived={setShowArchived}
            />
            <OverviewList 
                shoppingListOverviewList={filteredShoppingListList}
                handleArchive={handleArchive}
                handleDelete={handleDelete}
            />
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
 */