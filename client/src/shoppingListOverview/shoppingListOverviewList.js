import useShoppingList from "./shoppingListItem";

function OverviewList () {
    const {
        shoppingListOverviewList,
        handleArchive,
        handleDelete
    } = useShoppingList();

    return(
        <div>
            <h2>Shopping List Overview</h2>
            {shoppingListOverviewList.map((item) => (
                <div key={item.id}>
                    <p>Name: {item.name}</p>
                    <p>State: {item.state}</p>
                    <p>Owner: {item.owner}</p>
                    <p>Members: {item.memberList.join(", ")}</p>
                    <button onClick={() => handleArchive(item)}>Archive</button>
                    <button onClick={() => handleDelete(item)}>Delete</button>
                </div>
            ))}
        </div>
    )
}

export default OverviewList