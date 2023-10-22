import styled from "styled-components";
import { P } from "/src/elements";

export const StyledP = styled(P)`
  display: flex;
  margin-bottom: ${(props) => props.theme.indent};
`;

export const Value = styled.input`
  font-size: 20px;
  font-weight: bld;
  border: none;
  width: auto;
  display: inline-block;
  text-align: center;
  padding-left: 10px;
  padding-right: 10px;
`;
