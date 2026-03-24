import axios from 'axios'
import React, {useState} from 'react'
import { Link } from 'react-router-dom'


const Signin = () => { 

    // Declare ourstates here 
    const[email, setEmail] =useState("")
    const[password, setPassword] =useState("")

    // define three states for posting data 
    const[loading, setLoading] =useState ("")
    const[success, setSuccess] = useState("")
    const[error,setError] =useState("")

    // function to handle submit 
    const handlesubmit = async (e) =>{
     e.preventDefault()
     setLoading("Please wait...")

    //  Create an  empty envelope  
    const formdata = new FormData()
    formdata.append("email",email)
    formdata.append("password", password)

    try {
        const response = await axios.post("http://higgs.alwaysdata.net/api/signin",formdata)
        setSuccess(response.data.message)
        setLoading("")
    } catch (error) {
        
    }
    }

    return (
        <div className="row mt-2  justify-content-center">
            <div className='col-md-6 card shadow'>
                <h1>Signin</h1>

                {/* bind the states   */}
                <h2 className='text-warning'>{loading} </h2>
                <h2 className='text-success'>{success} </h2>
                <h2 className='text-danger'>{error} </h2>



                <form action="" onSubmit={handlesubmit} className='bg-white' >
                    <input type="text" placeholder='Enter Email' className='form-control bg-secondary' onChange={(e)=> setEmail(e.target.value)} />
                    <br />
                    <input type="password" placeholder='Enter Password'className='form-control bg-secondary' onChange={(e) => setPassword(e.target.value)} />
                    <br />
                    <button className='btn btn-info form-control w-100 bg-success'>Signin</button>
                    <br />
                    <p>Don't have an account?   <Link to="/signup">Signup</Link>   </p>
                </form>

            </div>
    </div>
    )
}

export default Signin