import React, { Component } from 'react';
import formatCurrency from '../util';
export class Products extends Component {
    render() {
        return (
            <div>
                <ul className="products">
                   {this.props.products.map( product => (
                       <li key={product._id} className="product">
                           
                               <a href={"#" + product._id}>
                                   <img src={product.image} alt={product.title}></img>
                                      {product.description}
                               </a>
                               <div className="product-price">
                                  {formatCurrency(product.price)}
                                   <button>
                                       Add to Cart
                                   </button>
                               </div>
                       </li>
                   )

                   )}
                </ul>
            </div>
        )
    }
}

export default Products
