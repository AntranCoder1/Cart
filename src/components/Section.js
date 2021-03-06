import React, { Component } from 'react';
import { Route } from 'react-router-dom';

import Products from './section/Products';
import Details  from './section/Details';
import Cart from './section/Cart';
import Nav from './Nav';

export class Section extends Component {
    render() {
        return (
            <section>
                <Route path="/product" component={Products} exact />
                <Route path="/product/:id" component={Details} />
                <Route path="/cart" component={Cart} />
            </section>
        )
    }
}

export default Section;