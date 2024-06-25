import './globals.css';
import React from 'react';
import ClientLayout from './components/ClientLayout';

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
          <ClientLayout>
            {children}
          </ClientLayout>
      </body>
    </html>
  );
}