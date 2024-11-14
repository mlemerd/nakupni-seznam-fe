import Modal from "react-bootstrap/Modal";
import { Form } from "react-bootstrap";
import Button from "react-bootstrap/esm/Button";
import { useContext } from "react";

import { ShoppingListContext } from "./shoppingListItem";

function DeleteListModal({show, handleClose, item}) {
    const { handleDelete } = useContext(ShoppingListContext)

    const onSubmit = (e) => {
        e.preventDefault();
        handleDelete(item)
        handleClose()
    }

    return (
        <Modal show={show} onHide={handleClose}>
            <Form onSubmit={onSubmit}>
                <Modal.Header closeButton>
                    <Modal.Title>Opravdu chcete smazat seznam?</Modal.Title>
                </Modal.Header>
                <Modal.Footer>
                    <Button variant="primary" onClick={handleClose}>Zpět</Button>
                    <Button variant="secondary" type="submit">Smazat</Button>
                </Modal.Footer>
            </Form>
        </Modal>
    )
}

export default DeleteListModal