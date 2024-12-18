import { useTranslation } from "react-i18next";
function RemoveMember({ data, handlerMap, isOwner, showRemoveButton }) {
  const {t} = useTranslation()
    return (
      <div>
        {data.name}
        {isOwner ? " true " : " "}
        {showRemoveButton ? (
          <button onClick={() => handlerMap.removeMember({ memberId: data.id })}>
            {t("remove")}
          </button>
        ) : null}
      </div>
    );
  }
  
  export default RemoveMember;