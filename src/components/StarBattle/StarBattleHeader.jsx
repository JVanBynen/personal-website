import { formatTime } from "./utilities/formatTime";

function StarBattleHeader({
    time,
    isRunning,
    hasStarted,
    onStart,
    onPauseToggle,
    onReset,
    autoXEnabled,
    onAutoXChange,
    isSolved
}) {
    return (
        <div className="flex items-center justify-between p-4 rounded-md shadow-md">
            {/* Auto X checkbox */}
            <label className="flex items-center gap-2">
                <input
                    type="checkbox"
                    checked={autoXEnabled}
                    onChange={e => onAutoXChange(e.target.checked)}
                    className="w-4 h-4"
                />
                Auto X
            </label>

            {/* Timer display */}
            <div className="text-xl font-mono font-bold">
                {formatTime(time)}
            </div>

            {/* Buttons */}
            <div className="flex gap-2">
                {!isSolved && (
                    <button
                        className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition"
                        onClick={hasStarted ? onPauseToggle : onStart}
                    >
                        {!hasStarted ? "Start" : isRunning ? "Pause" : "Resume"}
                    </button>
                )}
                <button
                    className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 transition"
                    onClick={onReset}
                >
                    Reset
                </button>
            </div>
        </div>
    );
}

export default StarBattleHeader;
