import axios from 'axios'
import React, { useState } from 'react'
import { useLocation } from 'react-router-dom'

const Makepayment = () => {
    const {singleproduct} = useLocation().state ||{}
    const imagepath ="http://b4illi3kifaru.alwaysdata.net/static/images/"

    // declare the states 
    const [phone,setPhone] = useState("")

    // define the 3 states 
    const[loading,setLoading] = useState("")
    const[success,setSuccess] = useState("")
    const[error, setError] = useState("")

    
    const handlesubmit = async (e)=>{
      e.preventDefault()
     setLoading("Please wait...")

    //  Create an  empty envelope  
    const formdata = new FormData()
    formdata.append("amount",singleproduct.product_cost)
    formdata.append("phone", phone)
    

    try {
        const response = await axios.post("http://b4illi3kifaru.alwaysdata.net/api/mpesa_payment",formdata)
        
        setSuccess(response.data.message)
        setLoading("")
    } catch (error) {
        setError(error.message)
        setLoading("")
        
    }
}

  return (
    <div className="row justify-content-center">
        <h1 className='bg-success w-100 text-white'>Make payment-Lipa na Mpesa</h1>
        <div className='col-md-8 card shadow p-4 bg-secondary'>
            {/* image goees here  */}
            <img src={imagepath + singleproduct.product_photo} alt="" style={{height : "300px", objectFit: "contain"}}/>
            

            <h5 className='text-primary text-start'>{singleproduct.product_name}</h5>
            <p className='text-start '>{singleproduct.product_description}</p>
            <b className='text-start text-danger'>Ksh {singleproduct.product_cost}</b>

            {/* bind the states   */}
            <h2 className='text-secondary'>{loading} </h2>
            <h2 className='text-success'>{success} </h2>
            <h2 className='text-danger'>{error} </h2>



            <form action="" onSubmit={handlesubmit}>
                <input type="number" className='form-control' placeholder='Enter phone 254XXXXXXXXX' onChange={(e)=>setPhone(e.target.value)}/>
                <br />
                <button type='submit' className='btn btn-success w-100'>Make payment</button>
            </form>
        </div>
    </div>
  )
}

export default Makepayment 