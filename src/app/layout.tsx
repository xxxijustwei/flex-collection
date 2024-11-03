
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
    title: "Flex Collection",
    description: "Flex Collection",
    icons: {
        icon: "/favicon.ico",
    }
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body>
                <div className="flex flex-col min-h-svh bg-background">
                    {children}
                </div>
            </body>
        </html>
    );
}
