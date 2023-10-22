import styled from "styled-components";

export const Price = styled.b.attrs((props) => ({
  children: `${props.value} ₽`
}))`
  font-size: 25px;
  margin-left: ${(props) => props.theme.indent};
`;

export default Price;
