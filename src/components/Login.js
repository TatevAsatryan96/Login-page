import React from  'react'

const Login=(props)=>{
    return(
       
        <div className='maxdiv'> 
        
            <form className='form'>
                <h1>
                  User Login
                </h1>
                <div className='form-inputs'>
                    <label className='form-label'>Username  </label>
                        <input
                        value={props.value}
                        onChange={props.onChenge} 
                        id='username'
                         type='text'
                         className='form-input'
                         name='username'
                         placeholder="Enter your username"/>
                           
                </div>
                <div className='form-inputs'>
                 <label className='form-label'>Email </label>
                        <input
                         value={props.value}
                         onChange={props.onChenge} 
                        id='email'
                         type='email'
                         className='form-input'
                         name='email'
                         placeholder="Enter your email"/>
                   
                    </div>
                    <div className='form-inputs'>
                 <label className='form-label'>Password </label>
                        <input
                         value={props.value}
                         onChange={props.onChenge} 
                        id='password'
                         type='password'
                         className='form-input'
                         name='Pasword'
                         placeholder="Enter your password"/>
                   
                    </div>
                   
                </form>
                </div>
    )
}

export default Login