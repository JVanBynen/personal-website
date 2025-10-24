import StarBattle from "../components/StarBattle";
import PuzzleHero from "../components/PuzzleHero";

const puzzles = [
    {
        title: "Star Frame",
        description:
            <>
                <p className="mb-4">
                    Author: Pyramid Scheme
                    Difficulty: 1.5/5
                </p>

                <p class="text-sm text-gray-400">
                    Puzzle used with permission from{" "}
                    <a href="https://www.gmpuzzles.com/blog/2021/10/star-battle-by-grant-fikes-4/"
                        target="_blank"
                        rel="noopener noreferrer"
                        class="underline">
                        Grandmaster Puzzles
                    </a>.
                    This work is licensed under{" "}
                    <a href="https://creativecommons.org/licenses/by-nc-nd/3.0/"
                        target="_blank"
                        rel="noopener noreferrer"
                        class="underline">
                        CC BY-NC-ND 3.0
                    </a>.
                </p>
            </>,
        gridSize: 10,
        regions: [
            [1, 1, 2, 2, 2, 2, 2, 2, 2, 3],
            [1, 8, 8, 2, 2, 2, 2, 2, 3, 3],
            [1, 8, 8, 8, 2, 2, 2, 3, 3, 3],
            [1, 8, 8, 8, 9, 2, 9, 9, 3, 3],
            [1, 8, 8, 9, 9, 9, 9, 9, 9, 3],
            [7, 8, 8, 10, 10, 9, 10, 9, 9, 4],
            [7, 7, 8, 8, 10, 10, 10, 10, 4, 4],
            [7, 7, 7, 8, 10, 10, 5, 4, 4, 4],
            [7, 7, 6, 8, 10, 5, 5, 5, 4, 4],
            [7, 6, 6, 6, 5, 5, 5, 5, 5, 4]
        ],

    },
    {
        title: "Tokyo Olympic Torch",
        description:
            <>
                <p className="mb-4">
                    Author: Takeya Saikachi
                    Difficulty: 1.5/5
                </p>

                <p class="text-sm text-gray-400">
                    Puzzle used with permission from{" "}
                    <a href="https://www.gmpuzzles.com/blog/2022/02/star-battle-by-takeya-saikachi/"
                        target="_blank"
                        rel="noopener noreferrer"
                        class="underline">
                        Grandmaster Puzzles
                    </a>.
                    This work is licensed under{" "}
                    <a href="https://creativecommons.org/licenses/by-nc-nd/3.0/"
                        target="_blank"
                        rel="noopener noreferrer"
                        class="underline">
                        CC BY-NC-ND 3.0
                    </a>.
                </p>
            </>,
        gridSize: 10,
        regions: [
            [1, 1, 1, 1, 2, 2, 2, 3, 3, 3],
            [1, 1, 1, 1, 2, 2, 2, 3, 3, 3],
            [1, 1, 1, 1, 2, 2, 2, 2, 3, 4],
            [1, 1, 1, 1, 9, 9, 2, 2, 4, 4],
            [1, 1, 1, 9, 9, 9, 10, 2, 4, 4],
            [8, 8, 7, 9, 10, 10, 10, 7, 4, 4],
            [8, 8, 7, 7, 10, 7, 7, 7, 4, 4],
            [8, 8, 8, 7, 7, 7, 7, 4, 4, 4],
            [6, 6, 6, 6, 6, 6, 6, 6, 6, 6],
            [5, 5, 5, 5, 5, 5, 5, 5, 5, 5]
        ],

    },
    {
        title: "Cutting Corners",
        description:
            <>
                <p className="mb-4">
                    Author: Grant Fikes
                    Difficulty: 2/5
                </p>

                <p class="text-sm text-gray-400">
                    Puzzle used with permission from{" "}
                    <a href="https://www.gmpuzzles.com/blog/2021/02/star-battle-by-grant-fikes-3/"
                        target="_blank"
                        rel="noopener noreferrer"
                        class="underline">
                        Grandmaster Puzzles
                    </a>.
                    This work is licensed under{" "}
                    <a href="https://creativecommons.org/licenses/by-nc-nd/3.0/"
                        target="_blank"
                        rel="noopener noreferrer"
                        class="underline">
                        CC BY-NC-ND 3.0
                    </a>.
                </p>
            </>,
        gridSize: 10,
        regions: [
            [9, 9, 9, 9, 2, 2, 3, 3, 3, 3],
            [9, 9, 9, 10, 2, 2, 2, 3, 3, 3],
            [9, 9, 10, 10, 10, 1, 1, 1, 3, 3],
            [9, 8, 8, 10, 10, 10, 1, 4, 4, 3],
            [8, 8, 8, 10, 10, 1, 1, 1, 4, 4],
            [8, 8, 8, 6, 10, 10, 1, 4, 4, 4],
            [7, 8, 8, 6, 6, 6, 6, 4, 4, 5],
            [7, 7, 6, 6, 6, 6, 4, 4, 5, 5],
            [7, 7, 7, 6, 6, 6, 4, 5, 5, 5],
            [7, 7, 7, 7, 6, 6, 5, 5, 5, 5]
        ],

    },
    {
        title: "Four Circles",
        description:
            <>
                <p className="mb-4">
                    Author: Ashish Kumar
                    Difficulty: 2/5
                </p>

                <p class="text-sm text-gray-400">
                    Puzzle used with permission from{" "}
                    <a href="https://www.gmpuzzles.com/blog/2022/02/star-battle-by-ashish-kumar-5/"
                        target="_blank"
                        rel="noopener noreferrer"
                        class="underline">
                        Grandmaster Puzzles
                    </a>.
                    This work is licensed under{" "}
                    <a href="https://creativecommons.org/licenses/by-nc-nd/3.0/"
                        target="_blank"
                        rel="noopener noreferrer"
                        class="underline">
                        CC BY-NC-ND 3.0
                    </a>.
                </p>
            </>,
        gridSize: 10,
        regions: [
            [1, 1, 1, 1, 1, 1, 2, 2, 3, 3],
            [1, 9, 9, 10, 10, 2, 2, 2, 2, 3],
            [9, 9, 9, 9, 10, 2, 2, 2, 2, 3],
            [9, 9, 9, 9, 10, 10, 2, 2, 4, 4],
            [8, 9, 9, 10, 10, 10, 4, 4, 4, 4],
            [8, 8, 8, 8, 8, 10, 10, 5, 5, 4],
            [8, 8, 7, 7, 8, 10, 5, 5, 5, 5],
            [8, 7, 7, 7, 7, 6, 5, 5, 5, 5],
            [8, 7, 7, 7, 7, 6, 6, 5, 5, 6],
            [8, 8, 7, 7, 6, 6, 6, 6, 6, 6]
        ],

    },
    {
        title: "T It Up",
        description:
            <>
                <p className="mb-4">
                    Author: JinHoo Ahn
                    Difficulty: 3/5
                </p>

                <p class="text-sm text-gray-400">
                    Puzzle used with permission from{" "}
                    <a href="https://www.gmpuzzles.com/blog/2024/05/star-battle-by-jinhoo-ahn-11/"
                        target="_blank"
                        rel="noopener noreferrer"
                        class="underline">
                        Grandmaster Puzzles
                    </a>.
                    This work is licensed under{" "}
                    <a href="https://creativecommons.org/licenses/by-nc-nd/3.0/"
                        target="_blank"
                        rel="noopener noreferrer"
                        class="underline">
                        CC BY-NC-ND 3.0
                    </a>.
                </p>
            </>,
        gridSize: 10,
        regions: [
            [1, 1, 1, 1, 1, 2, 2, 2, 3, 3],
            [1, 1, 1, 1, 1, 1, 2, 3, 3, 3],
            [10, 10, 10, 10, 10, 10, 2, 3, 3, 3],
            [10, 10, 10, 10, 10, 10, 4, 4, 4, 3],
            [10, 10, 10, 8, 8, 8, 6, 4, 3, 3],
            [9, 9, 9, 9, 8, 6, 6, 4, 3, 3],
            [9, 9, 9, 9, 8, 6, 6, 5, 5, 5],
            [9, 9, 7, 7, 7, 6, 6, 6, 5, 6],
            [9, 9, 9, 7, 6, 6, 6, 6, 5, 6],
            [9, 9, 9, 7, 6, 6, 6, 6, 6, 6]
        ],
    },
    {
        title: "Divided",
        description:
            <>
                <p className="mb-4">
                    Author: Jonas Gleim
                    Difficulty: 3/5
                </p>

                <p class="text-sm text-gray-400">
                    Puzzle used with permission from{" "}
                    <a href="https://www.gmpuzzles.com/blog/2021/02/star-battle-by-jonas-gleim/"
                        target="_blank"
                        rel="noopener noreferrer"
                        class="underline">
                        Grandmaster Puzzles
                    </a>.
                    This work is licensed under{" "}
                    <a href="https://creativecommons.org/licenses/by-nc-nd/3.0/"
                        target="_blank"
                        rel="noopener noreferrer"
                        class="underline">
                        CC BY-NC-ND 3.0
                    </a>.
                </p>
            </>,
        gridSize: 10,
        regions: [
            [3, 3, 3, 3, 3, 3, 1, 1, 2, 2],
            [5, 4, 4, 3, 3, 1, 1, 2, 2, 2],
            [5, 4, 4, 4, 1, 1, 2, 2, 2, 7],
            [5, 5, 4, 4, 1, 2, 2, 2, 7, 7],
            [5, 5, 6, 6, 2, 2, 2, 8, 7, 7],
            [5, 6, 6, 2, 2, 2, 8, 8, 7, 7],
            [6, 6, 2, 2, 2, 8, 8, 8, 7, 10],
            [6, 2, 2, 2, 9, 8, 8, 8, 10, 10],
            [2, 2, 2, 9, 9, 10, 10, 10, 10, 10],
            [2, 2, 9, 9, 9, 9, 9, 9, 9, 9]
        ],
    },
    {
        title: "H2O",
        description:
            <>
                <p className="mb-4">
                    Author: Şaban Erdoğan
                    Difficulty: 3/5
                </p>

                <p class="text-sm text-gray-400">
                    Puzzle used with permission from{" "}
                    <a href="https://www.gmpuzzles.com/blog/2024/08/star-battle-by-saban-erdogan/"
                        target="_blank"
                        rel="noopener noreferrer"
                        class="underline">
                        Grandmaster Puzzles
                    </a>.
                    This work is licensed under{" "}
                    <a href="https://creativecommons.org/licenses/by-nc-nd/3.0/"
                        target="_blank"
                        rel="noopener noreferrer"
                        class="underline">
                        CC BY-NC-ND 3.0
                    </a>.
                </p>
            </>,
        gridSize: 10,
        regions: [
            [10, 10, 10, 2, 2, 2, 2, 2, 2, 2],
            [1, 10, 10, 10, 2, 3, 3, 3, 3, 3],
            [1, 1, 1, 1, 1, 3, 4, 4, 4, 3],
            [9, 9, 9, 1, 1, 3, 4, 4, 4, 3],
            [9, 8, 9, 8, 1, 3, 3, 3, 3, 3],
            [9, 8, 9, 8, 1, 5, 5, 5, 5, 5],
            [9, 8, 8, 8, 1, 5, 6, 6, 6, 5],
            [9, 8, 9, 8, 1, 5, 6, 6, 6, 5],
            [9, 8, 9, 8, 7, 5, 5, 5, 5, 5],
            [9, 9, 9, 7, 7, 7, 7, 7, 7, 7]
        ],
    },
    {
        title: "Star Frame",
        description:
            <>
                <p className="mb-4">
                    Author: Thomas Snyder
                    Difficulty: 3.5/5
                </p>

                <p class="text-sm text-gray-400">
                    Puzzle used with permission from{" "}
                    <a href="https://www.gmpuzzles.com/blog/2017/05/star-battle-thomas-snyder-5-3/"
                        target="_blank"
                        rel="noopener noreferrer"
                        class="underline">
                        Grandmaster Puzzles
                    </a>.
                    This work is licensed under{" "}
                    <a href="https://creativecommons.org/licenses/by-nc-nd/3.0/"
                        target="_blank"
                        rel="noopener noreferrer"
                        class="underline">
                        CC BY-NC-ND 3.0
                    </a>.
                </p>
            </>,
        gridSize: 12,
        regions: [
            [1, 1, 1, 2, 2, 2, 2, 2, 3, 3, 3, 3],
            [1, 1, 1, 1, 2, 2, 2, 3, 3, 3, 3, 3],
            [1, 1, 1, 2, 2, 2, 2, 2, 3, 3, 3, 3],
            [1, 1, 1, 10, 11, 12, 12, 12, 12, 4, 4, 4],
            [1, 1, 1, 10, 11, 12, 12, 12, 12, 4, 4, 4],
            [9, 1, 1, 10, 11, 11, 11, 11, 12, 5, 4, 5],
            [9, 1, 1, 10, 10, 10, 10, 11, 12, 5, 5, 5],
            [9, 1, 1, 10, 10, 10, 10, 10, 12, 5, 5, 5],
            [9, 9, 9, 10, 10, 10, 10, 10, 12, 5, 5, 5],
            [8, 8, 8, 8, 8, 8, 8, 7, 7, 5, 6, 6],
            [8, 8, 8, 8, 8, 7, 8, 7, 7, 6, 6, 6],
            [8, 8, 8, 8, 7, 7, 7, 7, 7, 6, 6, 6]
        ],

    },
    {
        title: "Star Battle",
        description:
            <>
                <p className="mb-4">
                    Author: Thomas Snyder
                    Difficulty: 4/5
                </p>

                <p class="text-sm text-gray-400">
                    Puzzle used with permission from{" "}
                    <a href="https://www.gmpuzzles.com/blog/2021/12/star-battle-by-thomas-snyder-9/"
                        target="_blank"
                        rel="noopener noreferrer"
                        class="underline">
                        Grandmaster Puzzles
                    </a>.
                    This work is licensed under{" "}
                    <a href="https://creativecommons.org/licenses/by-nc-nd/3.0/"
                        target="_blank"
                        rel="noopener noreferrer"
                        class="underline">
                        CC BY-NC-ND 3.0
                    </a>.
                </p>
            </>,
        gridSize: 10,
        regions: [
            [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
            [1, 1, 1, 8, 8, 1, 1, 2, 2, 1],
            [1, 7, 7, 8, 8, 1, 2, 2, 2, 2],
            [7, 7, 8, 8, 9, 9, 2, 2, 2, 2],
            [7, 7, 8, 8, 9, 9, 3, 2, 2, 3],
            [6, 7, 7, 6, 9, 9, 3, 3, 3, 3],
            [6, 6, 6, 6, 9, 9, 4, 3, 3, 4],
            [10, 6, 6, 5, 5, 5, 4, 4, 4, 4],
            [10, 5, 5, 5, 5, 5, 5, 4, 4, 5],
            [10, 10, 10, 10, 5, 5, 5, 5, 5, 5]
        ],

    },
    {
        title: "Twisted Keys",
        description:
            <>
                <p className="mb-4">
                    Author: Thomas Snyder
                    Difficulty: 4.5/5
                </p>

                <p className="mb-4">
                    Fun fact about Thomas Snyder, he helped launch LinkedIns
                    game queens by producing some of the first puzzles.
                </p>

                <p class="text-sm text-gray-400">
                    Puzzle used with permission from{" "}
                    <a href="https://www.gmpuzzles.com/blog/2020/12/star-battle-by-thomas-snyder-8/"
                        target="_blank"
                        rel="noopener noreferrer"
                        class="underline">
                        Grandmaster Puzzles
                    </a>.
                    This work is licensed under{" "}
                    <a href="https://creativecommons.org/licenses/by-nc-nd/3.0/"
                        target="_blank"
                        rel="noopener noreferrer"
                        class="underline">
                        CC BY-NC-ND 3.0
                    </a>.
                </p>


            </>,
        gridSize: 12,
        regions: [
            [1, 2, 2, 2, 2, 2, 2, 3, 3, 3, 3, 3],
            [1, 1, 1, 1, 8, 8, 2, 2, 2, 2, 3, 3],
            [6, 1, 6, 7, 7, 8, 8, 8, 8, 2, 2, 3],
            [6, 6, 6, 7, 8, 8, 12, 9, 8, 9, 2, 3],
            [6, 11, 11, 7, 12, 12, 12, 9, 9, 9, 2, 3],
            [6, 11, 7, 7, 7, 12, 12, 12, 9, 2, 2, 3],
            [6, 11, 11, 11, 7, 12, 10, 10, 9, 2, 3, 3],
            [6, 11, 5, 10, 10, 10, 10, 9, 9, 2, 3, 4],
            [6, 6, 5, 10, 5, 5, 10, 10, 2, 2, 3, 4],
            [6, 5, 5, 5, 5, 2, 2, 2, 2, 4, 3, 4],
            [6, 6, 6, 5, 2, 2, 4, 4, 4, 4, 3, 4],
            [6, 6, 5, 5, 2, 4, 4, 4, 4, 4, 4, 4]
        ],

    },
];

function StarBattlePuzzlesPage() {
    return (
        <div className="relative z-10 p-6 space-y-12 text-center">
            <PuzzleHero />

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
                            gridSize={puzzle.gridSize || 10}
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

export default StarBattlePuzzlesPage;
