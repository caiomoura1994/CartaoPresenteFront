import styled from "styled-components";
import { useState } from 'react';

import Image from 'next/image';
import Link from 'next/link';

import { ProductInterface } from '@/interfaces'
import Layout from '@/components/Layout'
import PriceComponent from '@/components/Ui/Price';
import ButtonComponent, { BackButtonComponent } from '@/components/Ui/Button';
import { radius, breakpoints } from "@/styles/utils";

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

  return (
    <Layout
      title={`${
        item ? item.name : 'ProductInterface Detail'
        } | Next.js + TypeScript Example`}
    >
      <BackButtonComponent />
      <ProductContainer>
        <ImageContainer>
          <Image
            src="/assets/uber.png"
            alt="logo"
            layout="responsive"
            width={"100%"}
            height={"auto"}
          />
        </ImageContainer>
        <div>
          <h1>Nome do produto</h1>
          <h5>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor error, in, exercitationem eaque illo unde modi earum, deserunt sequi eius atque quibusdam porro nam dolores aperiam voluptates qui sed eum.</h5>
          <div style={{ display: "flex", flexDirection: "row", alignItems: 'center', margin: 12 }}>
            <ButtonComponent onClick={() => value > 5 && setValue(value - 5)} outlined>-</ButtonComponent>
            <PriceComponent style={{ marginLeft: 24, marginRight: 24 }} value={value} />
            <ButtonComponent onClick={() => setValue(value + 5)} outlined>+</ButtonComponent>
          </div>
          <div>
            <ButtonComponent outlined={value !== 5} onClick={() => setValue(5)} style={{ margin: 8 }}>R$ 5,00</ButtonComponent>
            <ButtonComponent outlined={value !== 25} onClick={() => setValue(25)} style={{ margin: 8 }}>R$ 25,00</ButtonComponent>
            <ButtonComponent outlined={value !== 50} onClick={() => setValue(50)} style={{ margin: 8 }}>R$ 50,00</ButtonComponent>
          </div>
          <div>
            <ButtonComponent outlined={value !== 100} onClick={() => setValue(100)} style={{ margin: 8 }}>R$ 100,00</ButtonComponent>
            <ButtonComponent outlined={value !== 250} onClick={() => setValue(250)} style={{ margin: 8 }}>R$ 250,00</ButtonComponent>
            <ButtonComponent outlined={value !== 500} onClick={() => setValue(500)} style={{ margin: 8 }}>R$ 500,00</ButtonComponent>
          </div>
          <Link href={`/checkout`}>
            <div style={{ display: "flex", justifyContent: "flex-end", marginTop: 16 }}>
              <ButtonComponent size="lg">Comprar</ButtonComponent>
            </div>
          </Link>
        </div>
      </ProductContainer>
    </Layout>
  )
}

export default StaticPropsDetail

