import styled from "styled-components/native";
import { Card } from "react-native-paper";

export const Icon = styled.Image`
  width: 15px;
  height: 15px;
`;

export const ResturantCard = styled(Card)`
  background-color: ${(props) => props.theme.colors.bg.primary};
`;

export const ResturantCardCover = styled(Card.Cover)`
  padding: ${(props) => props.theme.space[2]};
  background-color: ${(props) => props.theme.colors.bg.primary};
`;

export const Address = styled.Text`
    font-family: ${(props) => props.theme.fonts.body};
    font-size: ${(props) => props.theme.fontSizes.caption}
    color: ${(props) => props.theme.colors.ui.primary};
`;

export const Info = styled.View`
  padding: ${(props) => props.theme.space[2]};
`;

export const RatingView = styled.View`
  flex-direction: row;
  padding-top: ${(props) => props.theme.space[1]};
  padding-bottom: ${(props) => props.theme.space[1]};
`;

export const SectionView = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const OpenView = styled.View`
  flex: 1;
  flex-direction: row;
  justify-content: flex-end;
`;
