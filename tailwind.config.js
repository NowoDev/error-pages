module.exports = {
    content: [
        "./index.html",
        "./src/**/*.{vue,js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                // qrcode color
                'qr-primary': '#D5E1EF',
                // stats color
                'stats-dark-blue': 'hsl(233, 47%, 7%)',
                'stats-desaturated-blue': 'hsl(244, 38%, 16%)',
                'stats-soft-violet': 'hsl(277, 64%, 61%)',
                'stats-white': 'hsl(0, 0%, 100%)',
                'stats-trans-white': 'hsla(0, 0%, 100%, 0.75)',
                'stats-trans-white-headings': 'hsla(0, 0%, 100%, 0.6)',
            }
        },
    },
    plugins: [],
}