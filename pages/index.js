import Head from 'next/head';
import { useEffect, useState } from 'react';
import { getRobots } from '../services/robots';

export default function Home() {
  console.log('Home Page');
  const [robots, setRobots] = useState([]);

  useEffect(() => {
    getRobots().then((res) => setRobots(res));
  }, []);

  console.log(robots);

  return (
    <div className=''>
      <Head>
        <title>SVT Robot List</title>
        <meta name='description' content='Generated by create next app' />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <main className=''>
        <h1 className=''>Hello, World!</h1>

        <p className=''>
          Words words words words words words words words words words words
          words words words words words words words words words words words
          words words words words words words words words words words words
          words words words words words words words words words words words
          words words words words words words words words words words words
          words words words words words words words words words words words
          words words words words words words words.
        </p>
      </main>
    </div>
  );
}
