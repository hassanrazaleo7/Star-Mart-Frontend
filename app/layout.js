import Script from 'next/script';
import AuthProvider from './auth-provider';
import './globals.css';
import '../styles.css';

export const metadata = {
  title: 'Star Mart — Fresh groceries, delivered',
  description: 'Star Mart groceries and everyday essentials, delivered with care.',
  icons: {
    icon: '/star-mart.svg',
    shortcut: '/star-mart.svg',
    apple: '/star-mart.svg',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <AuthProvider>{children}</AuthProvider>
        <Script src="/storefront.js" strategy="afterInteractive" />
      </body>
    </html>
  );
}
