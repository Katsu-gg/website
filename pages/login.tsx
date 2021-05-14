import Link from 'next/link';
import { providers, signIn, session } from 'next-auth/client';

export default function Login({ providers }) {
    return (
        <Link href="/api/auth/signin/discord">
            <a>Login via Discord</a>
        </Link>
    )
}