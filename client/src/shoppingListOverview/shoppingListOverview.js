import { useState } from "react";
import OverviewProvider from "./shoppingListOVerviewProvider";
import { ShoppingListProvider, useShoppingList } from "./shoppingListItem";
//import NewShoppingListModal from "./newShoppingListModal";

function Overview ({setSelectedList}) {
/*     const [showModal, setShowModal] = useState(false)
    const handleShow = () => setShowModal(true)
    const handleClose = () => setShowModal(false)

    const {handleCreate} = useShoppingList */
    return (
        <ShoppingListProvider>
            <OverviewProvider setSelectedList={setSelectedList}/>{/* >
                <button onClick={handleShow}>Vytvořit nový seznam</button> 
                <NewShoppingListModal show={showModal} handleClose={handleClose} handleCreate={handleCreate} />
            </OverviewProvider> */}
        </ShoppingListProvider>
    )
}

export default Overview