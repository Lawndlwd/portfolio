const main_base_URL = "https://www.fiveslash.com";

export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: "static",
  colorMode: {
    classSuffix: "",
  },
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: "Levende Mohammad— Fullstack JavaScript Engineer",
    htmlAttrs: {
      lang: "en",
    },

    meta: [
      { charset: "utf-8" },
      {
        name: "title",
        content: "Levende Mohammad— Fullstack JavaScript Engineer ",
      },
      {
        name: "description",
        content:
          "Self-taught JavaScript developer ,living near Paris, specialized in React and Vue Focused on developing accessible, and responsive web applications, as well as improving my skills within the JavaScript ecosystem, working with current web technologies such as Vue,Typescript, React, Nuxt.js & Node.js to create data-driven, feature-rich applications.",
      },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", content: "" },
      { name: "format-detection", content: "telephone=no" },
      { property: "og:type", content: "website" },
      {
        property: "og:title",
        content: "Levende Mohammad— Fullstack JavaScript Engineer ",
      },
      {
        property: "og:url",
        content: "https://levende.net ",
      },

      {
        property: "og:description",
        content:
          "Self-taught JavaScript developer ,living near Paris, specialized in React and Vue Focused on developing accessible, and responsive web applications, as well as improving my skills within the JavaScript ecosystem, working with current web technologies such as Vue,Typescript, React, Nuxt.js & Node.js to create data-driven, feature-rich applications.",
      },
      {
        property: "og:image",
        content:
          "https://metatags.io/assets/meta-tags-16a33a6a8531e519cc0936fbba0ad904e52d35f34a46c97a2c9f6f7dd7d336f2.png",
      },
      {
        property: "twitter:title",
        content: "Levende Mohammad— Fullstack JavaScript Engineer ",
      },
      {
        property: "twitter:description",
        content:
          "Self-taught JavaScript developer ,living near Paris, specialized in React and Vue Focused on developing accessible, and responsive web applications, as well as improving my skills within the JavaScript ecosystem, working with current web technologies such as Vue,Typescript, React, Nuxt.js & Node.js to create data-driven, feature-rich applications.",
      },
      { property: "twitter:card", content: "summary_large_image" },
      {
        property: "twitter:image",
        content:
          "https://metatags.io/assets/meta-tags-16a33a6a8531e519cc0936fbba0ad904e52d35f34a46c97a2c9f6f7dd7d336f2.png",
      },
      {
        property: "twitter:url",
        content: "https://levende.net ",
      },
    ],
    link: [
      { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Space+Mono:ital,wght@0,400;0,700;1,700&display=swap",
      },
    ],
  },
  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    // "~/plugins/back-to-top.js"
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/tailwindcss
    "@nuxtjs/tailwindcss",
    "@nuxtjs/color-mode",
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: ["@nuxtjs/sitemap"],
  sitemap: {
    hostname: process.env.BASE_URL || "https://fiveslash.com",
    path: "/sitemap.xml",
    gzip: true,
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  builds: [
    {
      src: "nuxt.config.js",
      use: "@nuxtjs/now-builder",
      config: {
        serverFiles: ["./.nuxt/dist/sitemap-routes.json"],
      },
    },
  ],
};
