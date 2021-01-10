import { gql } from 'apollo-boost';
import React from 'react';
import { useMutation } from 'react-apollo';
import useInput from '../lib/useInput';

const ADD_PERSON = gql`
    mutation($person: PersonInput) {
        createPerson(person: $person) {
            id
            name
        }
    }
`;

function CreatePersonContainer({ refetch }) {
    const [ addPerson, {loading, error} ] = useMutation(ADD_PERSON, {
        onCompleted : (createPerson) => {
            console.log(createPerson);
            refetch();
        }
    });
    const { value, onChange } = useInput({
        id: "",
        name: "",
        age: "",
        address: ""
    });

    return (
        <div>
            <input 
                type="number"
                placeholder="id"
                name="id"
                onChange={(e) => onChange(e)} />
            <input 
                type="text" 
                placeholder="name"
                name="name"
                onChange={(e) => onChange(e)} />
            <input 
                type="number" 
                placeholder="age"
                name="age"
                value={value.age}
                onChange={(e) => onChange(e)} />
            <input
                type="text"
                placeholder="address"
                name="address"
                onChange={(e) => onChange(e)} />
            <button onClick={() => addPerson({
                variables : {
                    "person" : {
                        ...value,
                        "id" : parseInt(value.id),
                        "age" : parseInt(value.age),
                    }
                },
            })}>
                Submit
            </button>
        </div>
    )
}

export default CreatePersonContainer;