import styles from "./game-layout.module.css";

type GameLayoutProps = {
    children: JSX.Element;
    showMenuBtn?: boolean;
};

export function GameLayout(props: GameLayoutProps) {
    const { children, showMenuBtn = true } = props;

    return (
        <div className={styles.gameLayout}>
            <div className={styles.menu}>
                {showMenuBtn && (
                    <span className={styles.link}>
                        Back to menu
                    </span>
                )}
            </div>
            {children}
        </div>
    );
}
