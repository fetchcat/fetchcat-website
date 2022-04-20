import styled from "styled-components";

export const StyledTag = styled.div`
  text-transform: uppercase;
  padding: 2px 5px;
  font-size: 0.8em;
  display: flex;
  margin: 2px;
  border-radius: 5px;
`;

export const StyledGreenTag = styled(StyledTag)`
  background-color: ${(props) => props.theme.greenTag};
  color: white;
`;

export const StyledBlueTag = styled(StyledTag)`
  background-color: ${(props) => props.theme.blueTag};
  color: white;
`;

export const StyledLightBlueTag = styled(StyledTag)`
  background-color: ${(props) => props.theme.lightBlueTag}; ;
`;

export const StyledOrangeTag = styled(StyledTag)`
  background-color: ${(props) => props.theme.orangeTag};
  color: white;
`;

export const StyledYellowTag = styled(StyledTag)`
  background-color: ${(props) => props.theme.yellowTag};
`;

export const StyledGreyTag = styled(StyledTag)`
  background-color: ${(props) => props.theme.greyTag};
  color: white;
`;

export const StyledPinkTag = styled(StyledTag)`
  background-color: ${(props) => props.theme.pinkTag};
  color: white;
`;
