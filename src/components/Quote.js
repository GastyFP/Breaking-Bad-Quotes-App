import React from 'react'
import {useSelector} from 'react-redux'

const Quote = () => {
  const quote = useSelector(state=>state.quote);
  console.log('ACA TOY',quote[0].quote)
  return (
        <p> {quote[0].quote}<br/>
        <span>-{quote[0].author}</span>
        </p>
  )
}
export default Quote;