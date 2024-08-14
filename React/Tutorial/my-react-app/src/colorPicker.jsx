import React, { useState } from "react";

function ColorPicker() {
    
    const [color, setColor] = useState('#FFFFFF')
    function handelColorChange(event){
        setColor(event.target.value)
    }
    
    return( <div className="colorPicker-Container">
        <h1>Color Picker</h1>
        <div className="volor-display" style={{backgroundColor: color}}>
            <p>Selectec Color</p>
        </div>
        <label>Color:</label> <input type="color" value={color} onChange={handelColorChange}/>

    </div>)
}

export default ColorPicker