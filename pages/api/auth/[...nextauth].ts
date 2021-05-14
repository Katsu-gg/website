import NextAuth from 'next-auth';
import Providers from 'next-auth/providers';
import config from '../../../config.json';

export default NextAuth({
    providers: [
        Providers.Discord({
            clientId: config.client.id,
            clientSecret: config.client.secret,
            scope: 'identify'
        })
    ]
});