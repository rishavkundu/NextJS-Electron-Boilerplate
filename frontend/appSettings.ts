const settings: AppSettings = {
    clientId: "7956f43b-421a-44a1-b069-4bdef3076470",
    tenantId: 'common',
    graphUserScopes: [
      'user.read',
      'mail.read',
      'mail.send'
    ]
  };
  
  export interface AppSettings {
    clientId: string;
    tenantId: string;
    graphUserScopes: string[];
  }
  
  export default settings;