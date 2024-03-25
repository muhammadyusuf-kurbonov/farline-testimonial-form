// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  nitro: {
    prerender: {
      autoSubfolderIndex: false
    }
  },
  modules: ['nuxt-primevue', "@nuxt/image"],
  primevue: {
    options: {
      ripple: true,
      inputStyle: 'filled'
    }
  },
  css: ['primevue/resources/themes/lara-light-blue/theme.css']
})