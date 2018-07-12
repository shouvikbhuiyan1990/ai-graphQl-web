import React from 'react'

export default ({
    buttons,
    activebtn,
    onButtonClick
})=> (
    <div className="btn-group-parent">
        {
            buttons && (
                buttons.map((value,index)=>{
                    return (
                    <button className="btn" key={index} onClick={()=>onButtonClick(index)}>{(activebtn === index) && <i></i>}{value}</button>
                    )
                })
            )
        }
    </div>
)