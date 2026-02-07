import { useEffect, useRef } from 'react';
import './BackgroundAnimation.css';

export function BackgroundAnimation() {
    const canvasRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');

        function resizeCanvas() {
            // Use the visualViewport height if available (accounts for Safari bottom bar)
            const height = window.visualViewport?.height || window.innerHeight;
            canvas.width = window.innerWidth;
            canvas.height = height;
        }

        resizeCanvas(); // initial size
        window.addEventListener('resize', resizeCanvas);
        window.visualViewport?.addEventListener('resize', resizeCanvas);

        let time = 0;

        function noise(x, y) {
            return (
                Math.sin(x * 0.002 + time * 0.3) * Math.cos(y * 0.002 + time * 0.2) +
                Math.sin(x * 0.004 + time * 0.5) * Math.cos(y * 0.004 - time * 0.3) * 0.5 +
                Math.sin(x * 0.001 + time * 0.15) * Math.cos(y * 0.001 + time * 0.25) * 2
            );
        }

        function drawTopography() {
            ctx.fillStyle = '#1a1a1a';
            ctx.fillRect(0, 0, canvas.width, canvas.height);

            const numLines = 12;
            const step = canvas.height / (numLines + 1);

            for (let i = 1; i <= numLines; i++) {
                const baseY = step * i;
                ctx.strokeStyle = `rgba(120, 120, 120, ${0.6 - Math.abs(i - numLines/2) * 0.04})`;
                ctx.lineWidth = 1.5;
                ctx.beginPath();

                for (let x = 0; x <= canvas.width; x += 3) {
                    const offset = noise(x, baseY) * 30;
                    const y = baseY + offset;
                    x === 0 ? ctx.moveTo(x, y) : ctx.lineTo(x, y);
                }
                ctx.stroke();
            }

            time += 0.01;
            requestAnimationFrame(drawTopography);
        }

        drawTopography();

        return () => {
            window.removeEventListener('resize', resizeCanvas);
            window.visualViewport?.removeEventListener('resize', resizeCanvas);
        };
    }, []);

    return <canvas ref={canvasRef} className="background-canvas" />;
}
