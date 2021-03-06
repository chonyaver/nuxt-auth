/* eslint-disable prettier/prettier */
require('dotenv').config()

export default {
    mode: 'universal',
    /*
     ** Headers of the page
     */
    head: {
        title: process.env.npm_package_name || '',
        meta: [
            { charset: 'utf-8' },
            { name: 'viewport', content: 'width=device-width, initial-scale=1' },
            {
                hid: 'description',
                name: 'description',
                content: process.env.npm_package_description || ''
            }
        ],
        link: [
            { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
            { rel: 'stylesheet', href: 'https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css' }
        ],
        script: [
            { src: 'https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js' },
            { src: 'https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.16.0/umd/popper.min.js' },
            { src: 'https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js' }
        ]
    },
    /*
     ** Customize the progress-bar color
     */
    loading: { color: '#004d75' },
    /*
     ** Global CSS
     */
    css: [],
    /*
     ** Plugins to load before mounting the App
     */
    plugins: ['~plugins/axios'],
    /*
     ** Nuxt.js dev-modules
     */
    buildModules: [
        // Doc: https://github.com/nuxt-community/eslint-module
        '@nuxtjs/eslint-module'
    ],
    /*
     ** Nuxt.js modules
     */
    modules: [
        // Doc: https://github.com/nuxt-community/modules/tree/master/packages/bulma
        '@nuxtjs/bulma',
        // Doc: https://axios.nuxtjs.org/usage
        '@nuxtjs/axios',
        // Doc: https://github.com/nuxt-community/dotenv-module
        '@nuxtjs/dotenv',
        '@nuxtjs/auth',
        '@nuxtjs/strapi',
        '@nuxtjs/cloudinary',
    ],
    /*
     ** Axios module configuration
     ** See https://axios.nuxtjs.org/options
     */
    axios: {
        baseURL: process.env.API_AUTH_URL
    },
    /*
     ** Auth module configuration
     ** See https://auth.nuxtjs.org/schemes/local.html#options
     */
    auth: {
        strategies: {
            local: {
                endpoints: {
                    login: {
                        url: 'auth/local',
                        method: 'post',
                        propertyName: 'jwt'
                    },
                    user: {
                        url: 'users/me',
                        method: 'get',
                        propertyName: false
                    },
                    logout: false
                }
            }
        }
    },

    env: {
        apiUrl: process.env.API_AUTH_URL
    },

    strapi: {
        url: process.env.API_AUTH_URL,
        entities: [{
                name: 'global',
                type: 'single'
            },
            {
                name: 'homepage',
                type: 'single'
            },
            {
                name: 'categories',
                type: 'collection'
            },
            {
                name: 'currencies',
                type: 'collection'
            },
            {
                name: 'users',
                type: 'collection'
            },
            {
                name: 'users_permissions_user',
                type: 'collection'
            },
            {
                name: 'abouts',
                type: 'collection'
            },
            {
                name: 'guides',
                type: 'collection'
            },
            {
                name: 'bankandfees',
                type: 'collection'
            },
            {
                name: 'contactuses',
                type: 'collection'
            },
            {
                name: 'paypals',
                type: 'collection'
            },
            {
                name: 'webmonies',
                type: 'collection'
            },
            {
                name: 'perfectmonies',
                type: 'collection'
            },
            {
                name: 'netellers',
                type: 'collection'
            },
            {
                name: 'skrills',
                type: 'collection'
            }
        ]
    },

    cloudinary: {
        cloudName: process.env.CLOUD_NAME || 'hltvo8sog',
        apiKey: process.env.API_KEY || '884288945295763',
        apiSecret: process.env.API_SECRET || 'krBjEbcaMLhX6neridNWcelveLY',
        secure: true,
        useComponent: true,
    },

    /*
     ** Build configuration
     */
    build: {
        postcss: {
            preset: {
                features: {
                    customProperties: false
                }
            }
        },
        /*
         ** You can extend webpack config here
         */
        extend(config, ctx) {}
    }
}
