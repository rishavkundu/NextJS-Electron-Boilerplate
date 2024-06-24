'use client';

import React, { useEffect } from 'react';
import dynamic from 'next/dynamic';

// Dynamically import the Login component with SSR disabled
const Login = dynamic(() => import('@microsoft/mgt-react').then(mod => mod.Login), { ssr: false });

const GraphPage: React.FC = () => {
  useEffect(() => {
    const initializeProvider = async () => {
      if (typeof window !== 'undefined') {
        const { Providers } = await import('@microsoft/mgt-element');
        const { Msal2Provider } = await import('@microsoft/mgt-msal2-provider');
        Providers.globalProvider = new Msal2Provider({
          clientId: 'eaa411a6-1d4a-4800-b7de-d437733e4881',
        });
      }
    };

    initializeProvider();
  }, []);

  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold">Perceptron Desktop</h1>
        <h4 className="text-xl text-gray-600">Microsoft Graph Page</h4>
      </div>
      <div className="flex flex-col items-center">
        <label htmlFor="loginButton" className="mb-4 text-lg font-semibold">Sign in with Microsoft:</label>
        <Login id="loginButton" />
      </div>
      <footer className="mt-8 text-gray-500">
        {'<'}3 with ♥
      </footer>
    </main>
  );
}

export default GraphPage;