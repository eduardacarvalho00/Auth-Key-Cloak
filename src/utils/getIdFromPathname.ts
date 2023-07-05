import { useLocation } from "react-router-dom";

const getIdFromPathname = () => {
	const { pathname } = useLocation();

	return pathname.replace(/\//g, "");
};
