/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './app/**/*.{js,ts,jsx,tsx}',
        './pages/**/*.{js,ts,jsx,tsx}',
        './components/**/*.{js,ts,jsx,tsx}',

        // Or if using `src` directory:
        './src/**/*.{js,ts,jsx,tsx}',
    ],
    theme: {
        extend: {
            backgroundImage: (theme) => ({
                login: "url('../assets/images/quora-bg.webp')",
            }),
            fontSize: {
                13: '13px',
                15: '15px',
            },
            colors: {
                gray: {
                    light: '#939598',
                },
                quora: {
                    primary: 'rgb(185, 43, 39)',
                },
            },
        },
    },
    plugins: [],
};
