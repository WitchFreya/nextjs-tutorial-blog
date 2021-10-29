import Providers from '../components/providers';
import '../styles/global.css';

export default function App({ Component, pageProps }) {
  return <Providers><Component {...pageProps} /></Providers>
}