import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Noto Sans Thai"'],
        Thai:['Noto Sans Thai'],
        Pinyon_Script:['Pinyon Script'],
        Cinzel_Decorative:['Cinzel Decorative'],
        Figerona:['Figerona'],
        Montserrat:['Montserrat'],
        Bodwars:['Bodwars'],
        Inter:['Inter'],

      },
      screens: {
        'sm': '300px',
        'lg': '1280px',
        'xl' : '1440px'
      },
      dropShadow: {
        glow: [
          "0 0px 20px rgba(255,255, 255, 0.95)",
          "0 0px 65px rgba(255, 255,255, 0.4)"
        ]
      }
    },
  },
  plugins: [
    require("@designbycode/tailwindcss-text-stroke"),
  ],
}
export default config
