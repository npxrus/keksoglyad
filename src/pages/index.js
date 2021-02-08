import React, { useEffect, useState } from 'react';
import axios from 'axios';

import User from '../components/user';
import Spinner from '../components/spinner';

export default () => {
  const [status, setStatus] = useState('Загрузка');
  const [users, setUsers] = useState(null);

  useEffect(() => {
    let canceled = false;

    if (status !== 'Загрузка') return;

    axios('/api/get-all-users').then((result) => {
      if (canceled === true) return;

      if (result.status !== 200) {
        console.error('Error loading users');
        console.error(result);
      }

      setUsers(result.data.users);
      setStatus('Загружено');
    });

    return () => {
      canceled = true;
    };
  }, [status]);

  return (
    <main>
      <h1>Кексогляд</h1>
      {users ? (
        <ul>
          {users.map((user) => (
            <li key={user._id}>
              <User user={user} />
            </li>
          ))}
        </ul>
      ) : (
        <Spinner />
      )}
    </main>
  );
};
