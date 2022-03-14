import React from 'react';
import Product from '../components/Product';
import Rating from '../components/Rating';
import data from '../data';
import { Link, useParams } from 'react-router-dom';

export default function ProductScreen(props){
    const params=useParams();
    const productId= data.products.find((x) => x._id );
    if(!productId){
        return <div> Product Not Found</div>;
    }
    return(
    <div>
        <Link to="/">Back to results</Link>
        <div className="row top">
            <div className="col-2">
                <img className="large" src={productId.image} alt={productId.name}></img>
            </div>
            <div className="col-1">
                <ul>
                    <li>
                        <h1>{productId.name}</h1>
                    </li>
                    <li>
                        <Rating
                            rating={productId.rating}
                            numReviews={productId.numReviews}
                        ></Rating>
                    </li>
                    <li>
                        Price: ${productId.price}
                    </li>
                    <li>
                        Description:
                        <p>{productId.description}</p>
                    </li>
                </ul>
            </div>
            <div className="col-1">
                <div className="card card-body">
                    <ul>
                        <li>
                            <div className="row">
                                <div>Price</div>
                                <div className="price">${productId.price}</div>
                            </div>
                        </li>
                        <li>
                            <div className="row">
                                <div>Status</div>
                                <div>
                                    {productId.countInStock>0?(
                                        <span className="success">In Stock</span>):(
                                        <span className="error">Unavailable</span>
                                    )}
                                </div>
                            </div>
                        </li>
                        <li>
                            <button className="primary block">Add to Cart</button>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
    );
}