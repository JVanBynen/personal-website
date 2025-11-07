import { useEffect, useState } from "react";
import StarBattleHeader from "./StarBattleHeader";
import StarGrid from "./StarGrid";
import useTimer from "./hooks/useTimer";
import useStarBattle from "./hooks/useStarBattle";

function StarBattle(props) {

    const [showConfirmReset, setShowConfirmReset] = useState(false);

    const { time, isRunning, hasStarted, startTimer, pauseTimer, resetTimer } = useTimer();

    const {
        grid, xGrid, shadedGrid, lockedGrid,
        autoXEnabled, setAutoXEnabled,
        toggleStar, toggleX,
        handleRightMouseDown, handleRightMouseEnter, handleMouseUp,
        isViolation, checkSolution, getCellBorders,
        message, resetGrid, isSolved
    } = useStarBattle({ ...props, pauseTimer })

    const handlePauseToggle = () => (isRunning ? pauseTimer() : startTimer());

    const handleResetClick = () => {
        setShowConfirmReset(true);
    };

    const confirmReset = () => {
        resetTimer();
        resetGrid();
        setShowConfirmReset(false);
    };

    const cancelReset = () => setShowConfirmReset(false);

    useEffect(() => {
        if (isSolved && isRunning) {
            pauseTimer();
        }
    }, [isSolved, isRunning, pauseTimer]);

    return (
        <div className={`inline-block m-4 p-2 rounded-md
            ${message === "Finished!" ? "border-4 border-green-500" : "border border-gray-300"}`}>

            <StarBattleHeader
                time={time}
                isRunning={isRunning}
                hasStarted={hasStarted}
                onStart={startTimer}
                onPauseToggle={handlePauseToggle}
                onReset={handleResetClick}
                autoXEnabled={autoXEnabled}
                onAutoXChange={setAutoXEnabled}
                isSolved={isSolved}
            />

            <StarGrid
                grid={grid}
                xGrid={xGrid}
                shadedGrid={shadedGrid}
                lockedGrid={lockedGrid}
                isViolation={isViolation}
                toggleStar={toggleStar}
                toggleX={toggleX}
                handleRightMouseDown={handleRightMouseDown}
                handleRightMouseEnter={handleRightMouseEnter}
                hasStarted={hasStarted}
                isRunning={isRunning}
                getCellBorders={getCellBorders}
                isSolved={isSolved}
            />

            <div className="flex justify-center mt-4">
                <button
                    onClick={checkSolution}
                    className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
                >
                    Submit
                </button>
            </div>

            {message && (
                <div className="text-center mt-2 text-lg font-semibold">
                    {message}
                </div>
            )}

            {/* Confirmation Popup */}
            {showConfirmReset && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
                    <div className="bg-gray-800 p-6 rounded-lg shadow-lg text-center">
                        <p className="mb-4 text-white text-lg">Are you sure you want to reset the puzzle?</p>
                        <div className="flex justify-center space-x-4">
                            <button
                                onClick={confirmReset}
                                className="bg-red-500 px-4 py-2 rounded text-white hover:bg-red-600"
                            >
                                Yes
                            </button>
                            <button
                                onClick={cancelReset}
                                className="bg-gray-500 px-4 py-2 rounded text-white hover:bg-gray-600"
                            >
                                No
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

export default StarBattle;
