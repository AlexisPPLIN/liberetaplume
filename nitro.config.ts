import { defineNitroConfig } from 'nitropack'

export default defineNitroConfig({
    compressPublicAssets: { gzip: true, brotli: true },
    routeRules: {
        '/img/**': { headers: { 'Cache-Control': 'max-age=31536000' } },
        '/_nuxt/**': { headers: { 'Cache-Control': 'max-age=31536000' } },
        '/sitemap.xml': { headers: { 'Content-type': 'application/xml' } },
    }
})