import React from "react";
import styled from "styled-components";

const Container = styled.div`
  text-align: center;
  margin: 50px auto;
  padding: 20px;
  border: 2px solid #ccc;
  border-radius: 8px;
  width: 80%
`;
const Paragraph = styled.p`
  font-size: 2rem;
  line-height: 1.6;
  color: #555;
`;
const Heading = styled.h1`
  font-size: 2rem;
  color: purple;
  margin-bottom: 20px;
`;
const About = () => {
  return (
    <Container>
      <Heading level={1}>About Our Project</Heading>
      <Paragraph>
        Welcome to our project! We aim to revolutionize [describe the purpose of
        your project here]. Our team is dedicated to [mention the key objectives
        or mission of the project].
      </Paragraph>
      <Paragraph>
        Our project, [project name], was initiated to [state the problem it
        solves or the need it addresses]. We are committed to delivering
        [mention any unique features or benefits].
      </Paragraph>
      <Paragraph>
        At the core of our project is a focus on [mention any core values,
        principles, or technologies used]. We believe in [include any vision or
        philosophy guiding the project].
      </Paragraph>
      <Heading level={2}>Key Features</Heading>
      <ul>
        <li>[Feature 1 description]</li>
        <li>[Feature 2 description]</li>
        <li>[Feature 3 description]</li>
        {/* Add more key features as needed */}
      </ul>
      <Heading level={2}>How to Contribute</Heading>
      <Paragraph>
        We welcome contributions from the community! You can contribute by:
      </Paragraph>
      <ul>
        <li>[Contribution guideline 1]</li>
        <li>[Contribution guideline 2]</li>
        <li>[Contribution guideline 3]</li>
        {/* Add more contribution guidelines as needed */}
      </ul>
      <Paragraph>
        Thank you for your interest in our project. For any inquiries or
        suggestions, feel free to [provide contact information or a link to your
        communication channels].
      </Paragraph>
    </Container>
  );
};

export default About;
