import { useContext, useState } from "react";
import { UserContext } from "../users/userProvider";
import { Button } from "react-bootstrap";
import DeleteListModal from "./deleteListModal";

function OverviewList({ shoppingListOverviewList, handleArchive, handleDelete, setSelectedList }) {
    const { loggedInUser } = useContext(UserContext);
    const [showModal, setShowModal] = useState(false)
    const handleClose = () => setShowModal(false)
    const handleShow = () => setShowModal(true)


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
                            <Button onClick={() => handleShow(item)}>Delete</Button>
                            <DeleteListModal show={showModal} handleClose={handleClose} item={item}/>
                        </>
                    )}
                </div>
            ))}
        </div>
    );
}

export default OverviewList;
