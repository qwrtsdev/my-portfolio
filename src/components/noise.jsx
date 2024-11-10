"use client"

import { useEffect, useRef, useState } from 'react';

// ! DON'T USE THIS, THIS MF ALMOST BROKE MY SHIT.
// ! NO, SERIOUSLY. DON'T.
// ! THANK YOU CHATGPT FOR ACCELERATE MY RAM TO THE MAX.

export default function NoiseEffect() {
    const canvasRef = useRef(null);
    const [frame, setFrame] = useState(0);
    const [noiseData, setNoiseData] = useState([]);

    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');
        const wWidth = canvas.width;
        const wHeight = canvas.height;

        // Function to generate noise
        const createNoise = () => {
            const idata = ctx.createImageData(wWidth, wHeight);
            const buffer32 = new Uint32Array(idata.data.buffer);
            const len = buffer32.length;

            for (let i = 0; i < len; i++) {
                if (Math.random() < 0.5) {
                    buffer32[i] = 0xff000000; // Random black pixels
                }
            }

            // Update noise data with the new frame
            setNoiseData((prevData) => [...prevData, idata]);
        };

        // Function to paint the noise
        const paintNoise = () => {
            if (frame === 9) {
                setFrame(0); // Reset frame to 0 if it reaches 9
            } else {
                setFrame((prevFrame) => prevFrame + 1); // Increment frame
            }
        };

        // Function to run the loop
        const loop = () => {
            paintNoise();

            // Request the next frame after a short delay
            setTimeout(() => {
                requestAnimationFrame(loop); // Continue the loop
            }, 1000 / 25); // ~40ms for 25 frames per second
        };

        // Create initial noise data (you can create more noise frames here)
        createNoise();
        createNoise(); // Create another noise frame if needed

        // Start the loop
        loop();

        return () => {
            // Cleanup: Reset noise data and cancel any active loops
            setNoiseData([]);
        };
    }, [frame]); // Trigger effect when frame changes

    useEffect(() => {
        // Paint the current noise frame when `frame` changes
        if (noiseData[frame]) {
            const canvas = canvasRef.current;
            const ctx = canvas.getContext('2d');
            ctx.putImageData(noiseData[frame], 0, 0);
        }
    }, [frame, noiseData]); // Trigger effect when frame or noiseData changes

    return <canvas ref={canvasRef} width={800} height={600} style={{ border: '1px solid black' }} />;
};
