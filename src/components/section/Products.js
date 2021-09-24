import React, { Component } from 'react';
import { DataContext } from '../Context';
import { Link } from 'react-router-dom';
import '../css/Products.css';

export class Products extends Component {

    static contextType = DataContext;

    render() {

        const { products } = this.context;

        return(
            <main className="l-main">
                <section className="menu section bd-container" id="menu">
                    <span className="section-subtitle">Special</span>
                    <h2 className="section-title">Menu of the week</h2>
                        <div className="menu_container bd-grid">
                            {
                                products.map(item => (
                                    <div className="menu_content" key={item.id}>
                                        <Link to={`/product/${item.id}`}>
                                            <img src={item.imageUrl} alt="" class="menu_img" />
                                        </Link>
                                        <h3 class="menu_name">
                                            <Link to={`/product/${item.id}`}>{item.title}</Link>
                                        </h3>
                                        <span class="menu_detail">{item.desc}</span>
                                        <span class="menu_price">${item.price}</span>
                                        <Link to="/cart" class="button menu_button" onClick={() => this.context.addCart(item.id)}>
                                            <i class="bx bx-cart-alt"></i>
                                        </Link>
                                    </div>
                                ))
                            }
                        </div>
                </section> 

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
        )
    }
}

export default Products;