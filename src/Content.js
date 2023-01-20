import ItemList from './ItemList';
import React from "react";

const Content =({items,handleCheck,handleDelete})=>{
    return (
        
        <div>
            {items.length
				?(<ItemList
                    items = {items}
                    handleCheck = {handleCheck}
                    handleDelete = {handleDelete}/>)
				:(<p style={{margin:"2em"}}>Your List is empty</p>)}
        </div>
    )
}
export default Content;