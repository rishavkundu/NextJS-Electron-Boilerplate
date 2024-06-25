import { Client } from '@microsoft/microsoft-graph-client';
import { Providers } from '@microsoft/mgt-element';

export const getGraphClient = () => {
  const provider = Providers.globalProvider;
  if (!provider) {
    throw new Error('Provider not initialized');
  }

  return Client.initWithMiddleware({
    authProvider: {
      getAccessToken: async () => {
        const tokenResponse = await provider.getAccessToken();
        if (typeof tokenResponse === 'string') {
          return tokenResponse;
        } else if (tokenResponse && typeof tokenResponse.accessToken === 'string') {
          return tokenResponse.accessToken;
        } else {
          throw new Error('Invalid token response');
        }
      },
    },
  });
};