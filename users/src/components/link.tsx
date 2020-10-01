import React, {useEffect, useState, createContext, Children, useContext} from 'react'
import axios from 'axios'



type Props = {
    searching: string;
    filtered: Function;
  }
  type User = {
    name: string;
    username: string;
    useEffect: Function;
  }

  export const UserContext = React.createContext(null);
  
  const [users, setUsers] = useState([]);
  const Link: React.FC<Props> = ({searching,filtered}) => {
    
    useEffect(() => {
      filtered(
        users.filter((user: User) =>
          user.name.toLowerCase().includes(searching.toLowerCase())
        )
      );
    }, [searching, users]);
  
  
    const UserContextProvider: User = {
      useEffect: User = (() => {
        axios
          .get("https://jsonplaceholder.typicode.com/users")
          .then((res) => {
            setUsers(res.data);
          }).catch((err) => {
          })
      })
    }
    return(
      <UserContext.Provider value={props}>
        {props.Children}
      </UserContext.Provider>
    )
  }
    
    


export default Link;