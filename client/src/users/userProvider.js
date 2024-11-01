import { createContext, useState } from "react";

export const UserContext = createContext()

function UserProvider ({children}) {
    const [loggedInUser, setLoggedInUser] = useState ("u1")
    const userMap = {
        u1: {
            id: "u1",
            name: "kvído"
        },
        u2: {
            id: "u2",
            name: "hugo"
        },
        u3: {
            id: "u3",
            name: "arnošt"
        },
        u4: {
            id: "u4",
            name: "bonifác"
        }
    }

    const value = {
        userMap,
        userList: Object.keys(userMap).map((userId) => userMap[userId]),
        loggedInUser,
        setLoggedInUser
    }

    console.log('Initial loggedInUser:', loggedInUser);
    return <UserContext.Provider value={value}>{children}</UserContext.Provider>
}

export default UserProvider