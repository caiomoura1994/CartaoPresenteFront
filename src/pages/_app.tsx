import GlobalStyle from "../styles/GlobalStyle";
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';

export default function MyApp({ Component, pageProps }: any) {
    const stripePromise = loadStripe('pk_test_51HCbBYA8wNRuG06I8HpP1j6tHmgAnz4U7im24KHMluzgitv4nqDOicJBp4Jf1hyYNUE1UPuF1UkbLD46KEa3i2z600vyVKUiw8');

    return <>
        <Elements stripe={stripePromise}>
            <GlobalStyle />
            <Component {...pageProps} />
        </Elements>
    </>
}