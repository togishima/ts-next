import {createClient} from 'microcms-js-sdk';

export const client = createClient({
    serviceDomain: 'imp-ogishima-test',
    apiKey: process.env.API_KEY,
});