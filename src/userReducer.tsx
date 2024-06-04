import { createSlice } from "@reduxjs/toolkit";
import { userList } from "./Data";

const userSilce= createSlice({
        name :"users",
        initialState:userList,
        reducers:{
            addUser:(state, action)=>{
                state.push(action.payload)
            }

        }

})
export const {addUser}= userSilce.actions
export default userSilce.reducer