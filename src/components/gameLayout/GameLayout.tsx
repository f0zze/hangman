import styles from "./game-layout.module.css";
import {useGame} from "../../useGame";

type GameLayoutProps = {
    children: JSX.Element;
    showMenuBtn?: boolean;
}

export function GameLayout(props: GameLayoutProps) {
    const { children, showMenuBtn = true } = props;

    const game = useGame();

    return (
        <div className={styles.gameLayout}>
            <div className={styles.menu}>
                {showMenuBtn && <span className={styles.link} onClick={() => game.goTo("menu")}>Back to menu</span>}
            </div>
            { children }
        </div>
    )
}