const PuzzleHero = () => {
    return (
        <div className="text-white text-center py-16 px-4" id="puzzle-hero">


            <h1 className="text-4xl font-bold mb-4">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500">
                    Star Battle Strategy Guide
                </span>
            </h1>

            <p className="text-lg text-gray-300 max-w-2xl mx-auto mb-6 text-left [text-indent:2em]">
                Computer generated star battle puzzles can be made in an instant and are easily searchable,
                but never match the quality of a handmade puzzle. Below is a small collection of hand
                crafted puzzles for you to try.
            </p>

            <p className="text-lg text-gray-300 max-w-2xl mx-auto mb-6 text-left [text-indent:2em]">
                The puzzles go in order of increasing difficulty. I am warning you now, the harder puzzles
                can take longer than you might expect so attempt at your own peril.
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

        </div>
    );
};

export default PuzzleHero;
