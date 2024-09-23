/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'main': [`FakePearl`, 'sans-serif', 'ui-monospace', 'system-ui'],
        'focus': [`Poetsen One`, 'sans-serif', 'ui-monospace', 'system-ui'],
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
