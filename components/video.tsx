import dynamic from 'next/dynamic';
import { useEffect, useState } from 'react';
// import useSWR from 'swr';

function pkgFetcher(pkgName: string) {
    return dynamic(() => import(pkgName))
}


export default function Video() {
    const [mediaStream, setMediaStream] = useState(null);

    useEffect(() => {})

    return (
        <div className="w-[400px] h-[300px] bg-green-100" >
            <p>{status}</p>
            <button onClick={startRecording}>Start Recording</button>
            <button onClick={stopRecording}>Stop Recording</button>
            <p>url={mediaBlobUrl}</p>
            <video src={mediaBlobUrl} controls autoPlay playsInline loop />
        </div>
    );
};