import React, {useEffect, useState, createContext, Children} from 'react'
import axios from 'axios'


export const UserContext = React.createContext();
type Props = {
    searching: string;
    filtered: Function;
  }
  type User = {
    name: string;
    username: string;
  }
  
  const Link: React.FC<Props> = ({searching,filtered}) => {
    const [users, setUsers] = useState([]);
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
      <UserContext.Provider value={{Link}}>
        {Children}
      </UserContext.Provider>
    )
    
}

export default Link;