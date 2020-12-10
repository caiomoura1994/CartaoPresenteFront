import styled from "styled-components";
import { radius, breakpoints } from "@/styles/utils";

export const ImageContainer = styled.div`
  width: 100%;
  box-shadow: 0 1px 10px rgba(0, 0, 0, 0.2);
  border-radius: ${radius.large};
  margin-right: 40px;
  align-self: center;
`;

export const ProductContainer = styled.div`
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
