import './globals.css';
import { Metadata } from 'next';
import Head from 'next/head';

export const metadata: Metadata = {
  title: 'HiddenLinks',
  description: 'Un minijuego de enlaces ocultos',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const title = (metadata.title ?? 'Título predeterminado') as string;
  const description = (metadata.description ?? 'Descripción predeterminada') as string;

  return (
    <html lang="es" className="dark">
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <link rel="icon" href="/favicon.ico" type="image/x-icon" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <body className="bg-gray-950">{children}</body>
    </html>
  );
}
