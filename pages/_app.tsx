import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Layout from '../components/layout';

import { useAppDispatch } from '../app/hooks';
import { connect } from '@giantmachines/redux-websocket';
import { wrapper } from '../app/store';
import { stripVTControlCharacters } from 'util';

// import { newSignup } from '../app/ws';


function MyApp({ Component, pageProps }: AppProps) {
  const ws_starter = start_websocket_connection();
  ws_starter();
  return <Layout><Component {...pageProps} /></Layout>
}

export default wrapper.withRedux(MyApp);

function start_websocket_connection() {
  return () => {
    const url = process.env.WS_URL;
    if (url) {
      const dispatch = useAppDispatch()
      dispatch(connect(url));
    } else {
      console.error("Could not find WS_URL");
    }
  }
}