import "./styles/globals.css";

// TODO: site's metadata for infomations
export const metadata = {
    title: "QWRTS.DEV",
    description: "A portfolio site for showcase all of the works from a junior front-end developer. Where everything happens.",
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <nav>

            </nav>
            <body
                className='bg-blacker antialiased'
            >
                {children}
            </body>
        </html>
    );
}
