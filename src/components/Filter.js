import React, { Component } from 'react'

export class Filter extends Component {
    render() {
        return (
            <div class="filter-component">
                <div>{this.props.count} Products</div>
                <div className="order">
                    Order:
                <select value={this.props.sort} onChange={this.props.sortProducts}>
                    <option value="latest">Latest</option>
                    <option value="lowest">Lowest</option>
                    <option value="highest">Highest</option>
                </select>
                </div>
                <div>
                    Size:
                    <select value={this.props.size} onChange={this.props.filterProducts}>
                        <option value="">ALL</option>
                        <option value="XL">XL</option>
                        <option value="L">L</option>
                        <option value="M">M</option>
                        <option value="S">S</option>
                        <option value="XS">XS</option>
                    </select>
                </div>
                
            </div>
        )
    }
}

export default Filter
