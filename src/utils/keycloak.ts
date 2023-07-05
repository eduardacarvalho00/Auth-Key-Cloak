import Keycloak from "keycloak-js";

export const keycloak = new Keycloak({
	url: "http://localhost:8080/auth",
	realm: "keycloack-react-app", //name realm
	clientId: "react-auth", // name clientId
});
