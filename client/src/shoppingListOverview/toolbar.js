import { Button } from "react-bootstrap"
import CreateShoppingListModal from "./newShoppingListModal"
import { useState } from "react"

function Toolbar ({ showArchived, setShowArchived}) {
    const [showModal, setShowModal] = useState(false)
    const handleClose = () => setShowModal(false)
    const handleShow = () => setShowModal(true)
    return (
        <div>
            <Button type="btn" onClick={handleShow}>Create</Button>
            <CreateShoppingListModal show={showModal} handleClose={handleClose} />
            <Button type="btn" onClick={() => setShowArchived((current) => !current)}>
                Filter {showArchived.toString()}
            </Button>
        </div>
    )
}

export default Toolbar