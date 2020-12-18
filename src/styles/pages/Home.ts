import styled from "styled-components";

import { breakpoints, spacing, colors, fonts } from "@/styles/utils";

export const ProductListingContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: ${spacing.lg}px;

  @media (min-width: ${breakpoints.desktop}px) {
    flex-direction: row;
    flex-wrap: wrap;
    padding: ${spacing["2xl"]}px;
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
    margin: ${spacing["2xl"]}px;
    font-size: 3rem;
  }
`;
