// src/components/Sessions.tsx
import React, { useState, useEffect } from 'react';

const Sessions = () => {
  // Mock session data (replace with actual API call in the future)
  const [sessions, setSessions] = useState<any[]>([
    { _id: '1', skill: 'React', time: '2025-05-01T10:00:00Z' },
    { _id: '2', skill: 'JavaScript', time: '2025-05-02T14:00:00Z' },
  ]);

  useEffect(() => {
    // Simulate fetching session data here if needed
    setTimeout(() => {
      setSessions([
        { _id: '1', skill: 'React', time: '2025-05-01T10:00:00Z' },
        { _id: '2', skill: 'JavaScript', time: '2025-05-02T14:00:00Z' },
      ]);
    }, 500);
  }, []);

  return (
    <div>
      <h2>Your Sessions</h2>
      {sessions.length > 0 ? (
        sessions.map((session) => (
          <div key={session._id}>
            <p>Skill: {session.skill}</p>
            <p>Time: {new Date(session.time).toLocaleString()}</p>
          </div>
        ))
      ) : (
        <p>No sessions booked</p>
      )}
    </div>
  );
};

export default Sessions;
