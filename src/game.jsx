import { useState,useEffect, useRef } from "react"

export function Game(){
    const [position, setposition] = useState({x: 0, y: 0});
    const [score, setScore] = useState(0)
    const [isRunning, setIsRunning] = useState(false)
    const intervalRef = useRef(null)

    const addscore = () =>{
        setScore(s => s + 1)
    }

    const handleMove = (e) => {
        setposition({
            x: e.clientX,
            y: e.clientY
        })
    }

    //random funkce na x a y
    const randomcisla = () =>{
        setposition({x: Math.floor(Math.random() * 901) + 400, 
                    y: Math.floor(Math.random() * 450) + 100})

    }

    const gameRun = () =>{
        if (isRunning){
            clearInterval(intervalRef.current);
            intervalRef.current = null
            setIsRunning(false)
        }else{
            intervalRef.current = setInterval(() =>{
                randomcisla();
            }, 1000);
            setIsRunning(true)
        }
    }

    //nacitani koule
    useEffect(() =>{
        return () => clearInterval(intervalRef.current);
    }, [])
    

    return(<>
    <div className="board">
        <div  onClick={addscore} className="points" style={{
            position: "absolute",
            left: `${position.x}px`,
            top: `${position.y}px`
        }}></div>
    </div>
    <p>Pozice x: {position.x} pozice y: {position.y}</p>
    <p>score: {score}</p>
    <button onClick={randomcisla}>change position</button>
    <button onClick={gameRun}>{isRunning ? "Stop Game" : "Run Game"}</button>
    </>)
}