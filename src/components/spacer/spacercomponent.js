import React from "react";
import { View } from "react-native";
import styled from "styled-components/native";

const Topsmall = styled.View`
  margin-top: ${(props) => props.theme.space[1]};
`;

const Topmedium = styled.View`
  margin-top: ${(props) => props.theme.space[2]};
`;

const Toplarge = styled.View`
  margin-top: ${(props) => props.theme.space[3]};
`;

const Leftsmall = styled.View`
  margin-left: ${(props) => props.theme.space[1]};
`;

const Leftmedium = styled.View`
  margin-left: ${(props) => props.theme.space[2]};
`;

const Leftlarge = styled.View`
  margin-left: ${(props) => props.theme.space[3]};
`;

export const Spacer = ({ varint }) => {
  if (varint === "top.large") {
    return <Topsmall />;
  }
  if (varint === "top.medium") {
    return <Topmedium />;
  }
  if (varint === "top.small") {
    return <Topsmall />;
  }
  if (varint === "left.large") {
    return <Leftlarge />;
  }
  if (varint === "left.medium") {
    return <Leftmedium />;
  }
  if (varint === "left.small") {
    return <Leftsmall />;
  }
};
