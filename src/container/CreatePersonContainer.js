import { gql } from 'apollo-boost';
import React from 'react';
import { Mutation } from 'react-apollo';
import useInput from '../lib/useInput';

const ADD_PERSON = gql`
    mutation($person: PersonInput) {
        createPerson(person: $person) {
            id
            name
        }
    }
`;

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
            <Mutation mutation={ADD_PERSON} variables={{
                "person" : {
                    ...value,
                    "id" : parseInt(value.id),
                    "age" : parseInt(value.age),
                }
            }}>
                {
                    addPerson =>
                        (
                            <button onClick={addPerson}>
                                Submit
                            </button> 
                        )
                }

            </Mutation>
        </div>
    )
}

export default CreatePersonContainer;