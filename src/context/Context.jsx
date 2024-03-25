import { createContext } from "react";
import runChat from "../config/gemini";


export const Context=createContext();
const ContextProvider=(props)=>{

    const onSent=async(prompt)=>{
      await  runChat(prompt)
    }
        onSent("What is react?")
    const Contextvalue={


    }
    return(
        <Context.Provider value={Contextvalue}>
            {props.children}

        </Context.Provider>


    )
}
export default ContextProvider