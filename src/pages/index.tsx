import Head from 'next/head';
import { NextPage } from 'next';
import { Fragment } from 'react';

import Navbar from '@app/components/Navbar';
import Hero from '@app/components/Hero';
import SectionTitle from '@app/components/SectionTitle';
import Benefits from '@app/components/Benefits';
import { benefitOne, benefitTwo } from '@app/components/data';
import OurTeam from '@app/components/OurTeam';
import Footer from '@app/components/Footer';
import Cta from '@app/components/Cta';

type Props = {
  animData: unknown;
  animDataMobile: unknown;
  animDataWeb: unknown;
};

const Home: NextPage<Props> = ({ animDataMobile, animDataWeb }) => {
  return (
    <Fragment>
      <Head>
        <title>Nextly - Free Nextjs & TailwindCSS Landing Page Template</title>
        <meta
          name="description"
          content="Nextly is a free landing page template built with next.js & Tailwind CSS"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <Hero />
      <SectionTitle pretitle="Tentang Kami" title="Modernize Digital Revolution">
        Dengan tim berpengalaman, kami bergerak dibidang Teknologi Informasi dengan konsentrasi
        pengembangan Aplikasi dan Sistem Informasi berbasis Web maupun Mobile yang memanfaatkan
        teknologi modern dengan keterampilan digital untuk membantu dan mempercepat pertumbuhan
        bisnis / organisasi Anda.
      </SectionTitle>

      <SectionTitle title="Layanan Kami" pretitle="Services" />
      <Benefits animData={animDataMobile} data={benefitOne} />
      <Benefits animData={animDataWeb} imgPos="right" data={benefitTwo} />
      <SectionTitle pretitle="Tim" title="Tim pengembang kami" />
      <OurTeam />
      {/* 
      
     
      <Benefits imgPos="right" data={benefitTwo} />
   
     
      <SectionTitle pretitle="FAQ" title="Frequently Asked Questions">
        Answer your customers possible questions here, it will increase the conversion rate as well
        as support or chat requests.
      </SectionTitle>
      <Faq />
  
     
      <PopupWidget /> */}
      <Cta />
      <Footer />
    </Fragment>
  );
};

export async function getStaticProps() {
  const [hero, web, mobile] = await Promise.all([
    fetch('https://assets4.lottiefiles.com/packages/lf20_ypej3gd9.json'),
    fetch('https://assets7.lottiefiles.com/packages/lf20_ksrcyxgn.json'),
    fetch('https://assets5.lottiefiles.com/packages/lf20_wloxwco0.json'),
  ]);

  return {
    props: {
      animData: await hero.json(),
      animDataMobile: await mobile.json(),
      animDataWeb: await web.json(),
    },
  };
}

export default Home;

// export default function Home({ animData }): NextPage<Props> {
//   return (
//     <>

//     </>
//   );
// }
