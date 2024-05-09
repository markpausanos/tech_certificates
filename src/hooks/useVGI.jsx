import { useState, useEffect } from "react";

const useVGI = (firstName, lastName) => {
	const url = "https://608search.vgitraining.com/epasearch.php";

	const [vgiData, setVgiData] = useState("");
	const [isLoading, setIsLoading] = useState(true);

	useEffect(() => {
		const fetchData = async () => {
			try {
				const response = await fetch(url, {
					method: "GET",
					headers: {
						"Content-Type": "text/html",
					},
				});

				if (!response.ok) {
					throw new Error("Network response was not ok");
				}
				const data = await response.text();
				setVgiData(data);
				setIsLoading(false);
			} catch (error) {
				console.error("Error fetching VGI data:", error);
				setIsLoading(false);
			}
		};
		fetchData();
	}, [firstName, lastName, url]);

	return { vgiData, isLoading };
};

export default useVGI;
