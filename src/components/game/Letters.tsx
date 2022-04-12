import { useGame } from "../../useGame";
import { Letter } from "./Letter";

import styles from "./letters.module.css";

export function Letters() {
    const { hangman } = useGame();

    return (
        <div className={styles.letters}>
            {hangman.alphabet.map((letter, index) => {
                return <Letter key={letter + index} letter={letter} />;
            })}
        </div>
    );
}
