import React from 'react';
import styled from 'styled-components';

import { breakpoints, colors, spacing } from '@/styles/utils';

const FooterRoot = styled.footer`
  align-items: center;
  color: ${colors.textMild};
  display: flex;
  flex-direction: column;
  font-size: 0.85rem;
  padding: ${spacing.md}px;
  padding-bottom: calc(${spacing.xl}px + 50px);

  a {
    color: ${colors.brand};
  }

  @media (min-width: ${breakpoints.desktop}px) {
    align-items: center;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    min-height: 50px;
    padding: 0 ${spacing.xl}px 10px;
  }
`;

const Row = styled.span`
  display: inline-block;
  flex-shrink: 0;
  line-height: 1.3;
  padding-bottom: ${spacing['2xs']}px;
  text-align: center;

  @media (min-width: ${breakpoints.desktop}px) {
    line-height: 1.4;
    padding-bottom: 0;
  }
`;

const Spacer = styled.span`
  display: none;

  @media (min-width: ${breakpoints.desktop}px) {
    display: inline-block;
    padding: 0 ${spacing.sm}px;
  }
`;

const Footer = () => (
  <FooterRoot>
    <Row>
      <b>Tem alguma duvida?&nbsp;</b>
    </Row>
    <Row>
      Veja o nosso{' '}
      <a href="#">
        FAQ
      </a>
      , fale com a gente no twitter{' '}
      <a href="#">@presenteCartao</a>
    </Row>
    <Row>
      &nbsp;Ou envie um emal para{' '}
      <a href="mailto:caiomoura1994@gmail.com">team@presentecartao.com</a>
    </Row>
    <Spacer>•</Spacer>
    <Row>
      Feito por {' '}
      <a href="http://gcodetec.com/">GcodeTec</a>
    </Row>
  </FooterRoot>
);

export default Footer;
