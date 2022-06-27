import React, {useEffect} from "react";
import { useDispatch , useSelector } from "react-redux";
import Quote from "./components/Quote";
import {getQuotes} from './actions/index'

export default function App() {
  const dispatch = useDispatch();

  
  useEffect(()=>{ 
    dispatch(getQuotes())
  },[]);

  const quote = useSelector(state=> state.quote)
  
  return (
    <div className="app">
      <img src="https://upload.wikimedia.org/wikipedia/commons/7/77/Breaking_Bad_logo.svg" alt="logo"></img>
      <button onClick={()=>dispatch(getQuotes())}> Get Another</button>
        {quote[0] ? 
         <Quote quote={quote[0].quote} author={quote[0].author} />
        :<span>cargando...</span>}
    </div>
  );
}
