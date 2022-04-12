import {Alphabet} from "./alphabet";

export class Word {
    private chars: Alphabet[];
    public wordParts: string[][];

    constructor(public readonly word: string) {
        const wordParts = word.split(" ");
        this.chars = word.toUpperCase().split("").filter(Boolean) as unknown as Alphabet[];
        this.wordParts = wordParts.map(part => part.split(""));
    }

    public contains(char: Alphabet): boolean {
        return this.chars.includes(char);
    }

    public containsAllLetters(chars: Alphabet[]): boolean {
        return this.chars.every(char => chars.includes(char));
    }
}
