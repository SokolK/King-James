import React, { useState } from 'react'
import Debounce from './debounce'
import Filter from './filterusers'
import Link from './link'

type Person = {
    name:string;
    username:string;
}

const Listusers: React.FC = () => {
    const [userName, setSearchUser] = useState("");
    const [filteredUsers, setFilteredUsers] = useState<Person[]>([]);

    return (
        <div>
            <Debounce onchange={setSearchUser}/>
            <Link searching={userName} filtered={setFilteredUsers}/>
            <Filter filtered={filteredUsers}/>
        </div>
    )
}

export default Listusers