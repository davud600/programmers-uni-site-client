import '../styles/global.css';
import '../styles/practice.css';
import '../styles/courses.css';
import '../styles/hexagons.css';
import '../styles/about.css';
import '../styles/contact.css';
import '../styles/footer.css';
import '../styles/header.css';

import type { AppProps } from 'next/app';

const MyApp = ({ Component, pageProps }: AppProps) => (
  <Component {...pageProps} />
);

export default MyApp;
