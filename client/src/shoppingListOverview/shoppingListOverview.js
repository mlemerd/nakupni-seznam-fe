import OverviewProvider from "./shoppingListOVerviewProvider";
import { ShoppingListProvider } from "./shoppingListItem";
import './style.css'

function Overview ({setSelectedList, selectedList}) {
    return (
        <div className='row'>
            <ShoppingListProvider>
                <OverviewProvider setSelectedList={setSelectedList} selectedList={selectedList}/>
            </ShoppingListProvider>
        </div>
    )
}

export default Overview