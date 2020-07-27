import React from 'react'

const Item=({content,dele,edi})=> {
    return (
        <div className="collection-item">
            <h5 className="blue-text ">{content}
            <a href="#"className="secondary-content">
                <i className="material-icons" onClick={edi}>edit</i>
                <i className="material-icons" onClick={dele}>delete</i>
                </a>
                </h5>
        </div>
    )
}

export default Item
