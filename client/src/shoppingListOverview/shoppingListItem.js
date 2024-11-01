import { useState, createContext, useContext } from "react";

import { UserContext } from "../users/userProvider";

const ShoppingListContext = createContext();

export function ShoppingListProvider({ children }) {
    const {loggedInUser} = useContext(UserContext)
    const [shoppingListOverviewList, setShoppingListOverviewList] = useState([
        {
            id: "sl01",
            name: "První seznam",
            state: "active",
            owner: "u1",
            memberList: ["u2"]
        },
        {
            id: "sl02",
            name: "Druhý seznam",
            state: "active",
            owner: "u2",
            memberList: ["u1", "u3"]
        }
    ]);

    function handleCreate() {
        setShoppingListOverviewList((current) => [
            ...current,
            {
                id: Math.random().toString(),
                name: "Nový úkol",
                state: "active",
                owner: loggedInUser,
                memberList: [],
            }
        ]);
    }

    function handleArchive(dtoIn) {
        setShoppingListOverviewList((current) => {
          const itemIndex = current.findIndex((item) => item.id === dtoIn.id);
          current[itemIndex] = { ...current[itemIndex], state: "archived" };
          return current.slice();
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
