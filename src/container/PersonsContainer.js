import React from 'react';
import { gql } from 'apollo-boost';
import { Query } from 'react-apollo';

const FETCH_PERSONS = gql`
    query {
        persons {
            id
            name
        }
    }
`;

function PersonsContainer() {
    return (
        <>
            <h2>Persons</h2>
            <Query query={FETCH_PERSONS}>
                {({ loading, error, data }) => {
                    if(loading)
                        return <p>Loading...</p>
                    if(error)
                        return <p>Error...</p>
                    return (
                        <ul>
                            {data.persons.map(({ id, name }) => (
                                <li key={id}>{name}</li>
                            ))}
                        </ul>
                    )
                }}
            </Query>
        </>
    );
}

export default PersonsContainer;