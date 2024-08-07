function Btn(){
    const handelclick = () => {
        console.log("kya bhay")
    }

    return(
        <div>
            <button onClick={handelclick}>Click</button>
        </div>
        // <div>
        //     <select>
        //     <option value="1">1</option>
        //     <option value="2">2</option>
        //     <option value="3">3</option>    
        // </select>
        // </div>
    )
}

export default Btn