import { createContext, useState} from "react";


export const UserContext=createContext({
    successAuth:false,
    setSuccessAuth:()=>{},
})

export const UserProvider=({children})=>{
    //the user is successfully login/signup
    const [successAuth, setSuccessAuth]=useState(false)


    
    const value={successAuth, setSuccessAuth}
    return <UserContext.Provider value={value}>{children}</UserContext.Provider>
}