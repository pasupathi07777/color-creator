import React from 'react'


const Form_validation = ({color_name,setcolor_name,sethexcolor_name,names,setname}) => {
  return (
    <form action="" className='form' onSubmit={(e)=>e.preventDefault()}>
        <input type="text"  className='form_input' placeholder='Add Color Name' value={color_name} onChange={(e)=>{setcolor_name(e.target.value); sethexcolor_name(e.target.value)  }//
        }/>
        <button type="sumit" onClick={()=>setname(!names)}>Toggle Text Color</button>
    </form>
  )
}

export default Form_validation