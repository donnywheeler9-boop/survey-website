// frontend/pages/_app.js

import '../styles/globals.css';  // Add this line to import the globals.css file

export default function App({ Component, pageProps }) {
  return <Component {...pageProps} />;
}
