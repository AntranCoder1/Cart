import React, { Component } from 'react';
import { DataContext } from '../Context';

export class Detail extends Component {

    static contextType = DataContext;

    state = {
        products: []
    }

    getProduct = () => {
        
    }

    render() {
        return (
            <div>
                Details
            </div>
        )
    }
}

export default Detail;