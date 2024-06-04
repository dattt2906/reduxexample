import React, { useState } from "react";
import { addUser } from "./userReducer";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

function Create(){
        const [name, setName]= useState("")
        const [email,setEmail]= useState("")
        const users= useSelector((state:any)=>state.users)

        const dispatch= useDispatch();
        const nav= useNavigate()
        const handleSubmit=(event:any)=>{

            event.preventDefault();
            dispatch(addUser({id:users[users.length-1].id + 1, name:name, email:email}))
            nav("/")
        }
    return(


        <>
         <div className="d-flex w-100 vh-100 justify-content-center align-items-center">
            <div className="w-50 border bg-secondary text-white p-5">

                    <h3>Add New User</h3>

                <form>

                    <div>
                        <label htmlFor="text">Name:</label>
                        <input type="text" name="name" className="form-control" placeholder="enter name" onChange={(e)=> setName(e.target.value)}></input>
                    </div>
                    <div>
                        <label htmlFor="email">Email:</label>
                        <input type="email" name="email" className="form-control" placeholder="enter email" onChange={(e)=>setEmail(e.target.value)}></input>
                    </div>
                    <br/>
                    <button className="btn btn-info" onClick={handleSubmit}>Submit</button>
                </form>
            </div>
            
            
            </div>   
        </>
    )
}
export default Create