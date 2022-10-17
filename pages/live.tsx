import { connect } from "@giantmachines/redux-websocket";

import { useAppDispatch } from "../app/hooks";
import SignupList from "../components/signup_list";
import Stage from "../components/stage";

export default function Live() {
  // Start WebSocket connection
  let ws_starter = start_websocket_connection();
  ws_starter();

  return (
    <>
      <div className="flex">
        <Stage />
        <SignupList />
      </div>
    </>
  );
}

function start_websocket_connection() {
  return () => {
    const url = process.env.NEXT_PUBLIC_WS_URL;
    if (url) {
      const dispatch = useAppDispatch();
      dispatch(connect(url));
    } else {
      console.error("Could not find WS_URL");
    }
  };
}
