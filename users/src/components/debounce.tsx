import React from 'react'
import './debounce.css'

type Props = {
    onchange: Function;
}
const Debounce: React.FC<Props> = ({ onchange }) => {
    return (
        <div>
            <input
                onChange={(e) => onchange(e.target.value)}
                type="Input"
                className="inputfield"
                placeholder="Search by user name..."
            />
        </div>
    );
}

export default Debounce