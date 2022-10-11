import { useReactMediaRecorder } from "react-media-recorder";
import dynamic from 'next/dynamic';
// import useSWR from 'swr';

function pkgFetcher(pkgName: string) {
    return dynamic(() => import(pkgName))
}

export default function Video() {

    // const { data, error } = useSWR('react-media-recorder', pkgFetcher);
    // if (error) {
    //     return <p>OH NO</p>
    // }
    // if (!data) {
    //     return <p>NO DATA</p>
    // }
    // const useReactMediaRecorder = data;
    // const { useReactMediaRecorder } = await import('react-media-recorder');

    const { status, startRecording, stopRecording, mediaBlobUrl } =
        useReactMediaRecorder({ audio: false, video: true, askPermissionOnMount: true });

    return (
        <div className="w-[400px] h-[300px] bg-green-100" >
            <p>{status}</p>
            <button onClick={startRecording}>Start Recording</button>
            <button onClick={stopRecording}>Stop Recording</button>
            <p>url={mediaBlobUrl}</p>
            <video src={mediaBlobUrl} controls autoPlay loop />
        </div>
    );
};