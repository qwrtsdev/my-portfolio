import "./styles/globals.css";

// TODO: site's metadata for infomations
export const metadata = {
    title: 'QWRTS.DEV',
    description: 'A portfolio site for showcase all of the works from a junior front-end developer. Where everything happens.',
    keywords: ['qwrt', 'qwrts', 'qwrtsdev', 'portfolio', 'qwertyx'],
    creator: 'Nuttapong Nakawirot',
    publisher: 'Nuttapong Nakawirot',

    openGraph: {
        title: 'QWRTS.DEV',
        description: 'A portfolio site for showcase all of the works from a junior front-end developer. Where everything happens.',
        url: 'https://qwrtsdev.vercel.com',
        siteName: 'QWRTS.DEV',
        images: {
            url: 'https://media.discordapp.net/attachments/1304513230244413460/1304520143853850665/qwrtscover.png?ex=672fb08f&is=672e5f0f&hm=fc8a6ecc61320ca67b220b6f1bd8756c1df6d9eeb7581ffbe971eb5a8c7482b2&=&format=webp&quality=lossless&width=912&height=479',
            width: 1200,
            height: 630,
            alt: 'QWRTS.DEV Image Cover',
        },
        type: 'website',
    },
}

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body className='bg-blacker antialiased'>
                {children}
            </body>
        </html>
    );
}
