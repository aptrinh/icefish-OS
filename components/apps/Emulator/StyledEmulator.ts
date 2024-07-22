import styled from "styled-components";
import Message from "styles/common/Message";

const StyledEmulator = styled.div`
  &.drop {
    ${Message("Drop rom file here", "#f9f5d7")};
  }
`;

export default StyledEmulator;
