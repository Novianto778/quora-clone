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
                quora: {
                    primary: 'rgb(185, 43, 39)',
                    blue: 'rgb(0, 120, 215)',
                },
                gray: {
                    dark: '#939598',
                    light: 'rgb(236, 237, 237)',
                    lighter: 'rgba(0, 0, 1, 0.03)',
                },
            },
            maxWidth: {
                inherit: 'inherit',
                main: '1152px',
                16: 'calc(1152px * 0.16)',
                21: 'calc(1152px * 0.21)',
                26: 'calc(1152px * 0.26)',
                52: 'calc(1152px * 0.52)',
                74: 'calc(1152px * 0.74)',
            },
        },
    },
    plugins: [require('daisyui')],
};
