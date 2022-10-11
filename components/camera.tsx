// from https://blog.logrocket.com/responsive-camera-component-react-hooks/
import React, { useRef, useState, VideoHTMLAttributes } from 'react';
import { useUserMedia } from '../functions/useUserMedia';

const CAPTURE_OPTIONS = {
    audio: false,
    video: { facingMode: "environment" },
};

export default function Camera() {
    const videoRef = useRef<HTMLVideoElement | null>(null);
    const mediaStream = useUserMedia(CAPTURE_OPTIONS);

    if (mediaStream && videoRef.current && !videoRef.current.srcObject) {
        videoRef.current.srcObject = mediaStream;
    }

    function handleCanPlay() {
        if (videoRef.current) {
            videoRef.current.play();
        }
    }

    return (
        <video ref={videoRef} onCanPlay={handleCanPlay} autoPlay playsInline muted />
    );
}