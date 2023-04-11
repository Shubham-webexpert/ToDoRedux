import React, { useState } from "react";
import "./Create.css";
import { AddItem} from "../../Actions/actions";
import {useDispatch} from "react-redux";
import UserList from "../UserList/UserList";

const CreateUser = () => {
  const [item, setItem] = useState({});

  const dispatch=useDispatch()
 

 const ChangeHandel=(e)=>{
  e.preventDefault();
  setItem(e.target.value)
 }
 


  return (
    <div>
      <div>
     
        <input type="text" name="name" placeholder="Add Item" onChange={ChangeHandel}/>
        <button onClick={()=>dispatch(AddItem(item),setItem(''))} >Add Item</button>
      </div>

      <UserList  item={item}/>
    </div>
  );
};

export default CreateUser;
