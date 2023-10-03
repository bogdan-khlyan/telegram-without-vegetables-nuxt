// https://nuxt.com/docs/api/configuration/nuxt-config
import {fileURLToPath} from "url";
import svgLoader from 'vite-svg-loader'

export default defineNuxtConfig({
  // @ts-ignore
  srcDir: 'src/',
  devtools: { enabled: true },
  alias: {
    "@": fileURLToPath(new URL('./src', import.meta.url)),
  },
  css: [
      '@/assets/scss/index.scss'
  ],
  vite: {
    plugins: [
        svgLoader()
    ]
  }
})
