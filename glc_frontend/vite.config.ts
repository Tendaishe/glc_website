import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [react()],
    server: {
        proxy: {
            // Proxying requests from Vite server to Netlify server
            "/.netlify/functions/": {
                target: "http://localhost:8888",
                changeOrigin: true,
                rewrite: (path) => path.replace(/^\/\.netlify\/functions/, ""),
            },
        },
    },
});
