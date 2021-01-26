import styled from "styled-components";
import { useState } from 'react';

// import Image from 'next/image';
// import Link from 'next/link';
import { loadStripe } from '@stripe/stripe-js';

import { ProductInterface, PaginatedProductsInterface } from '@/interfaces'
import Layout from '@/components/Layout'
import PriceComponent from '@/components/Ui/Price';
import ButtonComponent, { BackButtonComponent } from '@/components/Ui/Button';
import { radius, breakpoints } from "@/styles/utils";
import { GetStaticProps, GetStaticPaths } from "next";

const ImageContainer = styled.div`
  width: 100%;
  box-shadow: 0 1px 10px rgba(0, 0, 0, 0.2);
  border-radius: ${radius.large};
  margin-right: 40px;
  align-self: center;
`;

const ProductContainer = styled.div`
  margin: 24px auto;
  padding: 16px;
  max-width: 800px;
  div {
    justify-content: center;
    text-align: center;
  }
  @media (min-width: ${breakpoints.desktop}px) {
    display: flex;
  }
`;

type Props = {
  item?: ProductInterface
}
const StaticPropsDetail = ({ item }: Props) => {
  const [value, setValue] = useState(5);

  const registerOrder = async (checkoutId: string) => {
    const productId = item?.id
    const props = {
      product: [Number(productId)],
      amount: Number(value),
      stripe_checkout_key: checkoutId
    }
    const res = await fetch('https://cartao-presente.herokuapp.com/order/', {
      method: "POST",
      body: JSON.stringify(props),
      headers: {
        "Content-Type": "application/json"
      },
    });
    return res
  }

  const createCheckout = async () => {
    const response = await fetch(`https://cartao-presente.herokuapp.com/create-checkout-session/`, {
      method: "post",
      body: JSON.stringify({
        product_slug: item?.slug,
        amount: value * 100,
        domain_url: window.location.origin,
      }),
      headers: {
        "Content-Type": "application/json"
      },
    });
    const checkoutData = await response.json()
    console.log('checkoutData:', checkoutData)
    const registerRes = await registerOrder(checkoutData?.id)
    console.log('registerRes',await registerRes.json())
    const stripePromise = await loadStripe('pk_live_51HCbBYA8wNRuG06I0sB1O9UTsrS4OpgasP5zkceONv2rOn0J5SfqzZ87yn7E3OFcR5NBIQBI0d8RZjFSssFJeOZq00QetWxjLI');
    const redirected = await stripePromise?.redirectToCheckout({
      sessionId: checkoutData.id,
    });
    if (redirected?.error) {
      alert(redirected?.error)
    }
  };

  return (
    <Layout
      title={`${
        item ? item.name : 'ProductInterface Detail'
        } | Presente Cartão`}
    >
      <BackButtonComponent />
      <ProductContainer>
        <ImageContainer>
          <img
            src={item?.images[0].original}
            alt={item?.slug}
            // layout="responsive"
            width={"100%"}
            height={"auto"}
          />
        </ImageContainer>
        <div>
          <h1>{item?.name}</h1>
          <h5>Últimas unidades da promoção.</h5>
          <div style={{ display: "flex", flexDirection: "row", alignItems: 'center', margin: 12 }}>
            <ButtonComponent onClick={() => value > 5 && setValue(value - 5)} outlined>-</ButtonComponent>
            <PriceComponent style={{ marginLeft: 24, marginRight: 24 }} value={value} />
            <ButtonComponent onClick={() => setValue(value + 5)} outlined>+</ButtonComponent>
          </div>
          <div>
            <ButtonComponent outlined={value !== 5} onClick={() => setValue(5)} style={{ margin: 8 }}>R$ 5,00</ButtonComponent>
            <ButtonComponent outlined={value !== 25} onClick={() => setValue(25)} style={{ margin: 8 }}>R$ 25,00</ButtonComponent>
            <ButtonComponent outlined={value !== 50} onClick={() => setValue(50)} style={{ margin: 8 }}>R$ 50,00</ButtonComponent>
            <ButtonComponent outlined={value !== 100} onClick={() => setValue(100)} style={{ margin: 8 }}>R$ 100,00</ButtonComponent>
            <ButtonComponent outlined={value !== 250} onClick={() => setValue(250)} style={{ margin: 8 }}>R$ 250,00</ButtonComponent>
            <ButtonComponent outlined={value !== 500} onClick={() => setValue(500)} style={{ margin: 8 }}>R$ 500,00</ButtonComponent>
          </div>
          {/* <Link href={{
            pathname: `/checkout`,
            query: { value, productId: item?.id }
          }}>
          </Link> */}
          <div style={{ display: "flex", justifyContent: "center", marginTop: 16 }}>
            <ButtonComponent
              onClick={createCheckout}
              fullWidth
              size="lg"
            >Comprar</ButtonComponent>
          </div>
        </div>
      </ProductContainer>
    </Layout>
  )
}

export default StaticPropsDetail

export const getStaticProps: GetStaticProps<Props, { slug: string }> = async context => {
  const params = context.params;
  const response = await fetch(`https://cartao-presente.herokuapp.com/product/${params?.slug}/`);
  const item = await response.json()
  return {
    props: {
      item
    },
    revalidate: 1, 
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const response = await fetch(`https://cartao-presente.herokuapp.com/product/`);
  const item: PaginatedProductsInterface = await response.json();
  const paths = item.results.map(({ slug }) => ({ params: { slug: String(slug) } }))

  return ({
    paths,
    fallback: true,
  });
}