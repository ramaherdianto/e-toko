/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./src/**/*.{js,jsx,ts,tsx}'],
    theme: {
        extend: {},
        colors: {
            primary: '#6366F1',
            secondary: '#bdbeff',
            light: '#fff',
            dark: '#2C2C2C',
            grey: '#9C9C9C',
        },
        // screens: {
        //     sm: { min: '640px', max: '767px' },
        //     md: { min: '768px', max: '1023px' },
        //     lg: { min: '1024px', max: '1279px' },
        //     xl: { min: '1280px', max: '1535px' },
        //     '2xl': { min: '1536px' },
        // },
    },
    plugins: [],
};
