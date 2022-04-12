import {makeAutoObservable} from "mobx";

import {alphabet, Alphabet} from "./alphabet";
import {Word} from "./Word";

export type GameResult = "none" | "win" | "lose";
export type GameState = "idle" | "started" | "finished";
export type LetterStatus = "correct" | "wrong" | "notSelected";

type HangmanConfig = {
    maxWrongDecisions?: number;
    word: string;
}

export class Hangman {

    public readonly alphabet = alphabet;
    public readonly wordToGuess: Word;
    private readonly selectedLetters: Map<Alphabet, LetterStatus> = new Map();
    private readonly maxWrongDecisions: number;

    public constructor(config: HangmanConfig) {
        makeAutoObservable(this);

        const {maxWrongDecisions = 7, word} = config;

        this.wordToGuess = new Word(word);
        this.maxWrongDecisions = maxWrongDecisions;
    }

    public selectLetter(letter: Alphabet) {
        const letterStatus = this.toLetterStatus(letter);
        if (letterStatus) {
            this.selectedLetters.set(letter, letterStatus);
        }
    }

    public isSelected(letter: Alphabet): boolean {
        return !!this.selectedLetters.get(letter);
    }

    public get gameResult(): GameResult {
        if (this.wrongLetterCount >= this.maxWrongDecisions) {
            return "lose";
        }

        if (this.wordToGuess.containsAllLetters([...this.selectedLetters.keys()])) {
            return "win";
        }

        return "none";
    }

    public getLetterStatus(letter: string): LetterStatus {
        return this.selectedLetters.get(letter.toUpperCase() as Alphabet) ?? "notSelected";
    }

    public get gameState(): GameState {
        if (this.gameResult !== "none") {
            return "finished";
        }
        return this.wordToGuess !== undefined ? "started" : "idle";
    }

    public get wrongLetterCount(): number {
        const count = this.getStatusCount("wrong")

        return Math.min(count, this.maxWrongDecisions);
    }

    private getStatusCount(statusToCount: LetterStatus): number {
        let count = 0;
        this.selectedLetters.forEach((status) => {
            if (status === statusToCount) {
                count++;
            }
        })
        return count;
    }

    private toLetterStatus(letter: Alphabet): LetterStatus {
        return this.wordToGuess.contains(letter) ? "correct" : "wrong";
    }
}


