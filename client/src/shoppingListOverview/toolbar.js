function Toolbar ({handleCreate, showArchived, setShowArchived}) {
    return (
        <div>
            <button onClick={() => handleCreate()}>Create</button>
            <button onClick={() => setShowArchived((current) => !current)}>
                Filter
            </button>
        </div>
    )
}

export default Toolbar