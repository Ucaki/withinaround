import type { Metadata, Viewport } from "next";



export const metadata:Metadata ={
    title: "Free yoga course landing page",
    description: "Get your free or paid course and video materials now, and discover yourself whithin and around you",
};
export const viewport:Viewport = {
    width: "device-width",
    initialScale: 1,
};

export default function RootLayout({children}: {children: React.ReactNode}) {
    return (
        <html lang="en">
            <head>
                <meta name="viewport" content={`width=${viewport.width}, initial-scale=${viewport.initialScale}`} />
                <meta charSet="UTF-8" />
            </head>
            <body >
                <main className="bg-white text-black">{children}</main>
                </body>
        </html>
    );
};