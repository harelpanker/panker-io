import Head from 'next/head';
import Hero from '../components/about/Hero';
import Values from '../components/about/Values';
import Team from '../components/about/Team';

import Divider from '../styled/Divider';

const about = () => {
  return (
    <>
      <Head>
        <title>Harel Panker | About</title>
        <meta
          name='description'
          content="Hello! My name is Harel Panker, and I'm a passionate web developer and designer based in Vienna, Austria."
        />
        <meta name='viewport' content='initial-scale=1, width=device-width' />
        <meta httpEquiv='Content-Type' content='text/html; charset=utf-8' />
      </Head>
      <Hero />
      <Values />
      <Divider />
      <Team />
    </>
  );
};

export default about;
