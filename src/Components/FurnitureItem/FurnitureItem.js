import React, { useState } from 'react';
import "./FurnitureItem.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock, faShieldAlt, faTruck, faExchangeAlt, faStar } from '@fortawesome/free-solid-svg-icons';

const FurnitureItem = ({ Furniture }) => {
    const { name, shortDescription, shortDescription2, price, images, fullDescription } = Furniture;
    const [selectedBigImg, setSelectedBigImg] = useState(null);



    return (
        <section className="container m-5 mt-5">

            <div className="row">
                <div className="col-md-6">
              
                    <div>
                        <img className="img-fluid my-img" src={selectedBigImg} alt="" max-width="500px" max-height="300px" />
                    </div> 

                    <div className="more-images mt-5 ">
                        {images.map((img, index) => <img onClick={() => setSelectedBigImg(images[index])} className={images[index]
                            === selectedBigImg ? "mr-4 small-img active-small-img" : "mr-4 small-img"} height="100px" width="100px" src={img} alt="" />)}
                    </div>
                </div>


                <div className="col-md-6 pr-md-4">
                    <h1>{name}</h1>
                    <h5>{shortDescription}</h5>
                    <h5>{shortDescription2}</h5>
                    <p className="my-5">{fullDescription}</p>
                    <div className="star">
                        <FontAwesomeIcon icon={faStar} />
                        <FontAwesomeIcon icon={faStar} />
                        <FontAwesomeIcon icon={faStar} />
                        <FontAwesomeIcon icon={faStar} />
                        <FontAwesomeIcon icon={faStar} />
                    </div>
                    <p> <span className="star">(5.0)</span>  review based on 250</p>
                    <p className="submit-bar">Submit Review</p>
                    <h2 className="price my-5">${price.toFixed(2)}</h2>
                    <p> <FontAwesomeIcon icon={faClock} /> Dispatched in 7 working days</p>
                    <div>
                        <button type="button" className="btn btn-lg btn-outline-light bg-dark text-light m-2">ADD TO CART</button>
                        <button type="button" className="btn btn-outline-dark btn-lg">ADD TO WISHLIST</button>
                    </div>
                </div>


            </div>

            <div className="row mt-5">
                <div className="col-md-6 col-lg-4 col-sm-6">
                    <h4> <FontAwesomeIcon icon={faShieldAlt} /> Secure payment</h4>
                    <p>Don't worry, your money is <br /> in secure places</p>
                </div>
                <div className="col-md-6 col-lg-4 col-sm-6">
                    <h4> <FontAwesomeIcon icon={faTruck} /> Fast & free delivery</h4>
                    <p>Home delivery $15. For free <br /> delivery order over $250</p>
                </div>
                <div className="col-md-6 col-lg-4 col-sm-6">
                    <h4> <FontAwesomeIcon icon={faExchangeAlt} /> Return policy</h4>
                    <p>No hassle return policy</p>
                </div>
            </div>

        </section>
    );
};

export default FurnitureItem;