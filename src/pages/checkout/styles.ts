import styled from "styled-components";
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
