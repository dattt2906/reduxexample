import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { json } from "stream/consumers";


function Home(){

        const users= useSelector((state:any)=>state.users)
        console.log("users:", users)
       
        const [image, setImage]= useState([])
        const [category, setCategory]= useState('')
        console.log("image:", image)
        function handleImage(){
            let formData= new FormData()
            formData.append("category",category )
            Array.from(image).forEach(item => {
                formData.append('products', item)
            })
            

        }
        return(

            <>
                <div className="container">
                    <h2>CRUD App with JSON Server</h2>
                    <Link to="/create" className="btn btn-success my-3"> Create +</Link>
                    <table className="table">

                        <thead>

                            <tr>
                                <th>Id</th>
                                <th>Name</th>
                                <th>Email</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            { users.map((user:any , index:any)=>(
                                <tr key={index}>
                                    <td>{user.id}</td>
                                    <td>{user.name}</td>
                                    <td>{user.email}</td>
                                    <td>
                                        <Link to={`/edit/${user.id}`} className="btn btn-sm btn-primary">Edit</Link>
                                        <button className="btn btn-sm btn-danger ms-2">Delete</button>
                                    </td>
                                </tr>



                            ))}


                        </tbody>
                    </table>


                    <div className="upload">
                        <input multiple type="file" name="file" onChange={(e:any)=> setImage(e.target.files)}></input>
                        <button onClick={handleImage}>submit</button>


                    </div>
                   
                {
                    Array.from(image).map(item=>{
                        return (
                            <span>
                                <img 
                                style={{padding:"10px"}}
                                width={150} height={100}
                                src={item? URL.createObjectURL(item):undefined}/>

                            </span>
                        )


                    })
                }


                </div>
            </>
        )


}
export default Home