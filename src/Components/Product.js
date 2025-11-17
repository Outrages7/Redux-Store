import React from 'react'

const Product = ({posts}) => {
  return (
    <div>
      <div>
        <p>{posts.title}</p>
      </div>
      <div>
        <p>{posts.description}</p>
      </div>
      <div>
        <img src={post.iamge}/>
      </div>
      <div>
        <p>{posts.price}</p>

      </div>
      <button>
        {
            selected ? 
            <p>Remove Item</p> : <p>Add to Cart</p>
        }
      </button>
    </div>
  )
}

export default Product
