/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      fontSize: {
        '13xl' : '22rem'
      },
      width: {
        '120': '32rem', // Aquí establecemos el valor personalizado
        '150': '38rem'
      },
    },
    screens: {
      '2xl' : {'max' : '4000px'},
      'xl' : {'max' : '1280px'},
      'lg' : {'max' : '1024px'},
      'md' : {'max' : '768px'},
      'sm' : {'max' : '640px' },
      'xs' : {'max' : '520px' },
     }
  },
  plugins: [],
}
