import React, { Component } from 'react';
import image1 from './images/1.jpg'
import image2 from './images/2.jpg'
import image3 from './images/3.jpg'
import image4 from './images/4.jpg'
import image5 from './images/5.jpg'
import image6 from './images/6.jpg'
import image7 from './images/7.jpg'
import image8 from './images/8.jpg'
import image9 from './images/9.jpg'
import image10 from './images/10.jpg'

export const DataContext = React.createContext();

export class DataProvider extends Component {

    state = {
        products: [
            {
                "id": "16f579fd-c24c-4a9e-b7df-ef90dd12024f",
                "title": "buttermilk pancakes",
                "imageUrl": `${image1}`,
                "price": 15.99,
                "desc": "I'm baby woke mlkshk wolf bitters live-edge blue bottle, hanmock freegan copper mug whatever cold-pressed.",
                "count": 1
            },
            {
                "id": "455239ce-d32e-4c6a-b9f6-2b525bbae361",
                "title": "diner double",
                "imageUrl": `${image2}`,
                "price": 13.99,
                "desc": "vaporware iphone mumblescore selvage raw denim slow-carb leggings gochujang helvetica man braid jiangbing. Marfa thundercats.",
                "count": 1
            },
            {
                "id": "cc80dd98-8e86-4c6a-9760-e493b21b74f8",
                "title": "godzilla milkshake",
                "imageUrl": `${image3}`,
                "price": 6.99,
                "desc": "ombucha chillwave fanny pack 3 wolf moon street art photo booth before they sold out organic viral.",
                "count": 1
            },
            {
                "id": "6db943bf-c6af-4e3e-854e-ca012d375242",
                "title": "country delight",
                "imageUrl": `${image4}`,
                "price": 20.99,
                "desc": "Shabby chic keffiyeh neutra snackwave pork belly shoreditch. Prism austin mlkshk truffault.",
                "count": 1
            },
            {
                "id": "77cf2540-d2bd-4ecf-bc57-f7671cdd856b",
                "title": "egg attack",
                "imageUrl": `${image5}`,
                "price": 22.99,
                "desc": "franzen vegan pabst bicycle rights kickstarter pinterest meditation farm-to-table 90's pop-up.",
                "count": 1
            },
            {
                "id": "0cc057c6-fe7b-4d37-a0e6-acd15b4d007f",
                "title": "oreo dream",
                "imageUrl": `${image6}`,
                "price": 18.99,
                "desc": "Portland chicharrones ethical edison bulb, palo santo craft beer chia heirloom iPhone everyday.",
                "count": 1
            },
            {
                "id": "7698ea69-d290-4843-910d-cd76aafa2d2e",
                "title": "bacon overflow",
                "imageUrl": `${image7}`,
                "price": 8.99,
                "desc": "carry jianbing normcore freegan. Viral single coffee live-edge, pork belly cloud bread iceland put a bird.",
                "count": 1 
            },
            {
                "id": "37fb788e-9076-4e1e-ba67-ae6431fe0b75",
                "title": "american classic",
                "imageUrl": `${image8}`,
                "price": 12.99,
                "desc": "on it tumblr kickstartech thundercast migas everyday squid palo santo leggings. Food truck truffault.",
                "count": 1
            },
            {
                "id": "69779df9-1390-4c84-9abb-40df3805823b",
                "title": "quarantine buddy",
                "imageUrl": `${image9}`,
                "price": 16.99,
                "desc": "skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.",
                "count": 1
            },
            {
                "id": "fcbc20b4-69ed-4944-b504-7be35c36b2b8",
                "title": "steak dinner",
                "imageUrl": `${image10}`,
                "price": 39.99,
                "desc": "skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.",
                "count": 1
            }
        ],
        cart: [],
        total: 0
    }

    addCart = (id) => {
        const { products, cart } = this.state;
        const check = cart.every(item => {
            return item.id !== id; 
        });
        if (check) {
            const data = products.filter(item => {
                return item.id === id;
            })
            this.setState({
                cart: [...cart, ...data]
            })
        } else {
            alert("The product has been added to cart.");
        }
    }

    decrease = id => {
        const { cart } = this.state;
        cart.forEach(item => {
            if (item.id === id) {
                item.count === 1 ? item.count = 1 : item.count -= 1;
            }
        })
        this.setState({
            cart: cart
        })
        this.getTotal();
    }

    increase = id => {
        const { cart } = this.state;
        cart.forEach(item => {
            if (item.id === id) {
                item.count += 1;
            }
        })
        this.setState({
            cart: cart
        })
        this.getTotal();
    }

    removeProduct = id => {
        if (window.confirm("Do you want to delete this products?")) {
            const { cart } = this.state;
            cart.forEach((item, index) => {
                if (item.id === id) {
                    cart.splice(index, 1);
                }
            })
            this.setState({
                cart: cart
            })
            this.getTotal();
        }
    }

    getTotal = () => {
        const { cart } = this.state;
        const res = cart.reduce((acc, val) => {
            return acc + (val.price * val.count)
        }, 0);
        this.setState({
            total: res
        })
    }

    render() {

        const  { products, cart, total } = this.state;
        const { addCart, decrease, increase, removeProduct, getTotal } = this;

        return(
            <DataContext.Provider value={{products, cart, addCart, decrease, increase, removeProduct, getTotal, total}}>
                {this.props.children}
            </DataContext.Provider>
        )
    }
}

export default DataProvider;