import { useContext, useState } from "react";
import { UserContext } from "../users/userProvider";
import { Button } from "react-bootstrap";
import DeleteListModal from "./deleteListModal";
import "./style.css"
import { useTranslation } from "react-i18next";
/* import Icon from '@mdi/react';
import { mdiArchiveOutline, mdiArchiveCheck } from '@mdi/js'; */

function OverviewList({ shoppingListOverviewList, handleArchive, handleDelete, setSelectedList }) {
    const { loggedInUser } = useContext(UserContext);
    const [showModal, setShowModal] = useState(false)
    const handleClose = () => setShowModal(false)
    const handleShow = () => setShowModal(true)
    const {t} = useTranslation()


    return (
        <div >
            {shoppingListOverviewList.map((item) => (
                <Button key={item.id} className="slItem"onClick={() => setSelectedList(item)}>
                    <div className="row">
                        <div className="col-6">
                            <h5>{item.name}</h5>
                        </div>
                        <div className="col">
                            {loggedInUser === item.owner && (
                                <>
                                    <Button className="buttonMain" onClick={() => handleArchive(item)}>{t("archive")}</Button>
                                    <Button className="buttonMain" onClick={() => handleShow(item)}>{t("delete")}</Button>
                                    <DeleteListModal show={showModal} handleClose={handleClose} item={item}/>
                                </>
                            )}
                        </div>
                    </div>
                    <p>{item.state}</p>
                </Button>
            ))}
        </div>
    );
}

export default OverviewList;
