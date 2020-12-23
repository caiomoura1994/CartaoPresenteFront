import styled from "styled-components";
import { ArrowForward } from '@styled-icons/evaicons-solid';
import { ShoppingCart } from '@styled-icons/entypo';

import {
  colors,
  radius,
  spacing,
} from '@/styles/utils';
import { ProductListingItemLink } from "../ProductCard/styles";
import { InputHTMLAttributes } from "react";

const TRANSITION_DURATION = '250ms';

const PriceRow = styled.div<PriceComponentInterface>`
  align-items: flex-end;
  display: flex;
  justify-content: space-between;
  margin-top: ${spacing.xs}px;
`;

const PriceTextContainer = styled.div`
  color: ${colors.brand};
  font-size: 1.4rem;
  font-weight: 500;
  letter-spacing: -0.02em;

  span {
    color: ${colors.textLight};
  }
`;
const Incentive = styled.div`
  align-items: center;
  color: ${colors.lilac};
  display: flex;
  font-size: 0.9rem;
  line-height: 1.3;
  margin-bottom: ${spacing['2xs']}px;
  margin-right: calc(-${spacing.lg}px - 40px);
  text-align: right;
  transition: all ${TRANSITION_DURATION};

  @media (hover: hover) {
    ${ProductListingItemLink}:hover & {
      transform: translateX(-40px);
    }
  }

  > span {
    svg {
      display: inline;
      margin-right: -${spacing['3xs']}px;
      vertical-align: middle;
    }
  }
`;

const CartIcon = styled.span`
  align-items: center;
  background: ${colors.lilac};
  border-radius: ${radius.default}px 0 0 ${radius.default}px;
  display: flex;
  height: 40px;
  justify-content: center;
  margin-left: ${spacing.lg}px;
  position: relative;
  transition: all ${TRANSITION_DURATION};
  vertical-align: middle;
  width: 40px;

  @media (hover: hover) {
    ${ProductListingItemLink}:hover & {
      margin-left: ${spacing.xs}px;
    }
  }

  svg {
    color: ${colors.accent};
    height: 22px;
    position: relative;
    width: 22px;
  }
`;

export interface PriceComponentInterface extends Partial<InputHTMLAttributes<HTMLDivElement>> {
  value?: number;
  withCardIcon?: boolean;
}

const PriceComponent = (props: PriceComponentInterface) => {
  return <PriceRow {...props}>
    <PriceTextContainer>
      <span>R$</span> {props.value}
    </PriceTextContainer>
    {props.withCardIcon && <Incentive>
      <span>
        Ver detalhes <br />& Comprar <ArrowForward width={20} />
      </span>
      <CartIcon>
        <ShoppingCart />
      </CartIcon>
    </Incentive>}
  </PriceRow>
}

export default PriceComponent;