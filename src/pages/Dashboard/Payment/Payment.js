import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import { useLoaderData } from 'react-router-dom';
import Checkout from './CheckOut';


const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_PK);

const Payment = () => {
    const booking = useLoaderData();
    console.log(booking);
    const { name, price} = booking;

    return (
        <div>
            <h3 className="text-3xl">Payment for {name}</h3>
            <p className="text-xl">Please pay ${price}</p>
            <div className='w-96 my-12'>
                <Elements stripe={stripePromise}>
                    <Checkout
                        booking={booking}
                    />
                </Elements>
            </div>
        </div>
    );
};

export default Payment;