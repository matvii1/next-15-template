import type { Config } from 'tailwindcss'

const config: Config = {
  darkMode: ['class'],
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
        noto: ['Noto Serif', 'serif'],
      },
      colors: {
        primary: '#191E20',
        orange: '#EB6225',
        blue: '#3862AA',
        green: '#3E9676',
        'green-light': '#9C9',
        'light-orange': '#FCF5EA',
        yellow: '#F6BE59',
        pink: '#F0C3D2',
        brown: '#603E00',
        'grey-stroke': 'rgba(0, 0, 0, 0.2)',
      },
    },
    container: {
      center: true,
      padding: {
        DEFAULT: '1rem',
        '2xl': '4rem',
      },
    },
  },
  // eslint-disable-next-line @typescript-eslint/no-require-imports
  plugins: [require('tailwindcss-animate')],
}
export default config
