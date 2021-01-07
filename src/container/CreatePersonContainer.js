import React from 'react';
import useInput from '../lib/useInput';

function CreatePersonContainer() {
    const { value, onChange } = useInput({
        id: "",
        name: "",
        age: "",
        address: ""
    });

    return (
        <div>
            <input 
                type="text"
                placeholder="id"
                name="id"
                onChange={(e) => onChange(e)} />
            <input 
                type="text" 
                placeholder="name"
                name="name"
                onChange={(e) => onChange(e)} />
            <input 
                type="text" 
                placeholder="age"
                name="age"
                value={value.age}
                onChange={(e) => onChange(e)} />
            <input
                type="text"
                placeholder="address"
                name="address"
                onChange={(e) => onChange(e)} />
        </div>
    )
}

export default CreatePersonContainer;