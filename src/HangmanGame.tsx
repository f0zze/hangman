import {GameView} from "./store/GameStore";
import {GameMenu} from "./components/gameMenu/GameMenu";
import {Game} from "./components/game/Game";
import {observer} from "mobx-react-lite";
import {useGame} from "./useGame";
import React from "react";
import {GameHistory} from "./components/gameHistory/GameHistory";
import {GamePreferences} from "./components/gamePreferences/GamePreferences";

function getCurrentView(view: GameView) {
    switch (view) {
        case "menu":
            return <GameMenu/>
        case "game":
            return <Game />
        case "result":
            return <Game />
        case "history":
            return <GameHistory />
        case "preferences":
            return <GamePreferences />
    }
}

export const HangmanGame = observer(() => {
    const { currentView } = useGame();

    return (
        <div>
            {getCurrentView(currentView)}
        </div>
    )
});