module.exports = {
  content: ['./components/**/*.js', './pages/**/*.js'],
  theme: {
    extend: {
      fontFamily: {
        'sans': ['Diatype', '"Helvetica Neue"', 'Helvetica', 'Arial', 'sans-serif', 'ui-sans-serif', 'system-ui'],
        'heading': ['Montserrat', 'sans-serif'],
        'button': ['DSemi', 'monospace']
      },
      colors: {
        'secondary': '#14f195',
        'accent': '#9945ff'
      },
      spacing: {
        28: '7rem',
      },
      letterSpacing: {
        tighter: '-.04em',
      },
      lineHeight: {
        tight: 1.2,
      },
      fontSize: {
        '5xl': '2.5rem',
        '6xl': '2.75rem',
        '7xl': '4.5rem',
        '8xl': '6.25rem',
      },
      boxShadow: {
        sm: '0 5px 10px rgba(0, 0, 0, 0.12)',
        md: '0 8px 30px rgba(0, 0, 0, 0.12)',
      },
    },
  },
}
