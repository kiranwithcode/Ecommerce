import React, { useContext } from 'react';
import { Button, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { Store } from '../Store';
import Rating from './Rating';

const Product = ({ product }) => {

  const {state, dispatch:ctxDispatch} = useContext(Store)
  const addToCartHandler = () =>{
      ctxDispatch({type:'CART_ADD_ITEM', payload: {...product, quantity:1}})
  }
  return (
    <Card className='set-res'>
      <Link to={`product/${product.slug}`}>
        <img src={product.image} className="card-img-top" alt="" />
      </Link>
      <Card.Body>
        <Link to={`product/${product.slug}`}>
          <Card.Title>{product.name}</Card.Title>
        </Link>
        <Rating rating={product.rating} numReviews={product.numReviews} />
        <Card.Text>${product.price}</Card.Text>
        <Button onClick={addToCartHandler}>Add to cart</Button>
      </Card.Body>
      
    </Card>
  );
};

export default Product;
