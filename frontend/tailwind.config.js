// tailwind.config.js
module.exports = {
    purge: [],

    purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
    darkMode: false, // or 'media' or 'class'
    theme: {
        screens: {
            xs: '350px',
            sm: '640px',
            md: '768px',
            lg: '1024px',
        },
        extend: {},
    },
    variants: {
        extend: {},
    },
    plugins: [],
}
