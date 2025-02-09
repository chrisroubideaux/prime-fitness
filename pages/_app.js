import { useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@/styles/globals.css';
import '@/styles/calendar.css';
import '@/styles/navbar.css';
import '@/styles/sidebar.css';
import '@/styles/cards.css';
import '@/styles/forms.css';
import '@/styles/hero.css';
import '@/styles/modal.css';
import '@/styles/footer.css';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';

const stripePromise = loadStripe(
  process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY
);

export default function App({ Component, pageProps }) {
  useEffect(() => {
    require('bootstrap/dist/js/bootstrap.bundle.min.js');
  }, []);

  return (
    <Elements stripe={stripePromise}>
      <Component {...pageProps} />
    </Elements>
  );
}

{
  /*
export default function App({ Component, pageProps }) {
  useEffect(() => {
    require('bootstrap/dist/js/bootstrap.bundle.min.js');
  }, []);


  return
  
   <Component {...pageProps} />;
  );
}
*/
}
