import React from 'react'
import "../Styles/HotItemCard.css"


const HotItemCard = ({name,index,image,price}) => {
    return (
        <div className="HotItemCard">
          <img src={image} alt={`${index} product`} />  
          <p>{name}</p>
          <span>{price}</span>
        </div>
    )
}

export default HotItemCard
