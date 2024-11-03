import { useContext } from "react";
import { UserContext } from "../users/userProvider";
import { Button } from "react-bootstrap";

function OverviewList({ shoppingListOverviewList, handleArchive, handleDelete, setSelectedList }) {
    const { loggedInUser } = useContext(UserContext);

    return (
        <div>
            <h3>Shopping List Overview</h3>
            {shoppingListOverviewList.map((item) => (
                <div key={item.id}>
                    <p>Name: {item.name}</p>
                    <p>State: {item.state}</p>
                    <p>Owner: {item.owner}</p>
                    <p>Members: {item.memberList.join(", ")}</p>
                    <button onClick={() => setSelectedList(item)}>Detail</button>
                    {loggedInUser === item.owner && (
                        <>
                            <Button onClick={() => handleArchive(item)}>Archive</Button>
                            <Button onClick={() => handleDelete(item)}>Delete</Button>
                        </>
                    )}
                </div>
            ))}
        </div>
    );
}

export default OverviewList;
