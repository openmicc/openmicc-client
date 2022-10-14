import { useState } from "react";

export default function SignupForm() {
    let [text, setText] = useState("");

    return (
        <input type="text" value={text}
            onChange={e => setText(e.target.value)} />
    )
}