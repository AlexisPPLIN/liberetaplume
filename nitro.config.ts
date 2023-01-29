import { defineNitroConfig } from 'nitropack'

export default defineNitroConfig({
    compressPublicAssets: { gzip: true, brotli: true },
    routeRules: {
        '/img/**': { headers: { 'Cache-Control': 'max-age=31536000' } },
    }
})