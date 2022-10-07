import Head from 'next/head';

const Layout = ({ children }) => {
  return (
    <div className='bg-secondary bg-gradient bg-opacity-25'>
      <Head>
        <title>SVT Robot List</title>
        <meta name='description' content='List of SVT robots' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <main>{children}</main>
    </div>
  );
};

export default Layout;
