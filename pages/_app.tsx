import { useEffect } from 'react';

import '../assets/main.css'

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    if ('serviceWorker' in navigator) {
      window.addEventListener('load', function () {
        navigator.serviceWorker.register('/serviceWorker.js').then(function (registration) {
          console.log('[ServiceWorker]: Successful registered');
        }, function(err) {
          console.log('[ServiceWorker]: Failed to register', err);
        });
      });
    }
  }, [])
  return <Component {...pageProps} />
}

export default MyApp
