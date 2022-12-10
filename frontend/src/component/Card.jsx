import React from 'react'

export default function Cards(props) {
    const {title,catogery,imgurl,description}=props
    const style={padding:"5px 20px", margin:"20px 20px", backgroundColor:"tomato",borderRadius:"10px",cursor:"pointer"}
    return (
        <div className='card'>
            <div className="cardLeft">
                <img src={imgurl} alt='background' style={{width:"100%",height:"80%",borderRadius: "50px"}}/><br />
                <button className='material-symbols-outlined d-btn' style={style}>delete</button>
                <button className='material-symbols-outlined e-btn' style={style}>edit</button>
            </div>
            <div className="cardRight">
                <h2 className="card-title">{title}</h2>
                <h4 className="catogry">Catogery:{catogery}</h4>
                <h4 className="description">{description}</h4>
            </div>
        </div>
    )
}
