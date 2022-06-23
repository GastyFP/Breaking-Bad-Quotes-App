import React, {useEffect} from "react";
import { useDispatch , useSelector } from "react-redux";
import Quote from "./components/Quote";
import {getQuotes} from './actions/index'

export default function App() {

  const dispatch = useDispatch();

  useEffect(()=>{
    dispatch(getQuotes())
  },[])

  const quote = useSelector(state=> state.quote)
  console.log(quote);

  return (
    <div className="app">
      <img src="https://upload.wikimedia.org/wikipedia/commons/7/77/Breaking_Bad_logo.svg" alt="logo"></img>
      <button onClick={()=>dispatch(getQuotes())}> Get Another</button>
         <Quote />
    </div>
  );
}



// fetch(`https://www.breakingbadapi.com/api/quote/random`)
//     .then(response =>response.json())
//     .then(json=>{
//       console.log(json[0])
//       setQuote({...quote ,text: json[0].quote, author: json[0].author})})