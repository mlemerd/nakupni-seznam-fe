import DetailProvider from "./detailProvider";
import Toolbar from "./detailToolbar";
import MemberList from "./memberList";

import { Card } from "react-bootstrap";

function Detail ({selectedList}) {
    return (
        <div>
            <Card className="card-header">
                <h3>
                    Detail seznamu
                </h3>
                <p>Název: {selectedList.name}</p>
                <p>Stav: {selectedList.state}</p>
                <p>Majitel: {selectedList.owner}</p>
            </Card>
            <Card className="card-body">
                <Toolbar/>
              <DetailProvider>
                 <MemberList/>
              </DetailProvider>
            </Card>

        </div>
    )
}

export default Detail