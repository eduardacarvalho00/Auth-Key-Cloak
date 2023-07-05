const getBase64 = (file: File): Promise<string | ArrayBuffer> => {
	return new Promise((resolve) => {
		let baseURL: string | ArrayBuffer;
		const reader = new FileReader();

		reader.readAsDataURL(file);

		reader.onload = () => {
			if (reader.result) baseURL = reader.result;
			resolve(baseURL);
		};
	});
};
