import "../styles/globals.css";
import type { AppProps } from "next/app";
import { Provider } from "react-redux";
import Layout from "../components/layout";

import { wrapper } from "../app/store";

// import { newSignup } from '../app/ws';

export default function MyApp({ Component, ...rest }: AppProps) {
  // https://github.com/kirill-konshin/next-redux-wrapper#wrapperusewrappedstore
  const { store, props } = wrapper.useWrappedStore(rest);
  return (
    <Provider store={store}>
      <Layout>
        <Component {...props.pageProps} />
      </Layout>
    </Provider>
  );
}
