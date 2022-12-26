import React from "react";
import styled from "styled-components";
import {Container} from "react-bootstrap";

export const StyledHeader = styled(Container)`
  background-color: #eeeee4;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const StyledTitle = styled.h1`
  font-family: 'Quicksand', sans-serif;
  font-size: 20px;
`;

export const StyledCard = styled.div`
  margin: 20px 100px;
  padding: 20px;
  box-shadow: 5px 5px 5px 1px lightslategray;
 
`;

export const StyledCardCard = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`



