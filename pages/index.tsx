import Head from 'next/head';
import Link from 'next/link';

import main from '../assets/Home.module.css'

export default function Home() {
  return (
    <div>
      <div className={main.title}>
        <h1>The best moderation 
          <br /> 
          Discord bot.</h1>
      </div>
      <Link href="/commands">
        <div className="btn rounded">
          <a>Commands</a>
        </div>
      </Link>
    </div>
  )
}