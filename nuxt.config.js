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
          "kodyolu, kod, kodyol, yolkod, kodyolu.com, kodyolu.net, kodyolu.org, kodyolu., kodyolum, kod yolu,  kodlama, yazılım, yazılım öğren, kodlama öğren, programlama, programlama öğren, site yap, site oluştur, web tasarım, web development, yazılım işi, yurtdışına gitmek, yazılım mühendisliği, yazılım nedir, yazılım öğrenme, yazılım bölümü, yazılım bilimi, yazılım bölümleri, kodlama nedir kodlama io, kodlama eğitimi, kodlama programları, kodlama nasıl yapılır, kodlama aşamaları, yazılım işi nedir, yazılım işinden nasıl para kazanılır, yazılım işi arayanlar, yazılım işinde para varmı, yazılım işi nasıl yapılır, yazılım işi yapmak, yazılım işi nasıl bulunur, programlama dilleri, programlama temelleri, programlama nedir, programlama dili nedir, programlamaya giriş, web geliştirme uzmanı, web geliştirme nedir, web geliştirme iş ilanları, web geliştirme uzmanı maaş, web geliştirme dilleri, web geliştirme kursu, web geliştirme için hangi dil, web tasarımı ve kodlama, web tasarım nedir, web tasarım programları, web tasarım iş ilanları, web tasarım nasıl yapılır, web tasarımcı maaşları, web tasarım ve kodlama, web tasarım kursu, web development nedir, web development bootcamp, web development languages, web development tools, web development frameworks, web development course, web development roadmap, web development and design, coding ne demek, coding bootcamp, coding languages, coding ne demek, coding bootcamp, coding languages, yazılım öğrenmek, yazılım öğrenmek istiyorum, yazılım öğrenseydin, yazılım öğrenme ücretsiz, yazılım öğren caps, yazılım öğrenmek ne işe yarar, yazılım öğren diyen enişte, yazılım öğren memes, yazılım öğren muhabbeti, yazılım öğren ekşi, yazılım öğren su iç, yazılım öğren twitter, yazılım öğren diyen, yazılım öğrenme başlangıç, yazılım öğrenme bedava, hangi yazılım dilini öğrenmeliyim, hangi yazılım dilinden başlamalıyım, hangi yazılım dili öğrenilmeli, hangi yazılım alanı, hangi yazılım diliyle başlanmalı, hangi kodlama dili ne işe yarar, hangi kodlama dilini öğrenmeliyim, hangi kodlama dilinden başlamalıyım, hangi kodlama dili, kodlamaya hangi dille başlanmalı, kodlama hangi bölüm, kodlama hangi programla yapılır, kodlama hangi amaçla yapılır, hangisi kodlamanın aşamalarından değildir, hangisi kodlamanın aşamalarından biri değildir, kodlama kaç yaşında başlar, kodlama kaç yılda öğrenilir, kodlama kaç yaşında öğretilmeli, web tasarım hangi bölüm, web tasarım hangi programlarla yapılır, web tasarım hangi üniversitelerde var, web tasarımda hangi programlar kullanılır, web tasarımı hangi dil, web tasarım kaç para alır, web tasarım kaç ayda öğrenilir, web tasarım kaç yıllık, web tasarımını kimler yapar, web tasarım nasıl yapılır, web tasarım nasıl öğrenilir, web tasarım nasıl yapılır örnekleri, web tasarımdan nasıl para kazanılır, web geliştirmeye nereden başlanır, website kurma, web sitesi, website nasıl kurulur, website açmak, website açma, web sitesi, web sitesi kurma, web sitesi nasıl kurulur, web sitesi kur, web sitesi tasarımı, web site kurma, web site tasarımı, web site nasıl kurulur, web site açma, kariyer, iş bul, iş, para kazan"
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
