import React from 'react';
import { Link } from 'gatsby';

import styles from './user.module.css';

const User = ({ user }) => {
  return (
    <div>
      <div>
        <h3>{user.userName}</h3>
        <p>
          Профиль Академии:
          <Link to={user.academyProfile}>{user.userName}</Link>
        </p>
        <p>
          Профиль Github: <Link to={user.githubProfile}>{user.githubName}</Link>
        </p>
      </div>
      <div>
        <p>Курс: {user.course}</p>
        <p>
          Проект: <Link to={user.url}>{user.project}</Link>
        </p>
      </div>
    </div>
  );
};

export default User;
