import React from 'react'
import { assets, categories } from '../assets/assets'
import { useAppContext } from '../context/AppContext'

const Categories = () => {
    const { navigate } = useAppContext()
    return (
        <div className='mt-16'>
            <p className='text-2xl md:text-3xl font-medium'>Shop By Category</p>
            <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 lg:grid-cols-6 xl:grid-cols-7 mt-6 gap-6'>

                {categories.map((category, index) => {
                    return (
                        <div key={index} className='grop cursor-pointer py-2 px-3 gap-2 rounded-lg flex flex-col justify-center items-center' style={{ backgroundColor: category.bgColor }} onClick={() => {
                            console.log("clicked")
                            navigate(`/products/${category.path.toLowerCase()}`)

                        }}>
                            <img src={category.image} className='group-hover:scale-10 transition max-w-28 rounded' alt="" />
                            <p>{category.text}</p>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default Categories