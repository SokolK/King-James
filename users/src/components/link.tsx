import React, {useEffect, useState, createContext} from 'react'
import axios from 'axios'

type Props = {
    searching: string;
    filtered: Function;
  }
  type User = {
    name: string;
    username: string;
  }
  
  const Link: React.FC<Props> = ({searching,filtered}) => {
    let [users, setUsers] = useState([]);
    useEffect(() => {
      filtered(
        users.filter((user: User) =>
          user.name.toLowerCase().includes(searching.toLowerCase())
        )
      );
    }, [searching, users]);
    useEffect(() => {
      axios
        .get("https://jsonplaceholder.typicode.com/users")
        .then((res) => {
          setUsers(res.data);
        }).catch((err) => {
        })
    });
    return(
        <div>
            
        </div>
    )
}

export default Link;