// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    app: {
        head: {
            charset: 'utf-8',
            title: 'Libère ta plume - Graphothérapeute',
            meta: [
                { name: 'description', content: 'Libère ta plume est un cabinet de Graphothérapie.' },
                { name: 'image', content: 'https://liberetaplume.fr/img/logo.png' },
                // Open graph
                { name: 'og:type', content: 'website' },
                { name: 'og:title', content: 'Libère ta plume - Graphothérapeute' },
                { name: 'og:description', content: 'Libère ta plume est un cabinet de Graphothérapie.' },
                { name: 'og:url', content: 'https://liberetaplume.fr' },
                { name: 'og:locale', content: 'fr_FR' },
                { name: 'og:image', content: 'https://liberetaplume.fr/img/logo.png' },
                { name: 'og:image:alt', content: 'Logo de Libère ta plume' },
                { name: 'og:image:height', content: '399' },
                { name: 'og:image:width', content: '399' },
            ],
            link: [
                { rel: 'icon', type: 'image/svg+xml', href: '/img/icons/feather-filled.svg' },
                { rel: 'icon', type: 'image/png', href: '/img/icons/feather-filled.png' }
            ],
            htmlAttrs: {
                lang: 'fr'
            }
        }
    }
});
