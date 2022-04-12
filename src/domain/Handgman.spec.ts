import {Hangman, GameResult} from "./Handgman";


describe("Hangman", () => {
    describe("getLetterStatus", () => {
        const hangman = new Hangman({
            word: "TestWord",
            maxWrongDecisions: 3,
        });
        it("should be correct selected letter", () => {
            hangman.selectLetter("T");

            expect(hangman.getLetterStatus("T")).toBe("correct");
        })

        it("should be wrong selected letter", () => {
            hangman.selectLetter("P");

            expect(hangman.getLetterStatus("P")).toBe("wrong");
        })

        it("should be notSelected letter", () => {
            expect(hangman.getLetterStatus("J")).toBe("notSelected");
        })
    })

    describe("gameResult", () => {
        let hangman: Hangman;

        beforeEach(() => {
            hangman = new Hangman({
                word: "Word",
                maxWrongDecisions: 3,
            });
        })

        it("when a player choose 3 times incorrect then game result is lose", () => {
            hangman.selectLetter("G");
            hangman.selectLetter("B");
            hangman.selectLetter("C");

            const gameResult: GameResult = "lose"

            expect(hangman.gameResult).toBe(gameResult);
        })

        it("when a player selects right letters then result win", () => {
            hangman.selectLetter("W");
            hangman.selectLetter("O");
            hangman.selectLetter("R");
            hangman.selectLetter("D");

            const gameResult: GameResult = "win"

            expect(hangman.gameResult).toBe(gameResult);
        })
    })

    describe("isSelected", () => {
        let hangman: Hangman;

        beforeEach(() => {
            hangman = new Hangman({
                word: "Word",
                maxWrongDecisions: 3,
            });
        })

        it("should return isSelected true", () => {
            hangman.selectLetter("R");

            expect(hangman.isSelected("R")).toBeTruthy();
        })

        it("should return isSelected false", () => {
            expect(hangman.isSelected("K")).toBeFalsy();
        })
    })

});