import { ThemeProvider } from 'next-themes';
import { AppProps } from 'next/app';

import '../css/tailwind.css';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider attribute="class" defaultTheme="dark">
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;
