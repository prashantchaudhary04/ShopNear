import  { useEffect, useState } from 'react'
import { useAppContext } from '../context/AppContext'
import ProductCart from '../componets/ProductCart'
import { dummyProducts } from '../assets/assets'

const AllProducts = () => {
    const {products,searchQuery} = useAppContext()
    const [filterProducts,setFilterProducts] = useState([])

    useEffect(()=>{
        if(searchQuery.length > 0) {
            setFilterProducts(products.filter(
                products => products.name.toLowerCase().includes(searchQuery.toLowerCase())
            ))} else{
                setFilterProducts(products)
                console.log(filterProducts)
            }
    },[products,searchQuery])

  return (
    <div className='mt-16 flex flex-col'>
        <div className='flex flex-col items-end w-max'>
            <p className='text-2xl font-medium uppercase'>All Products</p>
            <div className='w-16 h-0.5 bg-green-400 rounded-full'></div>
        </div>

        <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 md:gap-6 lg:grid-cols-5 mt-6'>
         
            {filterProducts.filter((product)=> product.inStock).map((product,index)=>(
                <ProductCart key={index} product={product}></ProductCart>
            )
            )}
        </div>

    </div>
  )
}

export default AllProducts