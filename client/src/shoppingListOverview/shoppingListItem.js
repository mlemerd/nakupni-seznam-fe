import { useState, createContext, useContext } from "react";

import { UserContext } from "../users/userProvider";

export const ShoppingListContext = createContext();

export function ShoppingListProvider({ children }) {
    const {loggedInUser} = useContext(UserContext)
    const [shoppingListOverviewList, setShoppingListOverviewList] = useState([
        {
            id: "sl01",
            name: "První seznam",
            state: "active",
            owner: "u1",
            memberList: ["u2"],
            itemList: [{ id: "item1", name: "Milk", resolved: false }]
        },
        {
            id: "sl02",
            name: "Druhý seznam",
            state: "active",
            owner: "u2",
            memberList: ["u1", "u3"],
            itemList: [{ id: "item2", name: "Bread", resolved: false }, { id: "item3", name: "Butter", resolved: true }]
        }
    ]);

    function handleCreate({ name }) { 
         setShoppingListOverviewList((current) => [ 
            ...current, 
            { 
                id: Math.random().toString(), 
                name, 
                state: "active", 
                owner: loggedInUser, 
                memberList: [], 
            } 
        ]); 
    }


    function handleArchive(dtoIn) {
        setShoppingListOverviewList((current) => {
            const itemIndex = current.findIndex((item) => item.id === dtoIn.id);
            if (itemIndex > -1) {
                const updatedList = current.map(item => 
                    item.id === dtoIn.id 
                        ? { ...item, state: item.state === "archived" ? "active" : "archived" } 
                        : item
                );
                return updatedList;
            }
            return current;
        });
    }
    

    function handleDelete(dtoIn) {
        setShoppingListOverviewList((current) => 
            current.filter((item) => item.id !== dtoIn.id)
        );
    }


    return (
        <ShoppingListContext.Provider value={{
            shoppingListOverviewList,
            handleCreate,
            handleArchive,
            handleDelete
        }}>
            {children}
        </ShoppingListContext.Provider>
    );
}

export function useShoppingList() {
    return useContext(ShoppingListContext);
}

export default useShoppingList