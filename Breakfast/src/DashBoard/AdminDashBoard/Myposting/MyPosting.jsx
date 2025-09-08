import React, { useEffect, useState } from 'react'
import{ doc, getDoc } from "firebase/firestore"
import { db } from '../../../FirebaseCode/FirebaseCode'

const MyPosting = () => {
  const[Recipe,SetRecipe]=useState([])
   const AdminLocalData=JSON.parse( localStorage.getItem("Admin"))
  useEffect(()=>{
    const fetchingData=async()=>{
      try{
const getdocref= await doc(db,"Admin",AdminLocalData.user.displayName)
 const docsnap= await getDoc(getdocref)
if(docsnap.exists()){
const data= docsnap.data()
console.log(data.Recipes)
SetRecipe(data.Recipes)
}

      }catch(err){
        console.log(err)
      }

    }

fetchingData()
  },[])
  return (
    <div>
 {Recipe.map((recipe)=>{
return(
  
<div className="max-w-sm rounded-2xl overflow-hidden shadow-lg bg-white p-4 m-4" >
  <img src={recipe.Image} alt={recipe.title} className="w-full h-48 object-cover rounded-xl" />
  <div className="mt-4">
    <h1 className="text-xl font-bold mb-2">{recipe.title}</h1>
    <h6 className="text-gray-600 mb-2">{recipe.Description}</h6>
    <div className="flex justify-between items-center mt-4">
      <h5 className="text-lg font-semibold text-green-600">${recipe.Price}</h5>
      <h5 className="text-sm text-yellow-500">⭐ {recipe.Rating}</h5>
    </div>
  </div>
</div>

)
 })}
    </div>
  )
}

export default MyPosting
