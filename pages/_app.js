import { useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@/styles/globals.css';
import '@/styles/navbar.css';
import '@/styles/cards.css';
import '@/styles/forms.css';
import '@/styles/hero.css';
import '@/styles/modal.css';

export default function App({ Component, pageProps }) {
  useEffect(() => {
    require('bootstrap/dist/js/bootstrap.bundle.min.js');
  }, []);
  return <Component {...pageProps} />;
}
