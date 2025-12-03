import { useState,useEffect, useRef } from "react"

export function Game(){
    const [position, setposition] = useState({x: 0, y: 0});
    const [score, setScore] = useState(0)
    const intervalik = useRef(null);

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
    const stopBall = () =>{
        if (intervalik.current){
            clearInterval(intervalik.current);
            intervalik.current = null;
        }
    };

    //nacitani koule
    useEffect(() =>{
        const interval = setInterval(() =>{
        randomcisla()
        console.log("tf")
        },1000);

        intervalik.current = interval
        return () => clearInterval(interval)
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
    <button onClick={stopBall}>Stop ball</button>
    </>)
}