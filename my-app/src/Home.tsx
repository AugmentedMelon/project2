import React from 'react';

const Home = () => {
  return (
    <div>
      <h1>Welcome to SkillLink!</h1>
      <button onClick={() => window.location.href = '/login'}>Login</button>
    </div>
  );
};

export default Home; 