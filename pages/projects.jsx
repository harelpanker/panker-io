import Head from 'next/head';
import Hero from '../components/projects/Hero';
import Work from '../components/projects/Work';

const projects = () => {
  return (
    <>
      <Head>
        <title>Harel Panker | My Work</title>
        <meta
          name='description'
          content='Here you can see my latest work, mainly build with Webflow. You can find a portfolio, business, studio, restaurant, and E-Commerce websites.'
        />
        <meta name='viewport' content='initial-scale=1, width=device-width' />
        <meta httpEquiv='Content-Type' content='text/html; charset=utf-8' />
      </Head>
      <Hero />
      <Work />
    </>
  );
};

export default projects;
