import styled, { css } from "styled-components";
import { useRouter } from "next/router";

import { ArrowBack } from '@styled-icons/evaicons-solid';
import { spacing, radius, colors, breakpoints } from '@/styles/utils';

export const ButtonContainer = styled.button`
  padding: ${({ size = "sm" }: { size: "sm" | "lg" }) => spacing[size]}px;
  border-radius:${radius.large}px;
  background: ${({ outlined }: any) => outlined ? colors.lightest : colors.brand};
  color: ${({ outlined }: any) => outlined ? colors.brand : colors.lightest};
  border: 1px solid ${colors.brand};
  ${({ fullWidth }: any) => fullWidth && css`width: 100%;`}
  @media (hover: hover) {
    :hover {
        cursor: pointer;
        opacity: 0.8;
    }
  }
`;

const BackButtonComponentContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-right: 6em;
  @media (max-width: ${breakpoints.mobile}px) {
    margin-right: 1em;
    margin-bottom: 2em;
  }
`;

const ButtonComponent = ({ children, outlined, ...props }: any) => {
  return <ButtonContainer {...props} outlined={outlined}>
    {children}
  </ButtonContainer>
}

export const BackButtonComponent = () => {
  const router = useRouter()
  return <BackButtonComponentContainer>
    <ButtonComponent outlined onClick={() => router.back()}>
      <ArrowBack width={20} /> Voltar
    </ButtonComponent>
  </BackButtonComponentContainer>
}

export default ButtonComponent;