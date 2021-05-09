//feature 1
import React from 'react';
import './App.css';
import Filter from './components/Filter';
import Products from './components/Products';
import data from './data.json';

class App extends React.Component {


  constructor(){
    super();
    this.state ={
      products: data.products,
      size: "",
      sort: "",
    };
  }
  sortProducts = (event) => {
    // impl
    const sort = event.target.value;
    console.log(event.target.value);
    this.setState((state) => ({
      sort: sort,
      products: this.state.products
        .slice()
        .sort((a, b) =>
          sort === "lowest"
            ? a.price > b.price
              ? 1
              : -1
            : sort === "highest"
            ? a.price < b.price
              ? 1
              : -1
            : a._id < b._id
            ? 1
            : -1
        ),
    }));
  };
 
 filterProducts = e => {
       console.log(e.target.value);
       if (e.target.value === '')
   {
        this.setState( { size: e.target.value, product: data.products});
   } else {
       this.setState( {
           size: e.target.value,
           products: data.products.filter( 
             (product) => product.availableSizes.indexOf(e.target.value)>=0),

       });
 }
}
  render(){
  return (
    <div className="container">
      <header>
           <a href="/">React shopping cart</a>
      </header>
      <main>
        <div className="content">
           <div className="main">
             <Filter count={this.state.products.length}
              size={this.state.size}
              sort={this.state.sort}
              filterProducts={this.filterProducts}
              sortProducts={this.sortProducts}
             ></Filter>
             <Products products={this.state.products}></Products>
           </div>
           <div className="sidebar">Carts</div>
        </div>
        
      </main>
      <footer>
              All rights reserved @ 2021.
      </footer>

    </div>
  );
  }
}

export default App;
