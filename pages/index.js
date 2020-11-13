import Head from 'next/head';
import Hero from '../components/Hero'
import WhatIDo from '../components/WhatIDo'
import Services from '../components/Services'
import Projects from '../components/Projects'
import DoIt from '../components/DoIt'
import WhoAmI from '../components/WhoAmI'
import Clients from '../components/Clients'

export default function Home() {
  return (
    <>
    <Head>
      <title>Harel Panker | Web Developer & Designer</title>
      <meta name='description' content="I build websites for companies, small businesses, restaurants, law firms, clinics, etc. I'm an expert in building and designing those websites using the most modern tools and technologies that exist." />
      <meta name='viewport' content='initial-scale=1, width=device-width' />
      <meta httpEquiv='Content-Type' content='text/html; charset=utf-8' />
    </Head>
    <div data-scroll-container>
      <Hero />
      <WhatIDo />
      <Services />
      <Projects />
      <DoIt />
      <Clients />
      <WhoAmI />
    </div>
    </>
  );
}
