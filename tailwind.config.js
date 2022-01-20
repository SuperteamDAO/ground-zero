module.exports = {
  content: ['./components/**/*.js', './pages/**/*.js'],
  safelist: ['drop-shadow-xl', 'mb-10', 'mb-14', 'transition-transform', 'hover:-translate-y-0.5', 'text-white', 'bg-gray-800', 'hover:bg-gray-800', 'bg-gray-900', 'px-6', 'py-3', 'rounded-md', 'font-bold', 'mb-1', 'mt-0', 'm-0', '!mb-1', '!mt-0', '!m-0', 'text-sm'],
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
