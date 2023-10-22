import styled from "styled-components";

export const Code = styled.span.attrs((props) => ({
  children: `Артикул:  ${props.children}`
}))`
  color: grey;
  font-size: 15px;
  margin-top: 5px;
  margin-bottom: ${(props) => props.theme.indent};
`;
export default Code;
