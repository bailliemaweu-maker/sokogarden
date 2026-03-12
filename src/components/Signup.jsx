import React, {useState} from 'react' 
import { use } from 'react'
import { Link } from 'react-router-dom'

const Signup = () => {
    // declare our state here 

    const[username , setUsername]= useState ("")
    const[email , setEmail]= useState("")
    const[password , setPassword]= useState("")
    const[phone , setPhone] = useState("")
  return (
    <div className="row mt-2n justify-content-center">
        <div className='col-md-6 card shadow'>
            <h1>Signup</h1>

            {/* bind the states  */}
            <h2>the current username is : {username} </h2>
            <h2>the current email is : {email} </h2>
            <h2>the current password is : {password} </h2>
            <h2>the current phone is : {phone} </h2>
            

            <form action="">
                <input type="text" placeholder='Enter username' className='form-control' onChange={(e)=>setUsername(e.target.value)}/>
                <br />
                <input type="email" placeholder='Enter E-mail' className='form-control' onChange={(e)=>setEmail(e.target.value)} />
                <br />
                <input type="password" placeholder='Enter password' className='form-control' onChange={(e)=>setPassword(e.target.value)} />
                <br />
                <input type="tel" placeholder='Enter phone'className='form-control' onChange={(e)=>setPhone(e.target.value )} />
                <br />
                <button className='btn btn-secondary w-100 form-control'>Signup</button>
                <br />
                <p>Already have an account?    <Link to="/signin">Signin</Link>     </p>
            </form>
        </div>

    </div>
  )
}

export default Signup