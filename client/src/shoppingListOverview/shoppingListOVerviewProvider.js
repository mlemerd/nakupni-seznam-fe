import { useMemo, useState, useContext } from "react";
import Header from "./header";
import Toolbar from "./toolbar";
import { useShoppingList } from "./shoppingListItem";
import OverviewList from "./shoppingListOverviewList";
import {UserContext} from "../users/userProvider";
import Detail from "./detail/detail";

function OverviewProvider({setSelectedList}) {
    const { shoppingListOverviewList, handleCreate, handleArchive, handleDelete } = useShoppingList();
    const [showArchived, setShowArchived] = useState(false);
    const [selectedList] = useState(true)
    const { loggedInUser = null } = useContext(UserContext) || {};

   // console.log('Logged-in user in OverviewProvider:', loggedInUser);

    const filteredShoppingListList = useMemo(() => {
        if (!loggedInUser) {
      //      console.log('No logged-in user');
            return [];
        } // Handle case where there is no logged-in user

        return shoppingListOverviewList.filter((item) => {
            const isOwner = item.owner === loggedInUser;
            const isMember = item.memberList?.includes(loggedInUser);
            const isActive = item.state === "active";
      //      console.log('showArchived:', showArchived, 'isOwner:', isOwner, 'isMember:', isMember, 'isActive:', isActive);
            return showArchived ? (isOwner || isMember) : (isActive && (isOwner || isMember));
        });
    }, [showArchived, shoppingListOverviewList, loggedInUser]);

    return (
        <div className="row">
            <div className="col-5">
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
                    setSelectedList={setSelectedList}
                />
            </div>
            {/* <div>
                <Detail/>
{/*                 {selectedList && <Detail selectedList={selectedList} />} 
            </div> */}
        </div>
    );
}

export default OverviewProvider;




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

    console.log('Logged-in user in OverviewProvider:', loggedInUser);

    const filteredShoppingListList = useMemo(() => {
        if (!loggedInUser) {
            console.log('No logged-in user');
            return [];
        }
        return shoppingListOverviewList.filter((item) => {
            const isOwner = item.owner === loggedInUser;
            const isMember = item.memberList?.includes(loggedInUser);
            const isActive = item.state === "active";
            console.log('showArchived:', showArchived, 'isOwner:', isOwner, 'isMember:', isMember, 'isActive:', isActive);
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

export default OverviewProvider; */


/* export default function App() {
    return (
        <ShoppingListProvider>
            <OverviewProvider />
        </ShoppingListProvider>
    );
} */



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