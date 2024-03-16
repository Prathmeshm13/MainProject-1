import React from "react";
import { createContext, useContext } from "react";

export const Detcontext=createContext(
    {
        username:"guest"
    }
)
export const Detprovider=Detcontext.Provider;

export default function usedetail(){
    return useContext(Detcontext);
}
