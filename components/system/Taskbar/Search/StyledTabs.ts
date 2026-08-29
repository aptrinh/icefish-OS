import styled from "styled-components";

const StyledTabs = styled.ol`
  border-bottom: 1px solid hsl(0 0% 13% / 40%);
  color: #fbf1c7;
  display: flex;
  font-size: 12px;
  font-weight: 600;
  gap: 1px;
  padding: 2px 13px 0;
  position: absolute;
  width: 100%;

  li {
    color: rgb(213 196 161);

    button {
      align-items: flex-start;
      background-color: transparent;
      color: inherit;
      display: flex;
      font: inherit;
      height: 100%;
      padding: 15px 13px 14px;
    }

    &.active {
      color: #fbf1c7;

      button {
        border-bottom: 4px solid rgb(66 123 88);
      }
    }

    &:hover {
      color: #fbf1c7;
    }
  }
`;

export default StyledTabs;
