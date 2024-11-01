import { useContext } from "react"
import { UserContext } from "../users/userProvider"

function Header () {
    const { userList, loggedInUser, setLoggedInUser } = useContext(UserContext)

    return (
        <div>
            AppName

            {userList.map((user) =>(
                <button key={user.id} onClick={() => setLoggedInUser(user.id)}>
                    {user.name} {(user.id === loggedInUser).toString()}
                </button>
            ))}
        </div>
    )
}

export default Header