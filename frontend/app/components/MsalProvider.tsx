'use client';

import { PublicClientApplication } from '@azure/msal-browser';
import { useEffect } from 'react';
import { Providers } from '@microsoft/mgt-element';
import { Msal2Provider } from '@microsoft/mgt-msal2-provider';

const msalConfig = {
  auth: {
    clientId: 'eaa411a6-1d4a-4800-b7de-d437733e4881',
    authority: 'https://login.microsoftonline.com/08e49d7d-2f89-47f3-a042-7fd11a5c1a1e',
    redirectUri: 'http://localhost:3000',
  },
  cache: {
    cacheLocation: 'localStorage',
    storeAuthStateInCookie: false,
  },
};

const msalInstance = new PublicClientApplication(msalConfig);

export default function MsalProvider({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    if (typeof window !== 'undefined') {
      Providers.globalProvider = new Msal2Provider({
        clientId: msalConfig.auth.clientId,
      });
    }
  }, []);

  return <Msal2Provider instance={msalInstance}>{children}</Msal2Provider>;
}