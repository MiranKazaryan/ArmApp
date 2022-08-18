import { createContext, useState,useEffect } from "react";

const AstContext = createContext();
//{arr:[],setArr:(a)=>{arr.push(a)}}

export const AstContextProvider = ({children}) =>{
    const [arr,setArr] = useState([]);
    return(
        <AstContext.Provider value={{arr,setArr}}>{children}</AstContext.Provider>
    )
}

export default AstContext