import React from 'react'
import Header from '../components/Header'
import AddCategoryDialog from '../components/CategoryDialogue'
import AddSubcategoryDialog from '../components/SubCategoryDialogue'

const mehboob = () => {
  return (
    <div>
        <Header/>
        <div className='grid grid-cols-1 w-[70%]  mt-10 ml-10'>
        <h1 className='font-bold text-4xl text-black font-coffee mb-10'>Admin- Kaam24x7.com</h1>

        <AddCategoryDialog/>
        
        <AddSubcategoryDialog/>

        </div>
    </div>
  )
}

export default mehboob