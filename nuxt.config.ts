// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    app: {
        head: {
            charset: 'utf-8',
            title: 'Libère ta plume - Graphothérapie',
            meta: [
                { name: 'og:image', content: 'http://liberetaplume.fr/img/logo.png' },
                { name: 'og:image:secure_url', content: 'https://liberetaplume.fr/img/logo.png' },
                { name: 'og:image:type', content: 'image/png' },
                { name: 'og:image:alt', content: 'Logo de Libère ta plume' },
                { name: 'og:image:height', content: '399' },
                { name: 'og:image:width', content: '399' },
            ],
            link: [
                { rel: 'icon', sizes: 'any', href: '/img/favicons/favicon.ico' },
                { rel: 'icon', type: 'image/svg+xml', href: '/img/favicons/favicon.svg' },
                { rel: 'icon', type: 'image/png', sizes: '32x32', href: '/img/favicons/favicon_32x32.png' },
                { rel: 'icon', type: 'image/png', sizes: '128x128', href: '/img/favicons/favicon_128x128.png' },
                { rel: 'icon', type: 'image/png', sizes: '180x180', href: '/img/favicons/favicon_180x180.png' },
                { rel: 'icon', type: 'image/png', sizes: '192x192', href: '/img/favicons/favicon_192x192.png' },
                { rel: 'apple-touch-icon', type: 'image/png', sizes: '180x180', href: '/img/favicons/favicon_180x180.png' },
            ],
            htmlAttrs: {
                lang: 'fr'
            },
        },
        pageTransition: {      
            name: 'loading',
            appear: true
        },    
        layoutTransition: {      
            name: 'loading',
            appear: true
        }
    },
    extends: [
        'nuxt-seo-kit'
    ],
    runtimeConfig: {
        public: {
            siteUrl: process.env.NUXT_PUBLIC_SITE_URL || 'https://liberetaplume.fr',
            siteName: 'Libère ta plume - Graphothérapie',
            siteDescription: "Graphothérapeute vendéenne certifiée en rééducation du geste d'écriture pour enfants et adultes. Aide à l'apprentissage / rééducation du geste d'écriture.",
            language: 'fr-FR',
            trailingSlash: true,
        }
    },
    nitro: {
        prerender: {
            crawlLinks: true,
            routes: [
                '/',
            ]
        }
    },
    linkChecker: {
        failOn404: true
    },
});
