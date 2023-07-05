import { useKeycloak } from "@react-keycloak/web";
import { MainRoutes } from "./routes";
import { Loading } from "@components/Loading";

export default function App() {
	const { initialized } = useKeycloak();

	return !initialized ? <Loading /> : <MainRoutes />;
}
