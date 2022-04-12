import {observer} from "mobx-react-lite";
import classNames from "classnames";

import {useGame} from "../../useGame";
import {Alphabet} from "../../domain/alphabet";

import styles from "./word.module.css";

type WordLetterProps = {
    letter: Alphabet;
}

const WordLetter = observer((props: WordLetterProps) => {
    const {letter} = props;
    const {hangman} = useGame();

    const status = hangman.getLetterStatus(letter);
    const display = status === "correct" || hangman.gameState === "finished";


    const letterClassName = classNames({
        [styles.correct]: status === "correct",
        [styles.wrong]: status === "notSelected",
    })
    return (
        <span className={styles.wordLetter}>
            {display ? <span className={letterClassName}>{letter}</span> : " _ "}
        </span>
    )
});

export const Word = observer((props) => {
    const {hangman} = useGame();

    function renderWord(part: string[]) {
        return <span> &nbsp; &nbsp; {part.map(l => <WordLetter letter={l as Alphabet}/>)} </span>
    }

    return (
        <div className={styles.word}> {hangman.wordToGuess.wordParts.map((part => {
            return renderWord(part);
        }))} </div>
    )
});