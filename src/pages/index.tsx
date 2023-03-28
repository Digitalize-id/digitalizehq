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
import MobileIllustration from '@app/assets/svg/Mobile';
import WebIllustration from '@app/assets/svg/Web';

type Props = {
  animDataMobile: unknown;
  animDataWeb: unknown;
};

const Home: NextPage<Props> = () => {
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
      <Benefits
        data={benefitOne}
        Illustration={<MobileIllustration className="md:w-[600px] md:h-[500px] w-[300px]" />}
      />
      <Benefits
        imgPos="right"
        data={benefitTwo}
        Illustration={<WebIllustration className="md:w-[600px] md:h-[500px] w-[350px]" />}
      />
      <SectionTitle pretitle="Tim" title="Tim pengembang kami" />
      <OurTeam />
      <Cta />
      <Footer />
    </Fragment>
  );
};

export default Home;
