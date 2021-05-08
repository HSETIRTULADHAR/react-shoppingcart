//feature 1
import React from 'react';
import './App.css';
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
  render(){
  return (
    <div className="container">
      <header>
           <a href="/">React shopping cart</a>
      </header>
      <main>
        <div className="content">
           <div className="main">
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
