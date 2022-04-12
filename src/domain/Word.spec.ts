import {Word} from "./Word";

describe("Word", () => {
    describe("contains",  () => {
        it("should return true if letter within the word", () => {
            const word = new Word("Test");

            expect(word.contains("T")).toBeTruthy()
            expect(word.contains("E")).toBeTruthy()
        });

        it("should return false if letter not exists within the word", () => {
            const word = new Word("Test");

            expect(word.contains("W")).toBeFalsy()
            expect(word.contains("Y")).toBeFalsy()
        });

    });

    describe("containsAllLetters",  () => {
        it("should return true if all letters within the word", () => {
            const word = new Word("Test");

            expect(word.containsAllLetters(["T", "E", "S", "T"])).toBeTruthy()
        });

        it("should return false if one of the letter not exists within the word", () => {
            const word = new Word("Test");

            expect(word.containsAllLetters(["T", "S", "T"])).toBeFalsy()

        });

    });
});