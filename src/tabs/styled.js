import styled from "styled-components";

export const TitleList = styled.div`
  display: inline-flex;
  background-color: #ddd;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  overflow: hidden;
`;

export const TitleButton = styled.button`
  padding-top: 0px;
  padding-bottom: 0px;
  padding-left: ${(props) => props.theme.indent};
  padding-right: ${(props) => props.theme.indent};
  border: none;
  cursor: pointer;
  box-shadow: none;
  display: block;
  background-color: ${(props) => (props.active ? "#CCC" : "none")};
`;

export const TitleText = styled.h1`
  color: ${(props) => (props.active ? "#333" : "#888")};
  font-size: ${(props) => (props.small ? 20 : 34)}px;
`;

export const Content = styled.div`
  border: 1px solid #ddd;
  padding: ${(props) => props.theme.indent};
  line-height: 1.5;
  font-size: 16px;
  box-sizing: border-box;
  text-align: left;
`;
