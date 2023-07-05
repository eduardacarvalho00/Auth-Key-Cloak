import ReactDOM from "react-dom/client";
import App from "@/App";
import { Providers } from "@contexts/Providers";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
	<Providers>
		<App />
	</Providers>,
);
