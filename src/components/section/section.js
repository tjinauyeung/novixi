import styled from "styled-components";

const Section = styled.div`
  background: ${(props) => props.background || "#fff"};
  padding: 200px 50px;

  @media (max-width: 768px) {
    max-width: 768px;
  }

  @media (max-width: 450px) {
    padding: 80px 30px;
  }
`;

export default Section;
