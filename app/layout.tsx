import './globals.css';
import { Metadata } from 'next';
import React from "react";

export const metadata: Metadata = {
  title: 'hiddenlinks',
  description: '',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const title = (metadata.title ?? 'hidden') as string;

  return (
      <html lang="es" className="dark" suppressHydrationWarning>
      <head>
        <meta charSet="utf-8"/>
        <meta name="viewport" content="width=device-width, initial-scale=1"/>
        <meta name="darkreader-lock"/>
        <title>{title}</title>
        <meta name="description" content=""/>
        <meta property="og:title" content={title}/>
        <meta property="og:description" content=""/>
        <meta property="og:url" content="https://hiddenlinks.vercel.app"/>
        <meta property="og:type" content="website"/>
        <meta property="og:image" content="https://hiddenlinks.vercel.app/mockup.png"/>
        <meta property="og:image:width" content="1200"/>
        <meta property="og:image:height" content="630"/>
        <meta property="og:image:alt" content={title}/>
        <meta name="twitter:card" content="summary_large_image"/>
        <meta name="twitter:title" content={title}/>
        <meta name="twitter:description" content=""/>
        <meta name="twitter:image" content="https://hiddenlinks.vercel.app/mockup.png"/>
        <meta name="twitter:image:alt" content={title}/>
        <meta name="apple-mobile-web-app-title" content="hiddenlinks" />
        <link rel="icon" type="image/png" href="/meta/favicon-96x96.png" sizes="96x96" />
        <link rel="icon" type="image/svg+xml" href="/meta/favicon.svg" />
        <link rel="shortcut icon" href="/meta/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/meta/apple-touch-icon.png" />
        <link rel="manifest" href="/meta/site.webmanifest" />
      </head>
      <body className="bg-gray-950">{children}</body>
    </html>
  );
}
