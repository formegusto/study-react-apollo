import React from 'react';
import { gql } from 'apollo-boost';
import { useQuery } from 'react-apollo';
import CreatePersonContainer from './CreatePersonContainer';

const FETCH_PERSONS = gql`
    query {
        persons {
            id
            name
        }
    }
`;

function PersonsContainer() {
    const { loading, error, data, refetch} = useQuery(FETCH_PERSONS);

    if(loading) return <p>Loading...</p>
    if(error) return <p>Error...</p>
    return (
        <>
            <h2>Persons</h2>
            <ul>
                {data.persons.map(({ id, name }) => (
                    <li key={id}>{name}</li>
                ))}
            </ul>
            <div>
                <CreatePersonContainer refetch={refetch}/>
            </div>
        </>
    );
}

export default PersonsContainer;