/** @type {import('tailwindcss').Config} */
export default {
    content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
    theme: {
        fontFamily: {
            main: 'Inter',
        },
        extend: {
            colors: {
                green: '#079211',
                smoke: '#808080',
                dark: '#101017',
                grey: '#313131',
            },
            container: {
                center: true,
                padding: '20px',
                screens: {
                    sm: '1200px',
                    md: '1200px',
                    lg: '1200px',
                    xl: '1240px',
                    '2xl': '1445px',
                },
            },
        },
    },
    plugins: [require('postcss-nested')],
};
