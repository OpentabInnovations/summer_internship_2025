import "../CSS/numbergame.css"
import { useState } from "react";
function NumberGame() {
    const [thenumber , setthenumber] = useState(1);
    function increment() {

        setthenumber(thenumber+1)
    }
    function  decrement(){
        setthenumber(thenumber -1);
    }
    function rest(){
        setthenumber(0)
    }



    return(
        <div className="maingame">
            <div className="heading">Wellcome to the Numer Game</div>
            <div className="game">
                <div className="numbercount">{thenumber}</div>
                <div className="controls">
                    <button onClick={increment}>+</button>
                    <button onClick={rest}>reset</button>
                    <button onClick={decrement}>-</button>
                </div>
            </div>
        </div>
    )
}
export default NumberGame;