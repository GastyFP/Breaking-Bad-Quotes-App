import React from 'react'


const Quote = ({quote,author}) => { 
  //console.log(quote ,author)              
  return (
        <p>{quote}<br/>
        <span>-{author}</span>
        </p>
  )
}
export default Quote;