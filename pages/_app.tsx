import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Layout from '../components/layout';

import { useAppDispatch } from '../app/hooks';
import { connect } from '@giantmachines/redux-websocket';
import { wrapper } from '../app/store';

// import { newSignup } from '../app/ws';


function MyApp({ Component, pageProps }: AppProps) {

  const url = 'ws://localhost:3050';
  const dispatch = useAppDispatch()
  dispatch(connect(url));

  // dispatch(newSignup({ name: "alrighty", counter: 17 }));

  console.log("DISPATCHED");

  return <Layout><Component {...pageProps} /></Layout>
}

export default wrapper.withRedux(MyApp);
