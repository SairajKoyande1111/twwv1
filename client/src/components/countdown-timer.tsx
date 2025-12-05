import { useState, useEffect, useCallback } from "react";

interface CountdownTimerProps {
  durationMs?: number;
  persistKey?: string;
  onExpire?: () => void;
  className?: string;
  showLabels?: boolean;
}

export function CountdownTimer({
  durationMs = 15 * 60 * 1000,
  persistKey = "offer_countdown",
  onExpire,
  className = "",
  showLabels = false,
}: CountdownTimerProps) {
  const [timeLeft, setTimeLeft] = useState<number>(0);

  const getEndTime = useCallback(() => {
    if (typeof window === "undefined") return Date.now() + durationMs;
    
    const stored = localStorage.getItem(persistKey);
    if (stored) {
      const endTime = parseInt(stored, 10);
      if (endTime > Date.now()) {
        return endTime;
      }
    }
    const newEndTime = Date.now() + durationMs;
    localStorage.setItem(persistKey, newEndTime.toString());
    return newEndTime;
  }, [durationMs, persistKey]);

  useEffect(() => {
    const endTime = getEndTime();
    
    const updateTimer = () => {
      const remaining = Math.max(0, endTime - Date.now());
      setTimeLeft(remaining);
      
      if (remaining <= 0) {
        onExpire?.();
        localStorage.removeItem(persistKey);
      }
    };

    updateTimer();
    const interval = setInterval(updateTimer, 1000);

    return () => clearInterval(interval);
  }, [getEndTime, onExpire, persistKey]);

  const minutes = Math.floor(timeLeft / 60000);
  const seconds = Math.floor((timeLeft % 60000) / 1000);

  const formatTime = (value: number) => value.toString().padStart(2, "0");

  if (showLabels) {
    return (
      <div className={`flex items-center gap-3 ${className}`} data-testid="countdown-timer-labeled">
        <div className="flex flex-col items-center">
          <span className="text-2xl font-bold text-foreground" data-testid="text-timer-minutes">
            {formatTime(minutes)}
          </span>
          <span className="text-xs text-muted-foreground">Minutes</span>
        </div>
        <span className="text-2xl font-bold text-foreground">:</span>
        <div className="flex flex-col items-center">
          <span className="text-2xl font-bold text-foreground" data-testid="text-timer-seconds">
            {formatTime(seconds)}
          </span>
          <span className="text-xs text-muted-foreground">Seconds</span>
        </div>
      </div>
    );
  }

  return (
    <span className={`font-mono font-bold ${className}`} data-testid="countdown-timer">
      {formatTime(minutes)}:{formatTime(seconds)}
    </span>
  );
}
