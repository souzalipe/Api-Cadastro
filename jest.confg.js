export default {
    collectCoverage: true,
    coverageReporters: ["json", "html"],
    transform: {
        "^.+\.jsx?$": "babel-jest",
    },
    testMatch: ["/tests//.js?(x)", "**/?(.)+(spec|test).js?(x)"],
    moduleFileExtensions: ["js", "jsx"],
};