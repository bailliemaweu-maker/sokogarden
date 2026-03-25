import axios from 'axios'
import Carousel from './Carousel'
import React,{useState,useEffect} from 'react'
import { useNavigate} from 'react-router-dom'


const Getproducts = () => {
let navigate = useNavigate();
  // declare our states here 
  const[loading,setLoading]= useState("")
  const[products,setProducts] =useState([])
  const[error,setError]=useState("")

  // Function to Getproduct 
  const getproducts = async ()=>{
       setLoading("Please wait...")
       try {
        const response = await axios.get("http://b4illi3kifaru.alwaysdata.net/api/getproducts")
        setProducts(response.data)
        setLoading("")
       } catch (error) {
        setError(error.message)
      setLoading("")
       }
  }
  // call the Function 
  useEffect(()=>{
    getproducts()
  },[])
    console.log(products)
    const imagepath ="http://b4illi3kifaru.alwaysdata.net/static/images/"
  return (
    <div className="container fluid">
      <div className="row">
        {/* Carousel goes here   */}
        <Carousel/>





        <h1 className='text-black bg-white'>Available products</h1>
        {/* bind the states  */}
        <h2 className='text-warning text-center'>{loading} </h2>
        <h2 className='text-danger text-center'>{error} </h2>
        {products.map(singleproduct=>(
           <div className="col-md-3 p-6 mb-3">
            <div className='card shadow h-100'>

            <img src={imagepath + singleproduct.product_photo} alt="" style={{height:"200px"}}/>

            {/* card body goes here  */}
            <div className="card-body">
              {/* product name goes here  */}
              <h2>{singleproduct.product_name} </h2>

              {/* product description goes here   */}
              <p>{singleproduct.product_description} </p>

              {/* product cost goes here  */}
              <b className='text-success'>{singleproduct.product_cost} </b>
              <br />

              {/* purchase button goes here  */}
            {/* image goes here  */}
              <button className='btn btn-warning form-control' onClick={()=> navigate("/makepayment",{state:{singleproduct}})}>Purchase Now</button>

             </div>
          </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Getproducts