import React, {useRef, useEffect} from "react";
import {Letters} from "./Letters";
import {Word} from "./Word";
import {createCanvasGame} from "../../canvas/hangman";
import { createCanvasIntegration } from "./canvasItegration";
import {useGame} from "../../useGame";

import {GameLayout} from "../gameLayout/GameLayout";
import {GameResult} from "../gameResult/GameResult";

export function Game() {
    const canvas = useRef<HTMLCanvasElement | null>(null)
    const game = useGame();

    useEffect(() => {
        if (canvas.current) {
            canvas.current.width = 500;
            canvas.current.height = 500;
            const {hangmanCanvas, dispose} = createCanvasGame(canvas.current);

            const integrationDisposer = createCanvasIntegration(game, hangmanCanvas);

            return () => {
                dispose();
                integrationDisposer();
            };
        }
    }, [])

    return (
        <GameLayout>
            <>
                <canvas height={500} ref={canvas}/>
                <Word/>
                <Letters/>
                <GameResult />
            </>
        </GameLayout>
    )
}