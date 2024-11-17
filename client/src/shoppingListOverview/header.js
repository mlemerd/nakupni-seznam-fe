import { useContext } from "react";
import { UserContext } from "../users/userProvider";
import { Dropdown } from "react-bootstrap";


function Header() {
    const { userList, loggedInUser, setLoggedInUser } = useContext(UserContext);

    const loggedInUserName = userList.find(user => user.id === loggedInUser)?.name || "Vyber uživatele"

    return (
        <div className="row" style={{backgroundImage: "linear-gradient(to bottom right, #90CBA4, #59B176"}}>
            <div className="col-10">
                <h2 style={{ color: "#0C0C1C"}}>
                     AppName
                </h2>
            </div>

            <div className="col">
                <Dropdown style={{margin:"3px"}}>
                    <Dropdown.Toggle style={{backgroundColor:"#305252", borderColor:"#305252"}} id="dropdown-basic">
                        {loggedInUserName}
                    </Dropdown.Toggle>

                    <Dropdown.Menu>
                        {userList.map((user) => (
                            <Dropdown.Item 
                                key={user.id} 
                                href="#" 
                                onClick={() => setLoggedInUser(user.id)}
                                style={{

                                    backgroundColor: user.id === loggedInUser ? '#D77A61' : 'transparent',
                                    color: user.id === loggedInUser ? 'white' : 'black',
                                }}>
                                    {user.name} 
                            </Dropdown.Item>
                        ))}
                    </Dropdown.Menu>
                </Dropdown>
            </div>
        </div>
    );
}

export default Header;
