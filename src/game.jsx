import { useState } from "react"

export function Game(){
    const [position, setposition] = useState({x: 0, y: 0});

    const handleMove = (e) => {
        setposition({
            x: e.clientX,
            y: e.clientY
        })
    }
    const randomcisla = () =>{
        setposition({x: Math.floor(Math.random() * 450) + 390, 
                    y: Math.floor(Math.random() * 450) + 95})

    }

    return(<>
    <div className="board">
        <div className="points" style={{
            position: "absolute",
            left: `${position.x}px`,
            top: `${position.y}px`
        }}></div>
    </div>
    <p>Pozice x: {position.x} pozice y: {position.y}</p>
    <button onClick={randomcisla}>change position</button>
    </>)
}