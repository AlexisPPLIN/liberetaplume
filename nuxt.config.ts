// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    app: {
        head: {
            charset: 'utf-8',
            title: 'Libère ta plume - Graphothérapeute',
            meta: [
                { name: 'description', content: 'Libère ta plume est un cabinet de Graphothérapie.' },
                { name: 'image', content: 'https://liberetaplume.fr/img/logo.png' }
            ],
            link: [
                { rel: 'icon', type: 'image/svg+xml', href: '/img/icons/feather.svg' }
            ]
        }
    }
});
