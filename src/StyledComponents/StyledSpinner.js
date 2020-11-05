import React from "react";
import styled from "@emotion/styled";
import { FaSpinner } from "react-icons/fa";
import { keyframes } from "@emotion/core";

export const SpinnerWrapper = styled.div`
  fontsize: "4em";
  height: "100vh";
  display: "flex";
  flexdirection: "column";
  justifycontent: "center";
  alignitems: "center";
`;

const spin = keyframes({
  "0%": { transform: "rotate(0deg)" },
  "100%": { transform: "rotate(360deg)" },
});

const Spinner = styled(FaSpinner)({
  animation: `${spin} 1s linear infinite`,
});

export function StyledSpinner() {
  return (
    <SpinnerWrapper>
      <Spinner />
    </SpinnerWrapper>
  );
}
