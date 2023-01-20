// import deletebtn from './deletebtn.png';
import {useRef} from 'react';
import React from "react";
import addbtn from './addbtn.png'

const AddItem = ({newItem,setNewItem,handleSubmit})=>{
    const inputref = useRef();
    return (
        <form className="addForm" onSubmit = {handleSubmit}>
            <label htmlFor="addItem"></label>
            <input
                autoFocus
                ref = {inputref}
                id='addItem'
                type="text"
                placeholder=" add items"
                required
                value = {newItem}
                onChange = {(e)=>setNewItem(e.target.value)}
            />
            <button type="submit"
                aria-label="Additem"
      			onClick={()=>inputref.current.focus()}
            >
                <img src={addbtn} className='deletelogo' alt='logo'/>
            </button>
		</form>
    )
}
export default AddItem;