import './globals.css';
import React from 'react';
import ClientLayout from './components/ClientLayout';
import ClientHeader from './components/ClientHeader';
import ClientBreadcrumb from './components/ClientBreadcrumb';

export const metadata = {
  title: 'Perceptron Desktop 1.0',
  description: 'Perceptron Desktop Development Server',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="h-full">
      <body className="h-full">
        <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
          <ClientHeader />
          <main style={{ flex: 1, margin: '0 16px', padding: '0px' }}>
            <ClientBreadcrumb />
            <ClientLayout>
              {children}
            </ClientLayout>
          </main>
          <footer style={{ textAlign: 'center' }}>
            © {new Date().getFullYear()} Rishav Kundu
          </footer>
        </div>
      </body>
    </html>
  );
}