import React from "react";

const Foter = ({length})=>{
    
    return(
        <footer>
            <p>{length} list {length <=1 ? "item":"items"}</p>
        </footer>
    )
}
export default Foter;