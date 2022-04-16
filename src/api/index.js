import { GraphQLClient } from 'graphql-request';

const client = new GraphQLClient(process.env.REACT_APP_ENDPOINT, {
    headers: {
        Authorization: `Bearer ${process.env.REACT_APP_API_TOKEN}`
    }
});

export default client;