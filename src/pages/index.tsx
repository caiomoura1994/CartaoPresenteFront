import Layout from '@/components/Layout'
import ProductCard from '@/components/ProductCard'
import styled from 'styled-components';

import { breakpoints, spacing, colors, fonts } from '@/styles/utils';
import WhatsappIcon from '@/components/Ui/WhatsappIcon';

const ProductListingContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: ${spacing.lg}px;

  @media (min-width: ${breakpoints.desktop}px) {
    flex-direction: row;
    flex-wrap: wrap;
    padding: ${spacing['2xl']}px;
  }
`;

export const Title = styled.h1`
  color: ${colors.brandDark};
  font-family: ${fonts.heading};
  font-size: 2rem;
  line-height: 1.2;
  margin: 0;
  text-align: center;

  @media (min-width: ${breakpoints.desktop}px) {
    margin: ${spacing['2xl']}px;
    font-size: 3rem;
  }
`;

const IndexPage = () => (
  <Layout title="Home | Next.js + TypeScript Example">
    <Title>Cartão presente</Title>
    <ProductListingContainer>
      {[1, 2, 3, 4].map((d) => {
        return <ProductCard key={d} />
      })}
    </ProductListingContainer>
    <WhatsappIcon />
  </Layout>
)

export default IndexPage
