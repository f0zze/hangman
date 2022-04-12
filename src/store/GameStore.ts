import { makeAutoObservable, when } from "mobx";
import { Hangman } from "../domain/Handgman";

import { fetchWord } from "../service";

export type GameView = "menu" | "game" | "history" | "preferences" | "result";

export class GameStore {
    private _currentView: GameView = "menu";
    private _hangman: Hangman | undefined = undefined;

    public constructor() {
        makeAutoObservable(this);
    }

    public goTo(view: GameView) {
        this._currentView = view;
    }

    public start() {
        fetchWord().then((word) => {
            const hangman = new Hangman({
                word,
                maxWrongDecisions: 7,
            });
            this._hangman = hangman;

            when(
                () => hangman.gameState === "finished",
                () => {
                    setTimeout(
                        () => {
                            this.goTo("result");
                            setTimeout(() => {
                                this.goTo("menu");
                            }, 2000);
                        },
                        hangman.gameResult === "lose" ? 3000 : 1000
                    );
                }
            );
            this.goTo("game");
        });
    }

    public get hangman() {
        if (!this._hangman) {
            throw new Error("before accesing hangman it should be started");
        }

        return this._hangman;
    }

    public get isRunning() {
        return this._hangman && this._hangman.gameState === "started";
    }

    public get currentView(): GameView {
        return this._currentView;
    }
}

export function createGameStore() {
    return new GameStore();
}
