import styled from "styled-components";

const Container = styled.a`
  position: fixed;
  z-index: 9999;
  right: 0px;
  float: right;
  top: 80%;
  margin: 0px auto;
  cursor: pointer;
  min-width: 50px;
  max-width: 150px;
  color: rgb(255, 255, 255);
  text-align: center;
  padding: 10px;
  background: rgb(32, 176, 56);
  transition: all 0.5s ease 0s;
  border-radius: 5px 0px 0px 5px;
  text-decoration: none;
`;


const WhatsappIcon = () => {
  return <Container
    href="https://whats.link/testadsssc"
    target="_blank"
    rel="noopener noreferrer"
  >
    <img alt="whatsApp" src="assets/whatsapp.png" />
  </Container>
}

export default WhatsappIcon;