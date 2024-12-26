import React, { useRef, useEffect } from 'react';
import { video } from '../../constants';

const Intro = () => {
    const vidRef = useRef(null);

    useEffect(() => {
        if (vidRef.current) {
            vidRef.current.playbackRate = 1.5;
        }
    }, []);

    return (
        <div className="h-screen relative">
            <video 
                src={video}
                ref={vidRef}
                type="video/mp4"
                loop
                controls={false}
                muted
                autoPlay
                preload="auto"
                playsInline
                loading="lazy"
                className="w-full h-full object-cover"
                width="100%"
                height="100%"
            />
            <div className="absolute inset-0 bg-black/40" />
        </div>
    );
};

export default Intro;