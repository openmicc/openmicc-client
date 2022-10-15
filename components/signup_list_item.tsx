import { useState } from "react";
import { send } from '@giantmachines/redux-websocket';

import { useAppDispatch } from "../app/hooks";
import { SignupListEntry } from "../app/ws";
import { loadReceipt } from "../functions/receipts";

interface Props {
    entry: SignupListEntry,
}

export default function SignupListItem(props: Props) {
    let [closeHovered, setCloseHovered] = useState(false);
    let dispatch = useAppDispatch();

    let id = props.entry.id;
    let receipt = loadReceipt(id);

    let submitRemoval = () => {
        // TODO: Action creator??
        let action = {
            type: "takeMeOff",
            payload: {id, receipt}
        };
        dispatch(send(action));
    }

    // Whether the signup belongs to the user
    let is_mine = (receipt !== null);

    let divClasses = [
        "group",
        "space-x-2",
        "px-1",
        "m-0",
        "-ml-1",
        "flex",
        "justify-between"
    ];

    let maybeControls;

    let bgColor = closeHovered ? "bg-red-100" : "bg-blue-100";

    if (is_mine) {
        divClasses.push(...[
            bgColor,
        ]);

        let you = (
            <span className="text-gray-400 italic min-w-[80px]">
                (that's you)
            </span>
        );

        let buttonClasses = [
            "text-red-500",
            "font-bold",
            "mx-2",
            "opacity-0",
            "group-hover:opacity-50"
        ];

        let buttonClassName = buttonClasses.join(' ');

        let x = (
            <button className={buttonClassName}
                onMouseOver={(e) => { setCloseHovered(true) }}
                onMouseOut={(e) => { setCloseHovered(false) }}
                onClick={submitRemoval}
            >
                x
            </button>
        );

        maybeControls = (
            <div className="min-w-[110px] flex justify-between">
                {you}
                {x}
            </div>
        );
    }

    let divClassName = divClasses.join(' ');
    let liClassName = "";

    let textClasses = [
        ""
    ];
    if (closeHovered) {
        textClasses.push(
            "line-through",
        );
    }
    let textClassName = textClasses.join(' ');

    let textSpan = (
        <span className={textClassName}>
            <Nbsp />
            {props.entry.text}
            <Nbsp />
        </span>
    );

    return (
        <li className={liClassName}>
            <div className={divClassName}>
                {textSpan}
                {maybeControls}
            </div>
        </li>
    );
}

// https://stackoverflow.com/a/54485712/4228052
const Nbsp = () => <>{'\u00A0'}</>;