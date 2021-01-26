import GlobalStyle from "../styles/GlobalStyle";
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';

export default function MyApp({ Component, pageProps }: any) {
    const stripePromise = loadStripe('pk_live_51HCbBYA8wNRuG06I0sB1O9UTsrS4OpgasP5zkceONv2rOn0J5SfqzZ87yn7E3OFcR5NBIQBI0d8RZjFSssFJeOZq00QetWxjLI');

    return <>
        <Elements stripe={stripePromise}>
            <GlobalStyle />
            <Component {...pageProps} />
        </Elements>
    </>
}