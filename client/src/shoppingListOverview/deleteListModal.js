import Modal from "react-bootstrap/Modal";
import { Form } from "react-bootstrap";
import Button from "react-bootstrap/esm/Button";
import { useContext } from "react";
import { useTranslation } from "react-i18next";

import { ShoppingListContext } from "./shoppingListItem";

function DeleteListModal({show, handleClose, item}) {
    const { handleDelete } = useContext(ShoppingListContext)
    const {t} = useTranslation()

    const onSubmit = (e) => {
        e.preventDefault();
        handleDelete(item)
        handleClose()
    }

    return (
        <Modal show={show} onHide={handleClose}>
            <Form onSubmit={onSubmit}>
                <Modal.Header closeButton>
                    <Modal.Title>{t("deleteConfirm")}</Modal.Title>
                </Modal.Header>
                <Modal.Footer>
                    <Button variant="primary" onClick={handleClose}>{t("back")}</Button>
                    <Button variant="secondary" type="submit">{t("delete")}</Button>
                </Modal.Footer>
            </Form>
        </Modal>
    )
}

export default DeleteListModal