import { getGraphClient } from '../utils/GraphClient';

export const getUserDetails = async () => {
  const client = getGraphClient();
  const user = await client.api('/me').get();
  return user;
};