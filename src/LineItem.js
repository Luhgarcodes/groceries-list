import React from 'react'
import deletebtn from './deletebtn.png'


const LineItem =({item,handleCheck,handleDelete})=>{
    return(
            <li className='item' key={item.id}>
            <input
                type="checkbox"
                onChange={()=>handleCheck(item.id)}
                checked={item.checked}
            />
            <label
                style={(item.checked)?{textDecoration:"line-through"}:null}
                onDoubleClick={()=>handleCheck(item.id)}
            >{item.item}</label>
            <button
                onClick={()=>handleDelete(item.id)}
            ><img src={deletebtn} className='deletelogo' alt='logo'/></button>
            </li>
        );
}
export default LineItem;