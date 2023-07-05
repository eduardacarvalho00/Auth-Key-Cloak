import { Routes, Route } from "react-router-dom";

import { Home } from "@pages/Home";
import { NotFound } from "@pages/NotFound";
import { useKeycloak } from "@react-keycloak/web";
import { Login } from "@pages/Login";

export const MainRoutes = () => {
	const { keycloak } = useKeycloak();

	if (!keycloak.authenticated) {
		return (
			<Routes>
				<Route path="/" element={<Login />} />
				<Route path="*" element={<NotFound />} />
			</Routes>
		);
	}

	return (
		<Routes>
			<Route path="/" element={<Home />} />
		</Routes>
	);
};
