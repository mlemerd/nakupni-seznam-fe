import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { useState, useContext } from "react";
import { ShoppingListContext } from "./shoppingListItem";
import { useTranslation } from "react-i18next";

function CreateShoppingListModal({ show, handleClose }) {
    const [name, setName] = useState("");
    const { handleCreate } = useContext(ShoppingListContext);
    const {t} = useTranslation()

    const onSubmit = (e) => {
        e.preventDefault();
        handleCreate({ name });
        handleClose();
    };

    return (
        <Modal show={show} onHide={handleClose}>
            <Form onSubmit={onSubmit}>
                <Modal.Header closeButton>
                    <Modal.Title>{t("createForm")}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form.Group controlId="formShoppingListName">
                        <Form.Label>{t("name")}</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder= {t("enterName")}
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            required
                        />
                    </Form.Group>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        {t("close")}
                    </Button>
                    <Button type="submit" variant="primary">
                        {t("create")}
                    </Button>
                </Modal.Footer>
            </Form>
        </Modal>
    );
}

export default CreateShoppingListModal;
