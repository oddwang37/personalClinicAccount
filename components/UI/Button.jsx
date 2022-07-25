import React from 'react';
import styled from 'styled-components';

const Button = ({ children }) => {
  return <Root>{children}</Root>;
};

export default Button;

const Root = styled.div`
  border-radius: 5px;
  background-color: #7761ff;
  color: #fff;
  padding: 10px 15px;
  font-weight: 400;
  display: flex;
  text-align: center;
  align-self: flex-end;
  cursor: pointer;
  font-style: default;
  &:hover {
    background-color: #fff;
    border: 1px solid #7761ff;
    color: #7761ff;
  }
`;
