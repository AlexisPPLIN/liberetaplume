import { defineNitroConfig } from 'nitropack'

export default defineNitroConfig({
    compressPublicAssets: { gzip: true, brotli: true }
})