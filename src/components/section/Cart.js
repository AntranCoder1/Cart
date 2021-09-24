import React, { Component } from 'react';
import { DataContext } from '../Context';
import { Link } from 'react-router-dom';
import '../css/Cart.css';

export class Cart extends Component {

    static contextType = DataContext;

    componentDidMount() {
        this.context.getTotal();
    }

    render() {

        const { cart, decrease, increase, removeProduct, total } = this.context;

        if (cart.length === 0) {
            return <h2 style={{textAlign: 'center'}}>Nothings Product</h2>
        } else {
            return (
                <>
                    {
                        cart.map(item => (
                            <div className="details" key={item._id}>
                                <img src={item.imageUrl} alt="" />
                                <div className="box">
                                    <div className="row">
                                        <h2>{item.title}</h2>
                                        <span>${item.price * item.count}</span>
                                    </div>
                                    <p>{item.desc}</p>
                                    <div className="amount">
                                        <button className="count" onClick={() => decrease(item.id)}>-</button>
                                        <span>{item.count}</span>
                                        <button className="count" onClick={() => increase(item.id)}>+</button>
                                    </div>
                                </div>
                                <div className="delete" onClick={() => removeProduct(item.id)}>x</div>
                            </div>
                        ))
                    }
                    <div className="total">
                        <Link to="/payment">Payment</Link>
                        <h3>Total: ${total}</h3>
                    </div>

                    <main className="l-main">
                        <section className="footer section bd-container">
                            <div className="footer_container bd-grid">
                                <div className="footer_content">
                                    <Link to="/" className="footer_logo">Tasty Food</Link>
                                    <span className="footer_description">Restaurant</span>

                                    <div>
                                        <Link to="#" className="footer_social">
                                            <i className="bx bxl-facebook"></i>
                                        </Link>

                                        <Link to="#" className="footer_social">
                                            <i className="bx bxl-instagram"></i>
                                        </Link>

                                        <Link to="#" className="footer_social">
                                            <i className="bx bxl-twitter"></i>
                                        </Link>
                                    </div>
                                </div>

                                <div className="footer_content">
                                    <h3 className="footer_title">Services</h3>
                                    <ul>
                                        <li>
                                            <Link to="#" className="footer_link">Delivery</Link>
                                        </li>

                                        <li>
                                            <Link to="#" className="footer_link">Pricing</Link>
                                        </li>

                                        <li>
                                            <Link to="#" className="footer_link">Fast Food</Link>
                                        </li>

                                        <li>
                                            <Link to="#" className="footer_link">Reserve your spot</Link>
                                        </li>
                                    </ul>
                                </div>

                                <div className="footer_content">
                                    <h3 className="footer_title">Information</h3>
                                    <ul>
                                        <li>
                                            <Link to="#" className="footer_link">Event</Link>
                                        </li>

                                        <li>
                                            <Link to="#" className="footer_link">Contact us</Link>
                                        </li>

                                        <li>
                                            <Link to="#" className="footer_link">Privacy policy</Link>
                                        </li>

                                        <li>
                                            <Link to="#" className="footer_link">Terms of services</Link>
                                        </li>
                                    </ul>
                                </div>

                                <div className="footer_content">
                                    <h3 className="footer_title">Address</h3>
                                    <ul>
                                        <li>HCM - VietNam</li>
                                        <li>Trần Thành An</li>
                                        <li>0982016278</li>
                                        <li>anfood@gmail.com</li>
                                    </ul>
                                </div>
                            </div>

                            <p className="footer_copy">&#169; 2021 TRAN THANH AN. All right reserved.</p>
                        </section>
                    </main>
           
                </>
            )
        }
    }
}

export default Cart;