import { useState } from "react";
import { useVGI } from "./hooks/useVGI";
import "./App.css";

function App() {
	const [vgiData, isLoading] = useVGI("", "");

	return (
		<div>
			{isLoading && <p>Loading...</p>}
			{!isLoading && <p>{vgiData}</p>}
		</div>
	);
}

export default App;
