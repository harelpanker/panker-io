import Head from 'next/head';
import Hero from '../components/home/Hero'
import HeroDescription from '../components/home/HeroDescription'
import Services from '../components/home/Services'
import Projects from '../components/home/Projects'
import DoIt from '../components/home/DoIt'
import Clients from '../components/home/Clients'
import WhoAmI from '../components/home/WhoAmI'

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
      <HeroDescription />
      <Services />
      <Projects />
      <DoIt />
      <Clients />
      <WhoAmI />
    </div>
    </>
  );
}
