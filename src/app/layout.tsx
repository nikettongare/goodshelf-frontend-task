import type { Metadata } from 'next';
import './globals.css';
import Appbar from './components/Appbar';

export const metadata: Metadata = {
  keywords: 'niket, tongare, niket tongare',
  authors: {
    name: 'Niket Tongare',
    url: `https://nikettongare.com`,
  },
  creator: 'Niket Tongare',
  publisher: 'Niket Tongare',
  title: 'Goodshelf',
  description: `Welcome to Goodshelf`,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="min-h-screen antialiased font-display font-sans">
        <div className={`max-w-7xl mx-4 md:mx-6 xl:mx-auto flex flex-col mb-10`}>
          <Appbar />
          {children}
        </div>
      </body>
    </html>
  );
}
