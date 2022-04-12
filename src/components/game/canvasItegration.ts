import {reaction} from "mobx";
import {GameStore} from "../../store/GameStore";
import {HangmanCanvas} from "../../canvas/hangman";

export function createCanvasIntegration(game: GameStore, hangman: HangmanCanvas) {
    const wrongLetterDisposer = reaction(() => game.hangman.wrongLetterCount, (count) => {
        hangman.drawElement(count);
    }, { fireImmediately: true });

    return () => {
        wrongLetterDisposer();
    }
}