import { useEffect, useRef } from 'react';
import './BackgroundAnimation.css';

export function BackgroundAnimation() {
    const canvasRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;

        // Noise function for organic terrain
        const noise = (x, y, time) => {
            const scale = 0.003;
            return Math.sin(x * scale + time * 0.0002) * 
                   Math.cos(y * scale + time * 0.0003) * 
                   Math.sin((x + y) * scale * 0.5 + time * 0.0001) * 150;
        };

        let time = 0;

        function drawTopography() {
            ctx.fillStyle = '#1a1a1a';
            ctx.fillRect(0, 0, canvas.width, canvas.height);

            const spacing = 40; // Distance between contour lines
            const levels = 15; // Number of elevation levels

            ctx.strokeStyle = 'rgba(80, 80, 80, 0.3)';
            ctx.lineWidth = 1.5;

            for (let level = 0; level < levels; level++) {
                const elevation = level * spacing;
                
                ctx.beginPath();
                let started = false;

                for (let x = 0; x < canvas.width; x += 3) {
                    for (let y = 0; y < canvas.height; y += 3) {
                        const height = noise(x, y, time);
                        
                        if (Math.abs(height - elevation) < 5) {
                            if (!started) {
                                ctx.moveTo(x, y);
                                started = true;
                            } else {
                                ctx.lineTo(x, y);
                            }
                        }
                    }
                }
                
                ctx.stroke();
            }

            time += 1;
            requestAnimationFrame(drawTopography);
        }

        drawTopography();

        const handleResize = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        };

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return <canvas ref={canvasRef} className="background-canvas" />;
}