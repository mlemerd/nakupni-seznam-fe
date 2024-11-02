import { Modal, Button, Form } from "react-bootstrap";

function AddMemberForm ({show, handleClose, userList, handlerMap}) {
    return (
        <Modal show={show} onHide={handleClose}>
            <Form onSubmit={(e) => {
                e.preventDefault()
                e.stopPropagation()
                const formData = new FormData(e.target)
                const values = Object.fromEntries(formData)
                handlerMap.addMember({ memberId: values.memberId})
                handleClose()
            }}>

                <Modal.Header closeButton>
                    <Modal.Title>Přidat člena</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form.Label>Člen</Form.Label>
                    <Form.Select type="select" name="memberId" required>
                        {userList.map((user) => {
                            return (
                                <option hey={user.id} value={user.id}>
                                    {user.name}
                                </option>
                            )
                        })}
                    </Form.Select>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Zavřít
                    </Button>
                    <Button variant="primary" type="submit">
                        Uložit změny
                    </Button>
                </Modal.Footer>
            </Form>

        </Modal>
    )
}

export default AddMemberForm