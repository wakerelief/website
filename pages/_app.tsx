import '../styles/globals.scss'
import type { AppProps } from 'next/app'
import { useEffect } from 'react';
import "@fontsource/source-sans-pro"; // Weight 500.
import "@fontsource/source-sans-pro/400.css";
import "@fontsource/source-sans-pro/700.css";

function MyApp({ Component, pageProps }: AppProps) {
  useEffect(() => {
    typeof document !== undefined ? require('bootstrap/dist/js/bootstrap') : null
}, [])
  return <Component {...pageProps} />
}

export default MyApp
