import { Elements } from '@stripe/react-stripe-js'
import { loadStripe } from '@stripe/stripe-js'
import React from 'react'
import CheckoutPage from './CheckoutPage'

const stripePromise = loadStripe("pk_test_51LJZGFGQGTTrpxVgAhvWCXJNSt96PBcAH1Py7u2hOTFm9r2Du0vuqsapJQdDP55S2ZHYP8TYvvY20llLsD5K0Xzs00pBooCGTf");

export default function CheckoutWrapper() {
  return (
    <Elements stripe={stripePromise}>
        <CheckoutPage /> 
    </Elements>
  )
}
