import styled from "styled-components";

const StyledStatusBar = styled.footer`
  align-items: center;
  background-color: rgb(40, 40, 40);
  color: rgb(251, 241, 199);
  display: flex;
  font-size: 12px;
  font-weight: 200;
  height: ${({ theme }) => theme.sizes.fileExplorer.statusBarHeight};
  padding: 0 5px;
  position: relative;
  white-space: nowrap;
  width: 100%;

  div {
    display: flex;
    margin-top: -1px;
    padding: 0 3px 0 9px;

    &::after {
      border-right: 1px solid rgb(251, 241, 199);
      content: "";
      height: 11px;
      margin-left: 12px;
      position: relative;
      top: 3px;
    }

    &.selected {
      padding-left: 7px;

      &::after {
        margin-left: 13px;
      }
    }
  }
`;

export default StyledStatusBar;
