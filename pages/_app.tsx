import '../styles/globals.css'
import type { AppProps } from 'next/app'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    //Higher Order Component (HOC)
    <Component {...pageProps} />
  );
}

export default MyApp
