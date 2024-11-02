import { Button } from "react-bootstrap";
import RenameForm from "./renameForm";
import { useState, useContext, useEffect } from "react";
import { DetailContext } from "./detailProvider";
import { UserContext } from "../../users/userProvider";
import useShoppingList from "../shoppingListItem";

function Toolbar () {
    const {shoppingListOverviewList} = useShoppingList()
    const [showModal, setShowModal] = useState(false)
    const handleClose = () => setShowModal(false)
    const handleShow = () => setShowModal(true)
    const {data} = useContext(DetailContext)
    const {loggedInUser} = useContext(UserContext)

    useEffect(() => {
        console.log("shoppingListOverviewList: ", shoppingListOverviewList)
    }, [shoppingListOverviewList])

    if (!shoppingListOverviewList) {
        return <div>Loading...</div>;
    }

    return(
        <div>
            {shoppingListOverviewList.map((item) => (
                <div key={item.id}>
                    {loggedInUser === item.owner && (
                        <>
                            <Button onClick={handleShow}>Přejmenovat seznam</Button>
                            <RenameForm show={showModal} handleClose={handleClose} data={data}/>
                        </>
                    )}
                </div>
            ))}
        </div>
    )
}

export default Toolbar


/* import { Button } from "react-bootstrap";
import RenameForm from "./renameForm";
import { useState, useContext } from "react";
import { DetailContext } from "./detailProvider";
import { UserContext } from "../../users/userProvider";

function Toolbar ({shoppingListOverviewList}) {
    const [showModal, setShowModal] = useState(false)
    const handleClose = () => setShowModal(false)
    const handleShow = () => setShowModal(true)
    const {data} = useContext(DetailContext)
    const {loggedInUser} = useContext(UserContext)

    return(
        <div>
            {shoppingListOverviewList.map((item) => (
                <div key={item.id}>
                    {loggedInUser === item.owner && (
                        <>
                            <Button onClick={handleShow}>Přejmenovat seznam</Button>
                            <RenameForm show={showModal} handleClose={handleClose} data={data}/>
                        </>
                    )}
                </div>

            ))}
            
        </div>
    )
}

export default Toolbar */