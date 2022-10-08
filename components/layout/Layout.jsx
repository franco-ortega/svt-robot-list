import Head from 'next/head';

const Layout = ({ children }) => {
  return (
    <div className='bg-secondary bg-gradient bg-opacity-25 p-2 min-vh-100'>
      <Head>
        <title>SVT Robot List</title>
        <meta name='description' content='List of SVT robots' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <header>
        <h1 className='m-0 text-center'>SVT Robots</h1>
      </header>
      <main>{children}</main>
    </div>
  );
};

export default Layout;
