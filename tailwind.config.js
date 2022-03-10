const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
    content: [
        "./index.html",
        "./src/**/*.{vue,js,ts,jsx,tsx}",
    ],
    theme: {
        screens: {
            'xs': '375px',
            ...defaultTheme.screens,
        },
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

                // article color
                'article-dark-grayish-blue': 'hsl(217, 19%, 35%)',
                'article-dark-blue': 'hsl(214, 17%, 51%)',
                'article-grayish-blue': 'hsl(212, 23%, 69%)',
                'article-light-grayish-blue': 'hsl(210, 46%, 95%)',

                // testimonials color
                'tes-moderate-violet': 'hsl(263, 55%, 52%)',
                'tes-very-dark-grayish-blue': 'hsl(217, 19%, 35%)',
                'tes-very-dark-blackish-blue': 'hsl(219, 29%, 14%)',
                'tes-light-grayish-blue': 'hsl(210, 46%, 95%)',

                // e-commerce color
                'e-orange': 'hsl(26, 100%, 55%)',
                'e-pale-orange': 'hsl(25, 100%, 94%)',
                'e-very-dark-blue': 'hsl(220, 13%, 13%)',
                'e-dark-grayish-blue': 'hsl(219, 9%, 45%)',
                'e-grayish-blue': 'hsl(220, 14%, 75%)',
                'e-light-grayish-blue': 'hsl(223, 64%, 98%)',
            }
        },
    },
    plugins: [],
}