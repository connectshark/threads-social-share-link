/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'TC': [`"Poetsen One"`, `FakePearl-Regular`, 'sans-serif', 'ui-monospace', 'SFMono-Regular', 'Menlo', 'Monaco', 'Consolas']
      }
    }
  },
  daisyui: {
    themes: ['light', 'dracula', 'cupcake'],
  },
  plugins: [
    require('daisyui'),
  ]
}
