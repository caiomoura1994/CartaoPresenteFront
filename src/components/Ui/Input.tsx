import styled from "styled-components";

const InputContainer = styled.input`
    border: 1px solid #ccc;
    border-radius: 6px;
    box-shadow: none;
    display: block;
    font-size: 20px;
    outline: none;
    padding: 10px;
    transition: all .4s;
    width: 100%;
    margin: 8px 0;
`;

const InputComponent = ({ children, outlined, ...props }: any) => {
    return <InputContainer {...props} outlined={outlined}>
        {children}
    </InputContainer>
}

export default InputComponent;
