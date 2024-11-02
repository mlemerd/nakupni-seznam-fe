import { Button } from "react-bootstrap";
import RenameForm from "./renameForm";
import { useState } from "react";

function Toolbar () {
    const [showModal, setShowModal] = useState(false)
    const handleClose = () => setShowModal(false)
    const handleShow = () => setShowModal(true)

    //dummy data for example purposes
    const data = { name: "Seznam" };
    const handlerMap = { updateName: (updatedData) => console.log(updatedData) };

    return(
        <div>
            <Button onClick={handleShow}>Přejmenovat seznam</Button>
            <RenameForm show={showModal} handleClose={handleClose} data={data} handlerMap={handlerMap}/>
        </div>
    )
}

export default Toolbar