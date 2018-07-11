import React from 'react'

export default ({
    buttons,
    onButtonClick
})=> (
    <div className="btn-group-parent">
        {
            buttons && (
                buttons.map((value,index)=>{
                    return (
                        <button className="btn" key={index} onClick={()=>onButtonClick(index)}>{value}</button>
                    )
                })
            )
        }
    </div>
)