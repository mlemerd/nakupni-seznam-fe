import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { useState, useContext } from "react";
import { ShoppingListContext } from "./shoppingListItem";

function CreateShoppingListModal({ show, handleClose }) {
    const [name, setName] = useState("");
    const { handleCreate } = useContext(ShoppingListContext);

    const onSubmit = (e) => {
        e.preventDefault();
        handleCreate({ name });
        handleClose();
    };

    return (
        <Modal show={show} onHide={handleClose}>
            <Form onSubmit={onSubmit}>
                <Modal.Header closeButton>
                    <Modal.Title>Vytvořit nový nákupní seznam</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form.Group controlId="formShoppingListName">
                        <Form.Label>Název</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Zadejte název nákupního seznamu"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            required
                        />
                    </Form.Group>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Zavřít
                    </Button>
                    <Button type="submit" variant="primary">
                        Vytvořit
                    </Button>
                </Modal.Footer>
            </Form>
        </Modal>
    );
}

export default CreateShoppingListModal;
