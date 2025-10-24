import StarBattle from "../components/StarBattle";
import BattleHero from "../components/BattleHero";

const puzzles = [
    {
        title: "Small Regions First",
        description:
            <>
                <p className="mb-4">
                    A good starting point in Star Battle puzzles is to begin with the smallest regions.
                    You may be able to solve the two regions without much thought, but there's a key principle
                    in Star Battle puzzles that's useful to remember: every 2x2 area can contain at most one star.
                    This isn't stated directly in the rules; it's a natural consequence of the fact that stars cannot touch.
                </p>
                <p className="mb-4">
                    It may seem like a small or even obvious detail, but this idea becomes very helpful
                    when dividing regions or applying more advanced strategies. In the example, you can see
                    how one of the regions is broken up using the 2x2 box method. Any square outside the region
                    but inside one of those 2x2 boxes must be marked with an X, or the region won't be able to fit two stars.
                    You can now place those three Xs. Note that the green box could also have been placed higher,
                    which would account for two additional Xs.
                </p>
            </>,
        regions: [
            [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
            [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
            [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
            [1, 1, 1, 1, 1, 3, 3, 3, 3, 1],
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
        presetShades: [{ r: 6, c: 6, color: "#a4a4a4ff" }, { r: 6, c: 7, color: "#a4a4a4ff" }, { r: 7, c: 4 }, { r: 7, c: 5 }, { r: 7, c: 6, color: "#a4a4a4ff" }, { r: 7, c: 7, color: "#a4a4a4ff" }, { r: 8, c: 4 }, { r: 8, c: 5 }],
        solutionGrid: [
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 2, 2, 2, 2, 2],
            [0, 2, 2, 2, 2, 2, 1, 2, 1, 2],
            [0, 2, 1, 2, 1, 2, 2, 2, 2, 2],
            [0, 2, 2, 2, 2, 2, 0, 0, 0, 0],
            [0, 0, 0, 0, 2, 2, 2, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 2, 2, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
        ]
    },
    {
        title: "Cascading Stylized Stars (CSS)",
        description:
            <>
                <p className="mb-4">
                    I'm sorry for the pun in the title of this puzzle, but I had no choice.
                    The grid is shaded into 2x2 areas, which highlights some overarching puzzle logic:
                    every row and column of 2x2 boxes will contain exactly one empty box.
                    If you don't believe me, try it for yourself. I find it ironic that any
                    deductions can be made from thinking about where stars will not be placed
                    when the whole point of the puzzle is to place stars in.
                </p>
                <p className="mb-4">
                    Any 2x2 or larger cluster of Xs can have a large effect on a puzzle.
                    Here, the cluster forces the Xs down the row, allowing us to draw in six Xs.
                    A 1x2 area where you have confined an X is often called a domino.
                    Dominoes are very powerful in Star Battle puzzles, as they can often
                    force stars into certain positions or eliminate possibilities.
                </p>
            </>,
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
        presetXs: [{ r: 4, c: 0 }, { r: 4, c: 1 }, { r: 4, c: 2 }, { r: 5, c: 0 }, { r: 5, c: 1 }, { r: 5, c: 2 }],
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
        ],
        solutionGrid: [
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [2, 2, 2, 0, 2, 0, 2, 0, 2, 0],
            [2, 2, 2, 0, 2, 0, 2, 0, 2, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
        ]
    },
    {
        title: "Sum of Parts",
        description:
            <>
                <p className="mb-4">
                    In this example, you have to think about regions as a group instead of
                    individually. This is normally called the sum of parts. Simply put,
                    one column must contain two stars while three columns together must
                    contain six. On the left side of the grid, there is a star deficit,
                    while on the right side, there is a star surplus. This allows us to
                    place four stars.
                </p>
                <p className="mb-4">
                    If you are stuck trying to place all the Xs in this puzzle,
                    there are two rows and two columns in the grid that are full.
                    Also hidden in the grid is a domino that allows you to place two more Xs.
                </p>
            </>,
        regions: [
            [2, 2, 5, 5, 1, 1, 1, 1, 7, 7],
            [2, 2, 2, 5, 1, 1, 1, 1, 1, 7],
            [2, 2, 2, 5, 1, 1, 1, 1, 1, 7],
            [2, 2, 2, 5, 1, 1, 1, 1, 1, 7],
            [2, 2, 2, 4, 1, 1, 1, 1, 1, 7],
            [3, 2, 2, 4, 1, 1, 1, 1, 1, 6],
            [3, 3, 3, 4, 1, 1, 1, 1, 1, 6],
            [3, 3, 3, 4, 1, 1, 1, 1, 1, 6],
            [3, 3, 3, 4, 1, 1, 1, 1, 1, 6],
            [3, 3, 4, 4, 1, 1, 1, 1, 6, 6]
        ],
        locked: false,
        presetStars: [],
        solutionGrid: [
            [2, 2, 1, 2, 2, 2, 2, 2, 1, 2],
            [0, 2, 2, 2, 0, 0, 0, 2, 2, 2],
            [0, 0, 2, 0, 2, 0, 0, 0, 2, 0],
            [0, 0, 2, 0, 2, 0, 0, 0, 2, 0],
            [0, 0, 2, 0, 0, 0, 0, 0, 2, 0],
            [0, 0, 2, 0, 0, 0, 0, 0, 2, 0],
            [0, 0, 2, 0, 0, 0, 0, 0, 2, 0],
            [0, 0, 2, 0, 0, 0, 0, 0, 2, 0],
            [0, 2, 2, 2, 0, 0, 0, 2, 2, 2],
            [2, 2, 1, 2, 2, 2, 2, 2, 1, 2]
        ]
    },
    {
        title: "Uniqueness",
        description:
            <>
                <p className="mb-4">
                    At this point, you are ready to go ahead and try to solve some puzzles
                    on your own. That being said, there is still more to learn. Here is one
                    more strategy and one of my favorites: uniqueness.
                </p>
                <p className="mb-4">
                    I filled in most of the grid for you. The thing to notice is the shaded
                    cell. Ask the question, what would happen if that cell were an X? Chaos
                    would ensue, allowing the bottom left region to have two possible solutions.
                    This would break the uniqueness constraint of the puzzle, so the shaded cell
                    must be a star.
                </p>
            </>,
        regions: [
            [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
            [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
            [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
            [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
            [1, 4, 1, 1, 1, 1, 1, 1, 6, 1],
            [1, 4, 1, 1, 1, 1, 1, 1, 6, 1],
            [5, 4, 5, 5, 5, 5, 5, 5, 6, 5],
            [5, 5, 5, 5, 5, 5, 5, 5, 5, 5],
            [2, 2, 2, 3, 3, 3, 3, 3, 3, 3],
            [2, 2, 2, 3, 3, 3, 3, 3, 3, 3]
        ],
        locked: false,
        presetStars: [{ r: 9, c: 5 }, { r: 8, c: 9 }, { r: 4, c: 1 }, { r: 6, c: 1 }, { r: 4, c: 8 }, { r: 6, c: 8 }],
        presetXs: [
            // Row 4 (excluding c=1 and c=8)
            { r: 4, c: 0 }, { r: 4, c: 2 }, { r: 4, c: 3 }, { r: 4, c: 4 },
            { r: 4, c: 5 }, { r: 4, c: 6 }, { r: 4, c: 7 }, { r: 4, c: 9 },

            // Row 6 (excluding c=1 and c=8)
            { r: 6, c: 0 }, { r: 6, c: 2 }, { r: 6, c: 3 }, { r: 6, c: 4 },
            { r: 6, c: 5 }, { r: 6, c: 6 }, { r: 6, c: 7 }, { r: 6, c: 9 },

            // Column 1 (excluding r=4 and r=6)
            { r: 0, c: 1 }, { r: 1, c: 1 }, { r: 2, c: 1 }, { r: 3, c: 1 },
            { r: 5, c: 1 }, { r: 7, c: 1 }, { r: 8, c: 1 }, { r: 9, c: 1 },

            // Column 8 (excluding r=4 and r=6)
            { r: 0, c: 8 }, { r: 1, c: 8 }, { r: 2, c: 8 }, { r: 3, c: 8 },
            { r: 5, c: 8 }, { r: 7, c: 8 }, { r: 8, c: 8 }, { r: 9, c: 8 },

            // Surrounding star at (9,5)
            { r: 8, c: 4 }, { r: 8, c: 5 }, { r: 8, c: 6 },
            { r: 9, c: 4 }, { r: 9, c: 6 },

            // Surrounding star at (8,9)
            { r: 7, c: 8 }, { r: 7, c: 9 },
            { r: 8, c: 8 }, { r: 9, c: 8 }, { r: 9, c: 9 },

            // Surrounding star at (4,1)
            { r: 3, c: 0 }, { r: 3, c: 1 }, { r: 3, c: 2 },
            { r: 4, c: 0 }, { r: 4, c: 2 },
            { r: 5, c: 0 }, { r: 5, c: 1 }, { r: 5, c: 2 },

            // Surrounding star at (6,1)
            { r: 5, c: 0 }, { r: 5, c: 1 }, { r: 5, c: 2 },
            { r: 6, c: 0 }, { r: 6, c: 2 },
            { r: 7, c: 0 }, { r: 7, c: 1 }, { r: 7, c: 2 },

            // Surrounding star at (4,8)
            { r: 3, c: 7 }, { r: 3, c: 8 }, { r: 3, c: 9 },
            { r: 4, c: 7 }, { r: 4, c: 9 },
            { r: 5, c: 7 }, { r: 5, c: 8 }, { r: 5, c: 9 },

            // Surrounding star at (6,8)
            { r: 5, c: 7 }, { r: 5, c: 8 }, { r: 5, c: 9 },
            { r: 6, c: 7 }, { r: 6, c: 9 },
            { r: 7, c: 7 }, { r: 7, c: 8 }, { r: 7, c: 9 },

            // fill region
            { r: 8, c: 3 }, { r: 9, c: 3 }, { r: 8, c: 7 }, { r: 9, c: 7 }
        ]
        ,
        presetShades: [{ r: 7, c: 3 }],
        solutionGrid: [
            [0, 2, 0, 0, 0, 0, 0, 0, 2, 0],
            [0, 2, 0, 0, 0, 0, 0, 0, 2, 0],
            [0, 2, 0, 0, 0, 0, 0, 0, 2, 0],
            [2, 2, 2, 0, 0, 0, 0, 2, 2, 2],
            [2, 1, 2, 2, 2, 2, 2, 2, 1, 2],
            [2, 2, 2, 0, 0, 0, 0, 2, 2, 2],
            [2, 1, 2, 2, 2, 2, 2, 2, 1, 2],
            [2, 2, 2, 1, 2, 0, 0, 2, 2, 2],
            [1, 2, 2, 2, 2, 2, 2, 2, 2, 1],
            [2, 2, 1, 2, 2, 1, 2, 2, 2, 2],
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
                    <div className="text-gray-300 mb-4"
                        style={{
                            whiteSpace: "pre-line",
                            textAlign: "left",
                            textIndent: "2em"
                        }}>{puzzle.description}</div>

                    <div className="flex justify-center">
                        <StarBattle
                            gridSize={10}
                            starsPerRow={2}
                            regions={puzzle.regions}
                            locked={puzzle.locked}
                            presetStars={puzzle.presetStars || []}
                            presetXs={puzzle.presetXs || []}
                            presetShades={puzzle.presetShades || []}
                            solutionGrid={puzzle.solutionGrid || null}
                        />
                    </div>
                </div>
            ))}
        </div>
    );
}

export default StarBattlePage;
