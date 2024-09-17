// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  // css: ["~/assets/scss/main.scss"],

  runtimeConfig: {
    // The private keys which are only available within server-side
    apiSecret: "apiSecret",
    // Keys within public, will be also exposed to the client-side
    public: {
      baseURL: process.env.APP_BASE_URL || "default_api_url",
      appBaseURL:
        process.env.APP_BASE_URL_APP || "http://infocir.linox.net.pe/",
      capBaseURL:
        process.env.APP_BASE_URL_CAP || "http://cap-infocir.linox.net.pe/",
    },
  },
  modules: ["nuxt3-leaflet"],

  app: {
    head: {
      link: [
        {
          rel: "apple-touch-icon",
          sizes: "180x180",
          type: "image/x-icon",
          href: "/assets/images/favicons/apple-touch-icon.png",
        },
        {
          rel: "icon",
          sizes: "32x32",
          type: "image/png",
          href: "/assets/images/favicons/favicon-32x32.png",
        },
        {
          rel: "icon",
          sizes: "16x16",
          type: "image/png",
          href: "/assets/images/favicons/favicon-16x16.png",
        },
        {
          rel: "stylesheet",
          href: "https://fonts.googleapis.com/css2?family=Amatic+SC:wght@400;700&family=Barlow:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;1,300;1,400;1,500;1,600&display=swap",
        },
        { rel: "stylesheet", href: "/assets/css/bootstrap.min.css" },
        // { rel: "stylesheet", href: "/assets/css/bootstrap-datepicker.min.css" },
        // { rel: "stylesheet", href: "/assets/css/vegas.min.css" },
        // { rel: "stylesheet", href: "/assets/css/animate.min.css" },
        // {
        //   rel: "stylesheet",
        //   href: "/assets/plugins/glightbox/glightbox.min.css",
        // },
        { rel: "stylesheet", href: "/assets/css/fontawesome-all.min.css" },
        { rel: "stylesheet", href: "/assets/css/agrikol_iconl.css" },
        { rel: "stylesheet", href: "/assets/css/style.css" },
        // { rel: "stylesheet", href: "/assets/css/responsive.css" },
      ],
      script: [
        // { src: "/assets/plugins/glightbox/glightbox.min.js", body: true },
        // { src: "/assets/plugins/accordion/accordion.min.js", body: true },
      ],
    },
    // baseURL:
  },
});
