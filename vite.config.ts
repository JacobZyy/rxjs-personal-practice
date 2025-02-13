import { defineConfig } from 'vite'
import React from '@vitejs/plugin-react'
import UnoCSS from 'unocss/vite'
import { presetAttributify, presetIcons, presetUno } from 'unocss'
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    UnoCSS({
      shortcuts: [
        { logo: 'i-logos-react w-6em h-6em transform transition-800 hover:rotate-180' },
      ],
      presets: [
        presetUno(),
        presetAttributify(),
        presetIcons({
          extraProperties: {
            'display': 'inline-block',
            'vertical-align': 'middle',
          },
        }),
      ],
    }),
    React(),
  ],
})