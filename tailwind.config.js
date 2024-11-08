/** @type {import('tailwindcss').Config} */
const config = {
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
                primary: '#f1f1f1',
                secondary: '#0e0e0e',
                blacker: '#070707',
            },
            fontFamily: {
                sfm: ['sfm', 'sans-serif'],
                sfmi: ['sfmi', 'sans-serif'],
                sfb: ['sfb', 'sans-serif'],
                sfbi: ['sfbi', 'sans-serif'],
            },
        },
    },
    plugins: [],
};

export default config