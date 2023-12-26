import React from "react";
import TemplatesList from "../components/TemplatesList";
import { AwesomeButton } from "react-awesome-button";
import AwesomeButtonStyles from "react-awesome-button/src/styles/styles.scss";
import styled from "styled-components";
import "../App.css";

const Container = styled.div`
  text-align: center;
  margin: 50px auto;
  padding: 60px;
  border: 2px solid #ccc;
  border-radius: 8px;
  width: 80%;
`;

const Paragraph = styled.p`
  font-size: 2rem;
  line-height: 1.6;
  color: #555;
`;
const Home = () => {
  return (
    <div>
      <TemplatesList></TemplatesList>
      <Container>
        <Paragraph>
          Contribute to the original repository and ours by clicking below:
        </Paragraph>
        <AwesomeButton
          type="secondary"
          className="awesome-button"
          href="https://github.com/MichaelBarney/LinkFree"
        >
          Visit Original Repo
        </AwesomeButton>
        <AwesomeButton
          type="secondary"
          className="awesome-button"
          href="https://github.com/AtharvaMutsaddi/LinkFree-Web-Interface"
        >
          Visit Our Repo
        </AwesomeButton>
      </Container>
    </div>
  );
};

export default Home;
