import React, { Component } from 'react';
import { DataContext } from '../Context';
import { Link } from 'react-router-dom';
import '../css/Details.css';

export class Detail extends Component {

    static contextType = DataContext;

    state = {
        product: []
    }

    getProduct = () => {
        if (this.props.match.params.id) {
            const res = this.context.products;
            const data = res.filter(item => {
                return item.id === this.props.match.params.id;
            })
            this.setState({
                product: data
            })
        }
    }

    componentDidMount() {
        this.getProduct();
    }

    render() {

        const  { product } = this.state;
        const { addCart } = this.context;

        return (
            <>
                {
                    product.map(item => (
                        <div className="details" key={item.id}>
                            <img src={item.imageUrl} alt="" />
                            <div className="box">
                                <div className="row">
                                    <h2>{item.title}</h2>
                                    <span>${item.price}</span>
                                </div>
                                <p>{item.desc}</p>
                                <Link to="/cart" className="cart" onClick={() => addCart(item.id)}>
                                    Add To Card
                                </Link>
                            </div>
                        </div>
                    ))
                }

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

                                        <Link href="#" className="footer_social">
                                            <i className="bx bxl-twitter"></i>
                                        </Link>
                                    </div>
                                </div>

                                <div className="footer_content">
                                    <h3 className="footer_title">Services</h3>
                                    <ul>
                                        <li>
                                            <Link href="#" className="footer_link">Delivery</Link>
                                        </li>

                                        <li>
                                            <Link href="#" className="footer_link">Pricing</Link>
                                        </li>

                                        <li>
                                            <Link href="#" className="footer_link">Fast Food</Link>
                                        </li>

                                        <li>
                                            <Link href="#" className="footer_link">Reserve your spot</Link>
                                        </li>
                                    </ul>
                                </div>

                                <div className="footer_content">
                                    <h3 className="footer_title">Information</h3>
                                    <ul>
                                        <li>
                                            <Link href="#" className="footer_link">Event</Link>
                                        </li>

                                        <li>
                                            <Link href="#" className="footer_link">Contact us</Link>
                                        </li>

                                        <li>
                                            <Link href="#" className="footer_link">Privacy policy</Link>
                                        </li>

                                        <li>
                                            <Link href="#" className="footer_link">Terms of services</Link>
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

                            <p className="footer_copy">&#169; 2021 Allgrowlabo Inc. All right reserved.</p>
                        </section>
                    </main>
            </>
        )
    }
}

export default Detail;