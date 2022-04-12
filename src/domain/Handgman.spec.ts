import { Hangman, GameResult } from "./Handgman";

describe("Hangman", () => {
    describe("getLetterStatus", () => {
        const hangman = new Hangman({
            word: "TestWord",
        });
        it("should return correct status when word contains selected letter", () => {
            hangman.selectLetter("T");

            expect(hangman.getLetterStatus("T")).toBe("correct");
        });

        it("should return wrong when selected word not contains letter  ", () => {
            hangman.selectLetter("P");

            expect(hangman.getLetterStatus("P")).toBe("wrong");
        });

        it("should return notSelected by default", () => {
            expect(hangman.getLetterStatus("J")).toBe("notSelected");
        });
    });

    describe("gameResult", () => {
        let hangman: Hangman;

        beforeEach(() => {
            hangman = new Hangman({
                word: "Word",
                maxWrongDecisions: 3,
            });
        });

        it("should return game result lose when 3 wrong letters selected", () => {
            hangman.selectLetter("G");
            hangman.selectLetter("B");
            hangman.selectLetter("C");

            const gameResult: GameResult = "lose";

            expect(hangman.gameResult).toBe(gameResult);
        });

        it("should return game result win when selected all correct letters", () => {
            hangman.selectLetter("W");
            hangman.selectLetter("O");
            hangman.selectLetter("R");
            hangman.selectLetter("D");

            const gameResult: GameResult = "win";

            expect(hangman.gameResult).toBe(gameResult);
        });
    });

    describe("isSelected", () => {
        let hangman: Hangman;

        beforeEach(() => {
            hangman = new Hangman({
                word: "Word",
                maxWrongDecisions: 3,
            });
        });

        it("should return true when letter is selected", () => {
            hangman.selectLetter("R");

            expect(hangman.isSelected("R")).toBeTruthy();
        });

        it("should return false when letter is not selected", () => {
            expect(hangman.isSelected("K")).toBeFalsy();
        });
    });

    describe("gameState", () => {
        let hangman: Hangman;

        beforeEach(() => {
            hangman = new Hangman({
                word: "Word",
            });
        });

        it("should return started when game instance created", () => {
            expect(hangman.gameState).toBe("started");
        });
    });
});
