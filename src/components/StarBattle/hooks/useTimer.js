import { useState, useEffect } from "react";
/**
 * Hook for puzzle timer
 */
export default function useTimer(initialRunning = false) {
    const [time, setTime] = useState(0);
    const [isRunning, setIsRunning] = useState(initialRunning);
    const [hasStarted, setHasStarted] = useState(false);

    useEffect(() => {
        if (!isRunning) return;

        const interval = setInterval(() => {
            setTime(prev => prev + 1);
        }, 1000);

        return () => clearInterval(interval);
    }, [isRunning]);

    const startTimer = () => {
        setIsRunning(true);
        setHasStarted(true);
    };

    const pauseTimer = () => setIsRunning(false);

    const resetTimer = () => {
        setTime(0);
        setIsRunning(false);
        setHasStarted(false);
    };

    return { time, isRunning, hasStarted, startTimer, pauseTimer, resetTimer };
}
