import { Word } from "./Word";

describe("Word", () => {
    describe("contains", () => {
        it("should return true when word contains letter ", () => {
            const word = new Word("Test");

            expect(word.contains("T")).toBeTruthy();
            expect(word.contains("E")).toBeTruthy();
        });

        it("should return false when word not conntains letter", () => {
            const word = new Word("Hangman");

            expect(word.contains("O")).toBeFalsy();
        })

    });

    describe("containsAllLetters", () => {
        it("should return true when word contains all letters", () => {
            const word = new Word("Hangman");

            expect(word.containsAllLetters(["H", "A", "N", "G", "M", "A", "N"])).toBeTruthy();
        });

        it("should return false when word not contains all letters", () => {
            const word = new Word("Hangman");

            expect(word.containsAllLetters(["H", "A", "N", "G", "M", "A"])).toBeTruthy();

        });
    });

    describe("wordParts", () => {
        it("should return word parts", () => {
            const word = new Word("Hang Man");

            expect(word.wordParts).toEqual([["H", "a", "n", "g"], ["M", "a", "n"]])
        })
    })
});
