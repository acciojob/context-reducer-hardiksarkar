import React, { useContext, useState } from 'react'
import AuthContext from '../contexts/AuthContext'

export default function ContextReducer() {

    let {auth,setAuth} = useContext(AuthContext);
    let [shoppingInput,setShoppingInput] = useState("");
    let [myList,setMyList] = useState([]);

    function addItem(){
        if(!auth){
            return;
        }
        setMyList([...myList,shoppingInput]);
        setShoppingInput("");
    }

    function removeItem(id){
        setMyList(myList.filter(item=>item!=id));
    }

  return (
    <div>
        {auth?<h3 id='current-user'>Current user:rohan, isAuthenticated: Yes</h3>:<h3 id='signout'>Current user:, isAuthenticated: No</h3>}
      <button onClick={()=>setAuth(true)} id='login-btn'>Login</button>
      <button onClick={()=>setAuth(false)} id='signout'>Signout</button>
      <input type="text" name="shopping-input" id="shopping-input" onChange={(e)=>setShoppingInput(e.target.value)} value={shoppingInput}/>
      <button onClick={addItem}>Add</button>
      <button id='clear-list' onClick={()=>setMyList([])}>Clear List</button>
      <ul>
        {
            myList.map((item)=>{
                return <li id={"item-"+{item}} key={"item"+{item}}>{item}
                <button id={"remove"+{item}} onClick={()=>removeItem(item)} className='remove-bttn'>Remove</button></li>
            })
        }
      </ul>
    </div>
  )
}
