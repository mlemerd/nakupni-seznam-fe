import { useState, useContext } from "react";
import AddMemberForm from "./addMemberForm";
import { DetailContext } from "./detailProvider";
import { UserContext } from "../../users/userProvider";
import RemoveMember from "./removeMember";

function MemberList() {
    const { data, handlerMap } = useContext(DetailContext);
    const { userMap, userList, loggedInUser } = useContext(UserContext);
    const [show, setShow] = useState(false);
  
    return (
      <div style={{ border: "1px solid grey", margin: "8px", padding: "8px" }}>
        <AddMemberForm
          show={show}
          data={data}
          userList={userList}
          handlerMap={handlerMap}
          handleClose={() => setShow(false)}
        />
        <div>
          Seznam členů {"  "}
          {data.owner === loggedInUser ? (
            <button onClick={() => setShow(true)}>Přidat člena</button>
          ) : (
            ""
          )}
        </div>
        <RemoveMember memberId={data.owner} data={userMap[data.owner]} isOwner={true} />
        {data.memberList.map((memberId) => (
          <RemoveMember
            key={memberId}
            memberId={memberId}
            data={userMap[memberId]}
            handlerMap={handlerMap}
            showRemoveButton={
              loggedInUser === data.owner || memberId === loggedInUser
            }
          />
        ))}
      </div>
    );
  }
  
  export default MemberList;