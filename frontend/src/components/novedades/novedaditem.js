import React from  'react'
const NovedadItem = (props) => {
    const { title, imagen, body} = props;
    
    return(
        <div className='novedades'>
            <h1>{title}</h1>
            <img src={imagen} />
            <div dangerouslySetInnerHTML={ { __html: body} }/>
        </div>
    )
}

export default NovedadItem;