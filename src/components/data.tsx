import {
  EmojiHappyIcon,
  ChartSquareBarIcon,
  DeviceMobileIcon,
  AdjustmentsIcon,
} from '@heroicons/react/outline';

const benefitOne = {
  title: 'Mobile Development',
  desc: 'Kami membuatkan Aplikasi Mobile (Android dan iOS) untuk berbagai urusan dan kebutuhan.',
  bullets: [
    {
      title: 'Multiplatform',
      desc: 'Kami dapat membuatkan aplikasi Android dan iOS sekaligus',
      Icon: EmojiHappyIcon,
    },
    {
      title: 'React Native',
      desc: 'Kami menggunakan React Native untuk mempercepat pembuatan aplikasi',
      Icon: ChartSquareBarIcon,
    },
  ],
};

const benefitTwo = {
  title: 'Web & Sistem Informasi',
  desc: 'Layanan pembuatan Website dan Sistem Informasi berbasis Web dengan teknologi kekinian.',
  bullets: [
    {
      title: 'Mobile Responsive',
      desc: 'Kami menjamin Website anda berjalan dan responsive di semua perangkat',
      Icon: DeviceMobileIcon,
    },
    {
      title: 'Powered by modern technologies',
      desc: 'Kami menggunakan teknologi kekinian seperti Next.js, React, TailwindCSS & lainnya',
      Icon: AdjustmentsIcon,
    },
  ],
};

export type Benefit = typeof benefitOne;
export type BenefitBullet = typeof benefitOne.bullets[0];

export { benefitOne, benefitTwo };
