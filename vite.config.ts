import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import removeConsole from "vite-plugin-remove-console";

export default defineConfig({
    plugins: [
        vue(), 
        removeConsole({
            includes: ["log"],
            externalValue: ["console.log('✨ https://github.com/Situ-bei/keano')"]
        })
    ]
});
