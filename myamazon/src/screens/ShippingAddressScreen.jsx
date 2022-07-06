import React, { useContext, useEffect, useState } from 'react';
import {
  Button,
  Form,
  FormControl,
  FormGroup,
  FormLabel,
} from 'react-bootstrap';
import { Helmet } from 'react-helmet-async';
import { useNavigate } from 'react-router-dom';
import CheckOutSteps from '../components/CheckOutSteps';
import { Store } from '../Store';

const ShippingAddressScreen = () => {
  const navigate = useNavigate();
  const { state, dispatch: ctxDispatch } = useContext(Store);
  const {
    userInfo,
    cart: { shippingAddress },
  } = state;
  const [fullName, setFullName] = useState(shippingAddress.fullName || '');
  const [address, setAddress] = useState(shippingAddress.address || '');
  const [city, setCity] = useState(shippingAddress.city || '');
  const [postalCode, setPostalCode] = useState(shippingAddress.postalCode || '');
  const [country, setCountry] = useState(shippingAddress.country || '');
  useEffect(()=>{
    if(!userInfo){
        navigate('/signin?redirect=/shipping')
    }
  },[userInfo, navigate])

  const submitHandler = (e) => {
    e.preventDefault();
    ctxDispatch({
      type: 'SAVE_SHIPPING_ADDRESS',
      payload: {
        fullName,
        address,
        city,
        postalCode,
        country,
      },
    });
    localStorage.setItem(
      'shippingAddress',
      JSON.stringify({
        fullName,
        address,
        city,
        postalCode,
        country,
      })
    );
    navigate('/payment');
  };
  return (
    <div>
      <Helmet>
        <title>Shipping Address</title>
      </Helmet>
      <CheckOutSteps step1 step2></CheckOutSteps>
      <div className="container container-small">
        <h1 className="my-3">Shipping Address</h1>
        <Form onSubmit={submitHandler}>
          <FormGroup className="mb-3" controlId="fullName">
            <FormLabel>Full Name</FormLabel>
            <FormControl
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              required
            />
          </FormGroup>
          <FormGroup className="mb-3" controlId="address">
            <FormLabel>Address</FormLabel>
            <FormControl
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              required
            />
          </FormGroup>
          <FormGroup className="mb-3" controlId="city">
            <FormLabel>City</FormLabel>
            <FormControl
              value={city}
              onChange={(e) => setCity(e.target.value)}
              required
            />
          </FormGroup>
          <FormGroup className="mb-3" controlId="postalCode">
            <FormLabel>PostalCode</FormLabel>
            <FormControl
              value={postalCode}
              onChange={(e) => setPostalCode(e.target.value)}
              required
            />
          </FormGroup>
          <FormGroup className="mb-3" controlId="country">
            <FormLabel>Country</FormLabel>
            <FormControl
              value={country}
              onChange={(e) => setCountry(e.target.value)}
              required
            />
          </FormGroup>
          <div className="mb-3">
            <Button variant="primary" type="submit">
              Continue
            </Button>
          </div>
        </Form>
      </div>
    </div>
  );
};

export default ShippingAddressScreen;
