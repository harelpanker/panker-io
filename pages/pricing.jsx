import Head from 'next/head';
import Hero from '../components/pricing/Hero';
import Pricing from '../components/pricing/Pricing';

const pricing = () => {
  return (
    <>
      <Head>
        <title>Harel panker | Pricing</title>
        <meta
          name='description'
          content='The cost you need to consider in creating, hosting, and maintaining a website.'
        />
        <meta name='viewport' content='initial-scale=1, width=device-width' />
        <meta httpEquiv='Content-Type' content='text/html; charset=utf-8' />
      </Head>
      <Hero />
      <Pricing />
    </>
  );
};

export default pricing;
