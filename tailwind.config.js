const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: [
    './app/**/*.{html,js}',
    './*.html',
    './styles/*.css'
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter var']
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    
    require('@tailwindcss/typography'),
    
  ]
}
