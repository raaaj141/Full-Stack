import React, { useEffect, useState } from 'react'
import './List.css'
import axios from 'axios'
import { toast } from 'react-toastify'
const List = () => {

    const [list,setList]=useState([]);
    const url="http://localhost:4000"

    const fetchList = async () =>{
    const response = await axios.get(`${url}/api/food/list`);
   
    if(response.data.success)
      {
        setList(response.data.data);
      } 
      else{
        toast.error("Error")
      }
    }
    
    const removeFood=async(foodId)=>{
      const responce=await axios.post(`${url}/api/food/remove`,{id:foodId});
      await fetchList();
      if(responce.data.success)
      {
        toast.success(responce.data.message)
      }
      else
      toast.error(responce.data.message)
    }

  useEffect(()=>{
    fetchList()
  },[])

  return (
    <div className='list add flex-col'>
      <b className='head'>All Food List</b>
      <div className="list-table">
        <div className="list-table-format title">
          <b>Product</b>
          <b>Name</b>
          <b>Category</b>
          <b>Price</b>
          <b>Action</b>
        </div>
        {list.map((item,index)=>{
          return(
            <div key={index} className='list-table-format'> 
            <img src={`${url}/images/`+item.image} alt="" />
            <p>{item.name}</p>
            <p>{item.category}</p>
            <p>₹ {item.price}</p>
            <p onClick={()=>removeFood(item._id)} className='cursor'>X</p>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default List
