import React from "react";
import TemplatesList from "../components/TemplatesList";
import { AwesomeButton } from "react-awesome-button";
import AwesomeButtonStyles from "react-awesome-button/src/styles/styles.scss";
import styled from "styled-components";

const Container = styled.div`
  text-align: center;
  margin: 50px auto;
  padding: 20px;
  border: 2px solid #ccc;
  border-radius: 8px;
  max-width: 600px;
`;

const Paragraph = styled.p`
  font-size: 1.2rem;
  line-height: 1.6;
  color: #555;
`;
const Home = () => {
  return (
    <div>
      <Container>
        <Paragraph>
          Contribute to the original and our repository by clicking below
        </Paragraph>
        <AwesomeButton
          type="secondary"
          href="https://github.com/MichaelBarney/LinkFree"
        >
          Original repo
        </AwesomeButton>
        <br />
        <br />
        <AwesomeButton
          type="secondary"
          href="https://github.com/AtharvaMutsaddi/LinkFree-Web-Interface"
        >
          Our repo
        </AwesomeButton>
      </Container>
      <TemplatesList></TemplatesList>
    </div>
  );
};

export default Home;
