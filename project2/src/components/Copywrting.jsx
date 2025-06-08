import { useState } from "react";
import "../CSS/copy.css"
function Copywrting(){
    const [content, setcontent] = useState("");
    function handlechange(event){
        setcontent(event.target.value)
    }
    return (
        <div className="maincopy">
            <div className="copyhead">Wellcome to the copy wrting</div>
            <div className="inputtext">
                <input type="text" onChange={handlechange} />
                <h1>{content}</h1>
            </div>
        </div>
    )
}
export default Copywrting;