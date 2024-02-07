module.exports = {
    transformIgnorePatterns: ['node_modules/(?!(sucrase)/)'],
    transform: {
        '^.+\\.(js|jsx|ts|tsx|mjs)$': 'babel-jest',
    },
    reporters: [
        "default",
        "jest-html-reporters"
    ],
}