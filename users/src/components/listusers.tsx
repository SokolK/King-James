import React, { useState, useContext } from 'react'
import Debounce from './debounce'
import Filter from './filterusers'
import Link, { UserContext } from './link'

type Person = {
    name: string;
    username: string;
}

const Listusers: React.FC = () => {
    const [userName, setSearchUser] = useState("");
    const [filteredUsers, setFilteredUsers] = useState<Person[]>([]);
    const user = useContext(UserContext)
    return (
        <div>
            <UserContext value={{user}}>
                <Debounce onchange={setSearchUser} />
                <Link searching={userName} filtered={setFilteredUsers} />
                <Filter filtered={filteredUsers} />
            </UserContext>
        </div>
    )
}

export default Listusers