import React from 'react'
import './filteredusers.css'

type Props = {
    filtered: Array<User>;
  }
  type User = {
    name: string;
    username: string;
  }
  const Filter: React.FC<Props> = ({filtered}) => {
    return (
      <div className="users">
        <ol className="userslist">
          {filtered.map((User) => (
            <li key={User.name}>
              <div className="text">
                {User.name} <br />(@{User.username})
              </div>
            </li>
          ))}
        </ol>
      </div>
    );
  
  }

  export default Filter