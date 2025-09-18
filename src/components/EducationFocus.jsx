import React from 'react'

const educationFocus = [
    {
        id: 1,
        title: 'Artificial Intelligence',
        description: 'Explored algorithms for search, optimization, and decision-making, along with practical projects in AI systems and intelligent agents.',
    },
    {
        id: 2,
        title: 'Machine Learning',
        description: 'Worked with supervised and unsupervised models, deep learning, and model evaluation techniques using Python, scikit-learn, and Keras.',
    },
    {
        id: 3,
        title: 'Statistics',
        description: 'Studied probability, regression, and hypothesis testing as the foundation for analyzing and interpreting complex data.',
    },
    {
        id: 4,
        title: 'Data Science',
        description: 'Applied statistical and computational methods for extracting insights from data, focusing on real-world datasets and predictive modeling.',
    },
    {
        id: 5,
        title: 'Computational Mathematics',
        description: 'Applied numerical methods and simulations to scientific and engineering problems, bridging theory with real-world applications.',
    },
    {
        id: 6,
        title: 'Software Engineering',
        description: 'Gained practical experience with software design, development, and testing in C++, Python, and full-stack environments.',
    }
]

function EducationFocus() {
    return (
        <div className='text-white py-20' id='service'>
            <div className='container mx-auto px-8 md:px-16 lg:px-24'>
                <h2 className='text-4xl font-bold text-center mb-12'>Education Highlights</h2>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
                    {educationFocus.map(focus => (
                        <div
                            key={focus.id}
                            className='bg-gray-800 px-6 pb-6 rounded-lg hover:shadow-lg transform transition-transform duration-300 hover:scale-105'>
                            <h3 className='mt-2 text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500'>
                                {focus.title}
                            </h3>
                            <p className='mt-2 text-gray-300'>{focus.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default EducationFocus