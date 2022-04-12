import React from "react";
import { GameContext } from "./useGame";
import { createGameStore } from "./store/GameStore";
import { HangmanGame } from "./HangmanGame";

const store = createGameStore();

function App() {
    return (
        <GameContext.Provider value={store}>
            <HangmanGame />
        </GameContext.Provider>
    );
}

export default App;
