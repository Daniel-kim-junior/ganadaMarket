/* eslint-disable @typescript-eslint/no-empty-function */
import React, { useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import styled from '@emotion/styled';

interface LinkButtonProps {
  children: React.ReactNode;
  href: string;
  onClick?: React.MouseEventHandler<HTMLElement>;
}

function LinkButton({ children, href, onClick, ...rest }: LinkButtonProps) {
  return (
    <Atom onClick={onClick} to={{ pathname: href }} {...rest}>
      {children}
    </Atom>
  );
}

const Atom = styled(Link)`
  margin-top: 12px;
  align-self: flex-start;
  height: 36px;
  line-height: 34px;
  border: 1px solid #d3d3d3;
  color: rgba(34, 34, 34, 0.8);
  font-size: 12px;
  letter-spacing: -0.06px;
  padding: 0 14px;
  height: 34px;
  border-radius: 10px;
  display: inline-block;
  cursor: pointer;
  vertical-align: middle;
  text-align: center;
  color: rgba(34, 34, 34, 0.8);
  background-color: #fff;
  text-decoration: none;
`;

LinkButton.defaultProps = {
  onClick: () => {},
};

export default LinkButton;
