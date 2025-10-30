import StarImage from "../../assets/star.png";
import RedX from "../../assets/red-x.png";

export default function StarCell({
    row,
    col,
    value,       // true if star
    hasX,       // true if X
    shaded,
    locked,
    isViolation,
    borders,
    onClick,
    onRightMouseDown,
    onRightMouseEnter
}) {
    const bgClass = value && isViolation
        ? "bg-red-400"
        : shaded
            ? "bg-green-200"
            : locked
                ? "bg-gray-100"
                : "bg-white";

    return (
        <div
            className={`w-12 h-12 flex items-center justify-center cursor-pointer box-border ${borders} ${bgClass}`}
            onClick={() => onClick(row, col)}
            onContextMenu={(e) => e.preventDefault()}
            onMouseDown={(e) => onRightMouseDown(e, row, col)}
            onMouseEnter={(e) => onRightMouseEnter(e, row, col)}
        >
            {value && <img src={StarImage} alt="Star" className={`w-8 h-8 object-contain ${locked ? "opacity-70" : ""}`} />}
            {!value && hasX && <img src={RedX} alt="X" className="w-6 h-6 object-contain" />}
        </div>
    );
}
