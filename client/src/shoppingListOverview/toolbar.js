import { Button } from "react-bootstrap"

function Toolbar ({handleCreate, showArchived, setShowArchived}) {
    return (
        <div>
            <Button type="btn" onClick={() => handleCreate()}>Create</Button>
            <Button type="btn" onClick={() => setShowArchived((current) => !current)}>
                Filter {showArchived.toString()}
            </Button>
        </div>
    )
}

export default Toolbar