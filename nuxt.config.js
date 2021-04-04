export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: "Kodyolu - Sıfırdan kodlama öğren ve iş bul.",
    htmlAttrs: {
      lang: "tr"
    },
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      {
        hid: "description",
        name: "description",
        content: "Sıfırdan kodlama öğren ve iş bul."
      },
      {
        name: "keywords",
        content:
          "kodyolu, kod, yazılım, kodyol, yolkod, kodlama, yazılım öğren, kodlama öğren, programlama, programlama öğren, site yap, site oluştur, web tasarım, web development, yazılım işi, yurtdışına gitmek, yazılım mühendisi"
      }
    ],
    link: [
      { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
      {
        rel: "apple-touch-icon",
        sizes: "180x180",
        href: "/apple-touch-icon.png"
      },
      {
        rel: "icon",
        type: "image/png",
        sizes: "32x32",
        href: "/favicon-32x32.png"
      },
      {
        rel: "icon",
        type: "image/png",
        sizes: "16x16",
        href: "/favicon-16x16.png"
      },
      { rel: "manifest", href: "/site.webmanifest" }
    ]
  },
  //Loading progress bar: https://nuxtjs.org/docs/2.x/features/loading
  loading: {
    color: "#ff5757",
    height: "4px",
    throttle: 0
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ["./assets/styles/main.scss"],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    //Style Resources for Sass
    "@nuxtjs/style-resources",

    //Google Analytics
    "@nuxtjs/google-analytics"
  ],
  styleResources: {
    scss: ["./assets/styles/main.scss"]
  },
  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},

  googleAnalytics: {
    // Options
    id: "UA-182364221-3"
  }
};
