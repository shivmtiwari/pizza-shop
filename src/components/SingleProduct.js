
import { useEffect, useState } from 'react';
import {useParams, useNavigate}  from 'react-router-dom'




const SingleProduct = () => {
    const [product, setProduct] = useState([]);
    const params = useParams();
    const navigate = useNavigate();


    useEffect(()=>{
        fetch(`https://ecom-rest-apis.herokuapp.com/api/products/${params._id}`)
        .then(res=>res.json())
        .then(product=>{
            setProduct(product);
            console.log(product);
        })
    },[params._id]);



    return (
        <>
            <div className="container mx-auto my-20">
                <button className='mb-10' onClick={() => navigate(-1)}> <i className="fa-solid fa-arrow-left-long mr-2"></i>Back</button>
                <div className="flex singleprod">
                    <img src={product.image} alt="" />
                    <div className='ml-10 detail' >
                      
                            <h3 className='mr-30'>{product.name}</h3>
                            <p className=''>{product.size}</p>
                        
                        <div className=" flex items-center justify-between">
                            <p className='mr-8'>₹{product.price}</p>
                            <button className='btn'>
                                ADD TO CART
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default SingleProduct
