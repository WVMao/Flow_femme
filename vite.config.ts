import { defineConfig } from 'vite'

export default defineConfig({
    base: './', // Using relative base path
    server: {
        port: 5175,
        host: true
    }
})
