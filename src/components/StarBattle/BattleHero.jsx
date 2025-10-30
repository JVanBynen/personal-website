import { Link } from "react-router-dom";

const BattleHero = () => {
    return (
        <div className="text-white text-center py-16 px-4" id="battle-hero">


            <h1 className="text-4xl font-bold mb-4">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500">
                    Star Battle Strategy Guide
                </span>
            </h1>

            <p className="text-lg text-gray-300 max-w-2xl mx-auto mb-6 text-left [text-indent:2em]">
                Logic puzzles are one of my favorite pastimes. I enjoy the
                challenge of figuring out patterns and reasoning through
                problems, and Star Battle puzzles hit that sweet spot of
                logic and design.
            </p>

            <p className="text-lg text-gray-300 max-w-2xl mx-auto mb-6 text-left [text-indent:2em]">
                Below, you'll find a short guide to some common star battle
                puzzle strategies. You can follow along to learn key techniques,
                or head to the next page to try solving puzzles yourself!
            </p>

            <h1 className="text-4xl font-bold mb-4">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500">
                    Rules
                </span>
            </h1>

            <div className="max-w-md mx-auto bg-gray-800 p-6 rounded-lg text-left">
                <ol className="list-decimal list-inside space-y-2 text-gray-300">
                    <li>Place exactly two stars in each row, column, and region.</li>
                    <li>Stars cannot touch each other, not even diagonally.</li>
                    <li>Each puzzle has exactly one solution.</li>
                </ol>
            </div>


            <div className="mt-8 space-x-4">
                <Link
                    to="/star-battle-puzzles"
                    className="bg-gradient-to-r from-blue-500 to-purple-500 text-white px-6 py-2 rounded-full transform transition-transform duration-300 hover:scale-105 inline-block"
                >
                    Try Puzzles
                </Link>
            </div>
        </div>
    );
};

export default BattleHero;
