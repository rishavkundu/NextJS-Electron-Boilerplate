'use client';

import { Providers } from '@microsoft/mgt-element';
import { Msal2Provider } from '@microsoft/mgt-msal2-provider';
import { useEffect } from 'react';

export default function MsalProvider() {
  useEffect(() => {
    if (typeof window !== 'undefined') {
      Providers.globalProvider = new Msal2Provider({
        clientId: 'eaa411a6-1d4a-4800-b7de-d437733e4881',
      });
    }
  }, []);

  return null;
}