function RemoveMember({ data, handlerMap, isOwner, showRemoveButton }) {
    return (
      <div>
        {data.name}
        {isOwner ? " true " : " "}
        {showRemoveButton ? (
          <button onClick={() => handlerMap.removeMember({ memberId: data.id })}>
            remove
          </button>
        ) : null}
      </div>
    );
  }
  
  export default RemoveMember;