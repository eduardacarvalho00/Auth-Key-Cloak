/// <reference types="vitest" />
/// <reference types="vite/client" />

import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import * as path from "path";

export default defineConfig({
	resolve: {
		alias: {
			"@api": path.resolve(__dirname, "./src/api"),
			"@assets": path.resolve(__dirname, "./src/assets"),
			"@components": path.resolve(__dirname, "./src/components"),
			"@configs": path.resolve(__dirname, "./src/configs"),
			"@constants": path.resolve(__dirname, "./src/constants"),
			"@contexts": path.resolve(__dirname, "./src/contexts"),
			"@errors": path.resolve(__dirname, "./src/errors"),
			"@hooks": path.resolve(__dirname, "./src/hooks"),
			"@interfaces": path.resolve(__dirname, "./src/interfaces"),
			"@mutations": path.resolve(__dirname, "./src/mutations"),
			"@pages": path.resolve(__dirname, "./src/pages"),
			"@queries": path.resolve(__dirname, "./src/queries"),
			"@routes": path.resolve(__dirname, "./src/routes"),
			"@styles": path.resolve(__dirname, "./src/styles"),
			"@utils": path.resolve(__dirname, "./src/utils"),
			"@validations": path.resolve(__dirname, "./src/validations"),
			"@": path.resolve(__dirname, "./src"),
		},
	},
	plugins: [react()],
	test: {
		globals: true,
		environment: "jsdom",
	},
});
