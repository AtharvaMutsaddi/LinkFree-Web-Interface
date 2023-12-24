// About.js (example filename)
import React from "react";
import styled from "styled-components";
import { AwesomeButton } from "react-awesome-button";
import AwesomeButtonStyles from "react-awesome-button/src/styles/styles.scss";

const Container = styled.div`
  text-align: center;
  margin: 50px auto;
  padding: 20px;
  border: 2px solid #ccc;
  border-radius: 8px;
  max-width: 600px;
`;

const Heading = styled.h1`
  font-size: 2rem;
  color: #333;
  margin-bottom: 20px;
`;

const Paragraph = styled.p`
  font-size: 1.2rem;
  line-height: 1.6;
  color: #555;
`;

const About = () => {
  return (
    <>
      <Container>
        <Heading>About Page</Heading>
        <Paragraph>
          Contribute to the original repo by clicking below
        </Paragraph>
        {/* Add more content as needed */}
        <AwesomeButton
          type="secondary"
          href="https://github.com/MichaelBarney/LinkFree"
        >
          Click Me!
        </AwesomeButton>
      </Container>
    </>
  );
};

export default About;
