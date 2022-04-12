import { useGame } from "../../useGame";
import { GameLayout } from "../gameLayout/GameLayout";
import { Button } from "../Button/Button";

import styles from "./game-menu.module.css";

export function GameMenu() {
    const game = useGame();

    return (
        <GameLayout showMenuBtn={false}>
            <div className={styles.gameMenu}>
                {game.isRunning ? (
                    <div className={styles.menuItem}>
                        <Button className={styles.menuBtn} onClick={() => game.goTo("game")}>
                            Resume
                        </Button>
                    </div>
                ) : (
                    <div className={styles.menuItem}>
                        <Button className={styles.menuBtn} onClick={() => game.start()}>
                            New Game
                        </Button>
                    </div>
                )}
                <div className={styles.menuItem}>
                    <Button className={styles.menuBtn} onClick={() => game.goTo("history")}>
                        History
                    </Button>
                </div>
                <div className={styles.menuItem}>
                    <Button className={styles.menuBtn} onClick={() => game.goTo("preferences")}>
                        Preferences
                    </Button>
                </div>
            </div>
        </GameLayout>
    );
}
