import { Dispatch, useState } from "react";
import { send } from "@giantmachines/redux-websocket";

import { useAppDispatch } from "../app/hooks";
import { AnyAction } from "redux";
import { signMeUp } from "../app/messages/client";

export default function SignupForm() {
  let [text, setText] = useState("");
  let dispatch = useAppDispatch();

  let submit = () => {
    let action = signMeUp(text);
    dispatch(send(action));
    setText("");
  };

  return (
    <input
      type="text"
      value={text}
      placeholder="add your name..."
      className="p-2"
      onKeyDown={(e) => {
        if (e.key == "Enter") {
          submit();
        }
      }}
      onChange={(e) => setText(e.target.value)}
    />
  );
}
