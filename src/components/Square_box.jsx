import React from 'react'


const Square_box = ({color_name,hexcolor_name,names}) => {
  return (
    <div className="box" style={{backgroundColor:color_name ,color:(names===true)?'black':'white'}}>
        <div className="color">{color_name}

        </div>
        <div className="color_hex">{hexcolor_name}

        </div>

    </div>
  )
}

export default Square_box
