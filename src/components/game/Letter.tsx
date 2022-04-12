import { Alphabet } from "../../domain/alphabet";
import { useGame } from "../../useGame";
import { observer } from "mobx-react-lite";

import styles from "./letter.module.css";

type LetterProps = {
    letter: Alphabet;
};

export const Letter = observer((props: LetterProps) => {
    const { letter } = props;

    const { hangman } = useGame();

    return (
        <div className={styles.letter} onClick={() => hangman.selectLetter(letter)}>
            {hangman.isSelected(letter) ? "" : letter}
        </div>
    );
});
