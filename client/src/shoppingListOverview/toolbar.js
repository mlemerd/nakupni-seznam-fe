import { Button } from "react-bootstrap"

function Toolbar ({handleCreate, showArchived, setShowArchived}) {
    return (
        <div>
            <Button type="btn" onClick={() => handleCreate()}>Create</Button>
            <Button type="btn" onClick={() => setShowArchived((current) => !current)}>
                Filter
            </Button>
        </div>
    )
}

export default Toolbar