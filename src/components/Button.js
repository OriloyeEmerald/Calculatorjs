
import React from 'react';

 const Button = ({symbol, color, handleClick, size}) => {
   return (
     <div>
       <button style={{backgroundColor: color, backgroundSize: size}} onClick={() => handleClick(symbol)}>{symbol}</button>
       
     </div>
   );
 }

 export default Button;
