declare module '@azure/msal-react' {
    import { PublicClientApplication } from '@azure/msal-browser';
    import { ReactNode } from 'react';

    interface MsalProviderProps {
      instance: PublicClientApplication;
      children: ReactNode;
    }

    export class MsalProvider extends React.Component<MsalProviderProps> {}
  }