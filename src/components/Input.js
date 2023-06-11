

import React from 'react'

 const Input = ({text, result}) => {
  return (
    <div className='Input'>
        <div >
            <h1 className='result'>{result}</h1>
        </div>
        <div >
            <h1 className='text'>{text}</h1>
        </div>
    </div>
  )
}

export default Input;