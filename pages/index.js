import Head from 'next/head';
import Home from '../components/home/Home';

export default function HomePage() {
  return (
    <div className=''>
      <Head>
        <title>SVT Robot List</title>
        <meta name='description' content='Generated by create next app' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Home />
    </div>
  );
}
