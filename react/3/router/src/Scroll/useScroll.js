import { useLayoutEffect } from "react";
import { useLocation } from "react-router-dom";
import {reset} from './withScroll'

export default function useScroll(){
    const location = useLocation()
    useLayoutEffect (()=>{
        reset()
    },[location])
}