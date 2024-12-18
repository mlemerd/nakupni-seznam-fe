import { useContext } from "react";
import { UserContext } from "../users/userProvider";
import "./style.css"
import { Dropdown } from "react-bootstrap";
import { useTranslation } from "react-i18next";

function Header() {
    const { userList, loggedInUser, setLoggedInUser } = useContext(UserContext);
    const loggedInUserName = userList.find(user => user.id === loggedInUser)?.name || "Vyber uživatele";

    const { t, i18n } = useTranslation();
    const lngs = {
      en: { nativeName: "English", shortName: "en" },
      cs: { nativeName: "Čeština", shortName: "cs" },
    };
    const currentLanguage = lngs[i18n.resolvedLanguage] || lngs.en;
    const welcomeText = t("welcome")
    console.log("welcome text:", welcomeText)

    return (
        <div className="row" style={{backgroundImage: "linear-gradient(to bottom right, #90CBA4, #59B176"}}>
            <div className="col-9">
                <h2 style={{ color: "#0C0C1C"}}>
                     {t(`welcome`)}
                </h2>
            </div>

            <div className="col">
                <Dropdown style={{margin:"3px"}}>
                    <Dropdown.Toggle style={{backgroundColor:"#305252", borderColor:"#305252"}} id="dropdown-basic">
                      {currentLanguage.shortName}
                    </Dropdown.Toggle>
                    <Dropdown.Menu>
                        {Object.keys(lngs).map((lng) => (
                        <Dropdown.Item
                            key={lng}
                            active={i18n.resolvedLanguage === lng}
                            onClick={() => i18n.changeLanguage(lng)}
                            style={{
                                backgroundColor: i18n.resolvedLanguage === lng ? "#D77A61" : "transparent",
                                color: i18n.resolvedLanguage === lng ? "white" : "black",
                            }}
                        >
                            {lngs[lng].nativeName}
                        </Dropdown.Item>
                        ))}
                    </Dropdown.Menu>
                </Dropdown>
            </div>

            <div className="col">
                <Dropdown style={{margin:"3px"}}>
                    <Dropdown.Toggle style={{backgroundColor:"#305252", borderColor:"#305252"}} id="dropdown-basic">
                        {t('user')}: {loggedInUserName} {/* Použito překládání */}
                    </Dropdown.Toggle>

                    <Dropdown.Menu>
                        {userList.map((user) => (
                            <Dropdown.Item 
                                key={user.id} 
                                href="#" 
                                onClick={() => setLoggedInUser(user.id)}
                                style={{
                                    backgroundColor: user.id === loggedInUser ? '#D77A61' : 'transparent',
                                    color: user.id === loggedInUser ? 'white' : 'black',
                                }}>
                                    {user.name} 
                            </Dropdown.Item>
                        ))}
                    </Dropdown.Menu>
                </Dropdown>
            </div>
        </div>
    );
}

export default Header;
