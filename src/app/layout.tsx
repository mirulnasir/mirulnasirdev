import type { Metadata } from "next";
import "./globals.css";



export const metadata: Metadata = {
  title: 'Mirul Nasir - Front-end developer, Kuala Lumpur, Malaysia',
  description: 'Front-end developer, customer experience specialist.',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body >{children}</body>
    </html>
  );
}
