import { useMemo, useState, useContext } from "react";
import Header from "./header";
import Toolbar from "./toolbar";
import { useShoppingList } from "./shoppingListItem";
import OverviewList from "./shoppingListOverviewList";
import {UserContext} from "../users/userProvider";
import Detail from "./detail/detail";

function OverviewProvider({setSelectedList, selectedList}) {
    const { shoppingListOverviewList, handleCreate, handleArchive, handleDelete } = useShoppingList();
    const [showArchived, setShowArchived] = useState(false);
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
        <div>
            <Header />

            <div className="row">
                <div className="col-5">
                    <div className="overview">
                        <div className="row" style={{backgroundColor: "#262B2C", borderRadius: "8px", marginLeft: "5px", marginRight: "5px"}}>
                            <div className="col-8">
                                <h4>Přehled nákupních seznamů</h4>
                            </div>
                            <div className="col">
                                <Toolbar 
                                    handleCreate={handleCreate}
                                    showArchived={showArchived}
                                    setShowArchived={setShowArchived}
                                />
                            </div>
                        </div>
                        
                        <OverviewList 
                            shoppingListOverviewList={filteredShoppingListList}
                            handleArchive={handleArchive}
                            handleDelete={handleDelete}
                            setSelectedList={setSelectedList}
                        />
                    </div>
                </div>
                <div className="col-7">
                    <Detail selectedList={selectedList}/>
                </div>
            </div>
        </div>
    );
}

export default OverviewProvider;
