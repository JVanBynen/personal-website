import StarBattle from "../components/StarBattle";
import BattleHero from "../components/BattleHero";

const puzzles = [
    {
        title: "Small Regions First",
        description: `You may be able to quickly solve the two regions without much thought, 
        but there is a golden rule of star battle puzzles that may help you in the future. 
        Every 2x2 region will contain at most one star! This is not stated in the rules rather just 
        a consequence of the stars not being able to touch. It may seem small or even trivial, 
        but I promise this will help when breaking up regions or for other more advanced strategies.
        You can see how I broke up one of the regions using the 2x2 box method, 
        any square outside the region but inside the 2x2 boxes must be an x or the region wont be 
        able to hold 2 stars. You can place those three x's. Yes the green box could have been 
        placed higher accounting for two other x's.`,
        regions: [
            [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
            [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
            [1, 1, 1, 1, 1, 3, 3, 3, 1, 1],
            [1, 1, 1, 1, 1, 3, 3, 3, 1, 1],
            [1, 1, 2, 2, 2, 1, 1, 1, 1, 1],
            [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
            [1, 1, 1, 1, 1, 1, 1, 4, 1, 1],
            [1, 1, 1, 1, 4, 4, 4, 4, 1, 1],
            [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
            [1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
        ],
        locked: false,
        presetStars: [],
        presetXs: [],
        presetShades: [{ r: 6, c: 6 }, { r: 6, c: 7 }, { r: 7, c: 4 }, { r: 7, c: 5 }, { r: 7, c: 6 }, { r: 7, c: 7 }, { r: 8, c: 4 }, { r: 8, c: 5 }],
    },
    {
        title: "Checkers?",
        description: "Notice how each region must also contain two stars.",
        regions: [
            [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
            [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
            [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
            [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
            [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
            [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
            [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
            [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
            [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
            [1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
        ],
        locked: false,
        presetStars: [],
        presetXs: [],
        presetShades: [
            { r: 0, c: 0 }, { r: 0, c: 1 }, { r: 1, c: 0 }, { r: 1, c: 1 },
            { r: 0, c: 4 }, { r: 0, c: 5 }, { r: 1, c: 4 }, { r: 1, c: 5 },
            { r: 0, c: 8 }, { r: 0, c: 9 }, { r: 1, c: 8 }, { r: 1, c: 9 },
            { r: 2, c: 2 }, { r: 2, c: 3 }, { r: 3, c: 2 }, { r: 3, c: 3 },
            { r: 2, c: 6 }, { r: 2, c: 7 }, { r: 3, c: 6 }, { r: 3, c: 7 },
            { r: 4, c: 0 }, { r: 4, c: 1 }, { r: 5, c: 0 }, { r: 5, c: 1 },
            { r: 4, c: 4 }, { r: 4, c: 5 }, { r: 5, c: 4 }, { r: 5, c: 5 },
            { r: 4, c: 8 }, { r: 4, c: 9 }, { r: 5, c: 8 }, { r: 5, c: 9 },
            { r: 6, c: 2 }, { r: 6, c: 3 }, { r: 7, c: 2 }, { r: 7, c: 3 },
            { r: 6, c: 6 }, { r: 6, c: 7 }, { r: 7, c: 6 }, { r: 7, c: 7 },
            { r: 8, c: 0 }, { r: 8, c: 1 }, { r: 9, c: 0 }, { r: 9, c: 1 },
            { r: 8, c: 4 }, { r: 8, c: 5 }, { r: 9, c: 4 }, { r: 9, c: 5 },
            { r: 8, c: 8 }, { r: 8, c: 9 }, { r: 9, c: 8 }, { r: 9, c: 9 }
        ]
    },
];

function StarBattlePage() {
    return (
        <div className="relative z-10 p-6 space-y-12 text-center">
            <BattleHero />

            <h1 className="text-3xl font-bold mb-6 text-white">
                Star Battle Strategies
            </h1>

            {puzzles.map((puzzle, index) => (
                <div
                    key={index}
                    className="border-b border-gray-700 pb-8 max-w-4xl mx-auto"
                >
                    <h2 className="text-xl font-semibold mb-2 text-white">
                        {puzzle.title}
                    </h2>
                    <p className="text-gray-300 mb-4">{puzzle.description}</p>

                    <div className="flex justify-center">
                        <StarBattle
                            gridSize={10}
                            starsPerRow={2}
                            regions={puzzle.regions}
                            locked={puzzle.locked}
                            presetStars={puzzle.presetStars || []}
                            presetXs={puzzle.presetXs || []}
                            presetShades={puzzle.presetShades || []}
                        />
                    </div>
                </div>
            ))}
        </div>
    );
}

export default StarBattlePage;
