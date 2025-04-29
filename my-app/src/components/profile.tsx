// src/components/Profile.tsx
import React, { useState, useEffect } from 'react';

const Profile = () => {
  // Mock user data (replace with actual API call in the future)
  const [userData, setUserData] = useState<any>({
    email: 'user@example.com',
    username: 'user123',
  });

  useEffect(() => {
    // You can mock fetching user data here if needed
    // Simulating a delay with setTimeout
    setTimeout(() => {
      setUserData({ email: 'user@example.com', username: 'user123' });
    }, 500);
  }, []);

  if (!userData) return <div>Loading...</div>;

  return (
    <div>
      <h2>Profile</h2>
      <p>Email: {userData.email}</p>
      <p>Username: {userData.username}</p>
    </div>
  );
};

export default Profile;
