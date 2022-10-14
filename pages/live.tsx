import dynamic from 'next/dynamic';
import SignupList from '../components/signup_list';
// import Video from '../components/video';

import { useAppDispatch } from '../app/hooks';
import { connect } from '@giantmachines/redux-websocket';

export default function Live() {
  // Start WebSocket connection
  let ws_starter = start_websocket_connection();
  ws_starter();

  const Camera = dynamic(() => import('../components/camera'), { ssr: false });
  return (
    <>
      <SignupList />
      {/* <Camera /> */}
    </>
  );
}


function start_websocket_connection() {
  return () => {
    const url = process.env.NEXT_PUBLIC_WS_URL;
    if (url) {
      const dispatch = useAppDispatch()
      dispatch(connect(url));
    } else {
      console.error("Could not find WS_URL");
    }
  }
}