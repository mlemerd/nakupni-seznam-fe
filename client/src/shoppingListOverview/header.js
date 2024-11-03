import { useContext } from "react";
import { UserContext } from "../users/userProvider";
import { Dropdown } from "react-bootstrap";


function Header() {
    const { userList, loggedInUser, setLoggedInUser } = useContext(UserContext);

    const loggedInUserName = userList.find(user => user.id === loggedInUser)?.name || "Vyber uživatele"

    return (
        <div className="row">
            <div className="col-11">
                <h2>
                     AppName
                </h2>
            </div>

            <div className="col">
                <Dropdown>
                    <Dropdown.Toggle variant="secondary" id="dropdown-basic">
                        {loggedInUserName}
                    </Dropdown.Toggle>

                    <Dropdown.Menu>
                        {userList.map((user) => (
                            <Dropdown.Item 
                                key={user.id} 
                                href="#" 
                                onClick={() => setLoggedInUser(user.id)}
                                style={{

                                    backgroundColor: user.id === loggedInUser ? '#007bff' : 'transparent',
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
