import React, { useEffect, useState } from 'react';
import { getUserDetails } from '../../utils/GraphService';

const HomePage = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const fetchUserDetails = async () => {
      try {
        const userDetails = await getUserDetails();
        setUser(userDetails);
      } catch (error) {
        console.error('Error fetching user details:', error);
      }
    };

    fetchUserDetails();
  }, []);

  return (
      <div>
        <h1>Welcome to the Graph API Test</h1>
        {user ? <pre>{JSON.stringify(user, null, 2)}</pre> : <p>Loading...</p>}
      </div>
  );
};

export default HomePage;