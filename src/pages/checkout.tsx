import React from 'react';
import Link from 'next/link';

import styled from "styled-components";
import Cards from 'react-credit-cards';
import 'react-credit-cards/es/styles-compiled.css';

import InputComponent from '@/components/Ui/Input';
import Layout from '@/components/Layout';
import { formatCreditCardNumber, formatExpirationDate, formatCVC } from '@/utils/utils';
import ButtonComponent, { BackButtonComponent } from '@/components/Ui/Button';
import PriceComponent from '@/components/Ui/Price';
import { breakpoints } from "@/styles/utils";

export const Container = styled.div`
  align-items: center;
  justify-content: center;
  margin-left: 12px;
  margin-right: 12px;
  min-height: 70%;
  @media (min-width: ${breakpoints.desktop}px) {
    display: flex;
    height: 100%;
  }
`;


export default class PaymentForm extends React.Component {
  state = {
    cvc: '',
    expiry: '',
    focus: undefined,
    name: '',
    number: '',
    email: '',
  };

  handleInputFocus = (e: any) => {
    this.setState({ focus: e.target.name });
  }

  handleInputChange = (e: any) => {
    var { name, value } = e.target;
    if (name === "number") {
      value = formatCreditCardNumber(value);
    } else if (name === "expiry") {
      value = formatExpirationDate(value);
    } else if (name === "cvc") {
      value = formatCVC(value);
    }

    this.setState({ [name]: value });
  }

  render() {
    let value = "0";
    if (process.browser) {
      const urlParams = new URLSearchParams(window.location.search);
      value = urlParams.get('value') || "0";
    }

    const doCheckout = async () => {
      const urlParams = new URLSearchParams(window.location.search);
      const productId = urlParams.get('productId');
      const props = {
        product: [Number(productId)],
        email: this.state.email,
        name: this.state.name,
        amount: Number(value)
      }

      console.log(props)
      const response = await fetch(`https://cartao-presente.herokuapp.com/order/`, {
        method: "POST",
        body: JSON.stringify(props)
      });
      const item = await response.json()
      console.log(item)
      if (item.id) {
        window.location.href = `/sale-finished?saleId=${item.id}`;
      }
      return productId
    }

    return (
      <Layout title="Checkout | Presente Cartão">
        <BackButtonComponent />
        <Container>
          <div>
            <Cards
              cvc={this.state.cvc}
              expiry={this.state.expiry}
              focused={this.state.focus}
              name={this.state.name}
              number={this.state.number}
            />
          </div>
          <form style={{ marginLeft: 24, marginRight: 24 }}>
            <div>
              <InputComponent
                type="email"
                name="email"
                value={this.state.email}
                placeholder="E-mail"
                onChange={this.handleInputChange}
              />
              <InputComponent
                type="text"
                name="name"
                value={this.state.name}
                placeholder="Nome do titular"
                onChange={this.handleInputChange}
                onFocus={this.handleInputFocus}
              />
              <InputComponent
                type="tel"
                name="number"
                value={this.state.number}
                placeholder="Número"
                pattern="[\d| ]{16,22}"
                onChange={this.handleInputChange}
                onFocus={this.handleInputFocus}
              />
            </div>
            <div style={{ display: "flex" }}>
              <InputComponent
                type="tel"
                name="expiry"
                value={this.state.expiry}
                placeholder="Validade"
                pattern="\d\d/\d\d"
                onChange={this.handleInputChange}
                onFocus={this.handleInputFocus}
                style={{ marginRight: 8 }}
              />
              <InputComponent
                type="tel"
                name="cvc"
                value={this.state.cvc}
                placeholder="CVC"
                pattern="\d{3,4}"
                onChange={this.handleInputChange}
                onFocus={this.handleInputFocus}
              />
            </div>
            <PriceComponent style={{ justifyContent: 'center' }} value={Number(value)} />
            <Link href={`/sale-finished`}>
              <div>
                <ButtonComponent onClick={doCheckout} style={{ marginTop: 24 }} fullWidth size="lg">
                  Comprar
                </ButtonComponent>
              </div>
            </Link>
          </form>
        </Container>
      </Layout>
    );
  }
}