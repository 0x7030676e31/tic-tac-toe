import { useEffect, useState } from "react";
import { io } from "socket.io-client";
import Loading from "./Loading";
import App from "../App/App";

function Logic() {
    const [gameFound, setGameFound] = useState<[boolean, string]>([false, ""]);
    
    useEffect(() => {
        const socket = io("/")
        socket.on("game-found", player => setGameFound([true, player]))
    }, [])
    
    return gameFound[0] ? <App player={gameFound[1]}/> : <Loading/>;
}

export default Logic;