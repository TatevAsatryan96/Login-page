import React from 'react';
import './button.css'
function Button(props) {
 return  <button onClick={props.onClick} className='form-inputs-btn'>{props.children}
</button> 
}

export default Button;