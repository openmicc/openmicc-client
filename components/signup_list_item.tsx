import { useState } from "react";
import { SignupListEntry } from "../app/ws";
import { loadReceipt } from "../functions/receipts";

interface Props {
    entry: SignupListEntry,
}

export default function SignupListItem(props: Props) {
    let receipt = loadReceipt(props.entry.id);
    console.log(`receipt for ${props.entry.id} ? ${receipt}`);

    let [closeHovered, setCloseHovered] = useState(false);

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
            <span className="text-gray-400 italic">
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
            >
                x
            </button>
        );

        maybeControls = (
            <div className="w-[110px] flex justify-between">
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