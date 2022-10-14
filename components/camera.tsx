// from https://blog.logrocket.com/responsive-camera-component-react-hooks/
import React, { useRef, useState, VideoHTMLAttributes } from 'react';
import { useUserMedia } from '../functions/useUserMedia';

const CAPTURE_OPTIONS = {
    audio: false,
    video: { facingMode: "user" },
};

export default function Camera() {
    const videoRef = useRef<HTMLVideoElement | null>(null);
    const mediaStream = useUserMedia(CAPTURE_OPTIONS);

    if (mediaStream && videoRef.current && !videoRef.current.srcObject) {
        videoRef.current.srcObject = mediaStream;
    }

    function handleCanPlay() {
        console.log('can play');
        if (videoRef.current) {
            console.log('playing');
            videoRef.current.play();
        }
    }

    return (
        <div className="border-2">
        <video ref={videoRef} onCanPlay={handleCanPlay} autoPlay playsInline muted />
        </div>
    );
}