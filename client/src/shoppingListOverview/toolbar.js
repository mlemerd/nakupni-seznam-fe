import { Button } from "react-bootstrap"
import CreateShoppingListModal from "./newShoppingListModal"
import { useState } from "react"
import "./style.css"

import Icon from '@mdi/react';
import { mdiPlusCircleOutline, mdiFilterOutline, mdiFilterCheck } from '@mdi/js';

function Toolbar ({ showArchived, setShowArchived}) {
    const [showModal, setShowModal] = useState(false)
    const handleClose = () => setShowModal(false)
    const handleShow = () => setShowModal(true)

    function isFiltered() {
        if (showArchived === true) {
            return(
                <div><Icon path={mdiFilterOutline} size={1} /></div>
            )
        }
        else {
            return(
                <div><Icon path={mdiFilterCheck} size={1} /></div>
            )
        }
    }

    return (
        <div>
            <Button className="buttonMain" type="btn" onClick={handleShow}>
                 <Icon path={mdiPlusCircleOutline} size={1} onClick={handleShow}/>
            </Button>
         {/*    <Button type="btn" onClick={handleShow}>Create</Button> */}
            <CreateShoppingListModal show={showModal} handleClose={handleClose} />
            <Button className="buttonMain" type="btn" onClick={() => setShowArchived((current) => !current)}>
                {isFiltered()}
            </Button>
        </div>
    )
}

export default Toolbar