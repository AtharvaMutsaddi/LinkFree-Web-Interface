import React from "react";
import styled from "styled-components";

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

const About = () => {
  return (
    <>
      <Container>
        <Heading>About Page</Heading>
      </Container>
    </>
  );
};

export default About;
