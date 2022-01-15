const main_base_URL = "https://www.fiveslash.com";

export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: "static",
  colorMode: {
    classSuffix: "",
  },
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: "Levende Mohammad",
    htmlAttrs: {
      lang: "en",
    },
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", content: "" },
      { name: "format-detection", content: "telephone=no" },
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
