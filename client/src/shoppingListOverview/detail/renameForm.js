import  Modal  from "react-bootstrap/modal";
import  Form  from "react-bootstrap/form";
import Button from "react-bootstrap/button";
import {ModalTitle} from "react-bootstrap";
import { useContext } from "react";
import { DetailContext } from "./detailProvider";

function RenameForm({ show, handleClose, data }) {
    const {handlerMap}= useContext(DetailContext)
    return (
        <Modal show={show} onHide={handleClose}>
          <Form
            onSubmit={(e) => {
              e.preventDefault();
              e.stopPropagation();
              const formData = new FormData(e.target);
              const values = Object.fromEntries(formData);
              handlerMap.updateName({ name: values.name });
              handleClose();
            }}
          >
            <Modal.Header closeButton>
                <ModalTitle>Přejmenovat seznam</ModalTitle>
            </Modal.Header>
            <Modal.Body>
                <Form.Label>Name</Form.Label>
                <Form.Control
                    type = "text"
                    name = "name"
                    defaultValue={data.name}
                    required
                />
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                    Zavřít
                </Button>
                <Button type="submit" variant="primary">
                    Uložit změny
                </Button>
            </Modal.Footer>
          </Form>
        </Modal>
    )
}

export default RenameForm