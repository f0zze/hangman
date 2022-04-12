import classNames from "classnames";
import { observer } from "mobx-react-lite";

import { useGame } from "../../useGame";
import styles from "./game-result.module.css";

export const GameResult = observer(() => {
    const game = useGame();
    const { hangman } = game;

    const isLose = hangman.gameResult === "lose";
    const isWin = hangman.gameResult === "win";
    const isGameFinished = game.currentView === "result";

    return (
        <div
            className={classNames(styles.gameResult, {
                [styles.win]: isWin,
                [styles.lose]: isLose,
                [styles.show]: isGameFinished,
            })}
        >
            <div className={styles.result}>
                <div className={styles.resultText}>{isLose ? "Game Over" : "You Won"}</div>
            </div>
        </div>
    );
});
