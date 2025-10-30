import StarBattleHeader from "./StarBattleHeader";
import StarGrid from "./StarGrid";
import useTimer from "./hooks/useTimer";
import useStarBattle from "./hooks/useStarBattle";

function StarBattle(props) {

    const {
        grid, xGrid, shadedGrid, lockedGrid,
        autoXEnabled, setAutoXEnabled,
        toggleStar, toggleX,
        handleRightMouseDown, handleRightMouseEnter, handleMouseUp,
        isViolation, checkSolution, getCellBorders,
        message
    } = useStarBattle(props);

    const { time, isRunning, hasStarted, startTimer, pauseTimer, resetTimer } = useTimer();

    const handlePauseToggle = () => (isRunning ? pauseTimer() : startTimer());

    const handleReset = () => resetTimer();

    return (
        <div className={`inline-block m-4 p-2 rounded-md
            ${message === "Finished!" ? "border-4 border-green-500" : "border border-gray-300"}`}>

            <StarBattleHeader
                time={time}
                isRunning={isRunning}
                hasStarted={hasStarted}
                onStart={startTimer}
                onPauseToggle={handlePauseToggle}
                onReset={handleReset}
                autoXEnabled={autoXEnabled}
                onAutoXChange={setAutoXEnabled}
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
            />
        </div>
    );
}

export default StarBattle;
