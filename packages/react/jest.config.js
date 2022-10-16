module.exports = {
    testEnvironment: "jsdom",
    roots: ["<rootDir>/src"],
    transform: {
        "^.+\\.tsx?$": "ts-jest"
    },
    setupFilesAfterEnv: [
        // "@testing-library/react/cleanup-after-each", todo throws error
        "@testing-library/jest-dom/extend-expect"
    ],
    testRegex: "(/__tests__/.*|(\\.|/)(test|spec))\\.tsx?$",
    moduleFileExtensions: ["ts", "tsx", "js", "jsx", "json", "node"],
    moduleNameMapper: {
        "\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$": "<rootDir>/__mocks__/fileMock.js",
        "\\.(css|scss)$": "identity-obj-proxy"
    }
};
