import { words } from "./words";

function getRandomInt(min: number, max: number): number {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

export function fetchWord(): Promise<string> {
    return new Promise<string>((resolve) => {
        setTimeout(() => {
            resolve(words[getRandomInt(0, words.length - 1)]);
        }, 0);
    });
}
