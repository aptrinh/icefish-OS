import styled from "styled-components";

const StyledAddressBar = styled.div`
  background-position: 2px 5px;
  background-repeat: no-repeat;
  background-size: 16px;
  border: 1px solid rgb(80 73 69);
  display: flex;
  height: ${({ theme }) => theme.sizes.fileExplorer.navInputHeight}px;
  margin: 6px 12px 5px 5px;
  overflow: hidden;
  padding: 0 22px 2px 25px;
  position: relative;
  width: 100%;

  input {
    background-color: rgb(29 32 33);
    border-right: 1px solid rgb(21 21 21);
    color: #fbf1c7;
    font-family: ${({ theme }) => theme.formats.systemFont};
    font-size: 12px;
    font-weight: 400;
    height: ${({ theme }) => theme.sizes.fileExplorer.navInputHeight - 2}px;
    padding-bottom: 2px;
    text-overflow: ellipsis;
    white-space: nowrap;
    width: calc(100% - 2px);

    &:focus,
    &.inputing {
      height: ${({ theme }) => theme.sizes.fileExplorer.navInputHeight}px;
    }
  }

  img {
    left: 2px;
    position: absolute;
    top: 1px;
  }

  .action {
    background-color: rgb(29 32 33);
    display: flex;
    height: ${({ theme }) => theme.sizes.fileExplorer.navInputHeight - 2}px;
    margin: 0;
    place-content: center;
    place-items: center;
    position: absolute;
    right: 0;
    top: 0;
    width: 24px;

    &:hover {
      background-color: rgb(69 133 136);
      border: 1px solid rgb(131 165 152);
    }

    &:active {
      background-color: rgb(177 98 134);
      border: 1px solid rgb(211 134 155);
    }

    svg {
      color: rgb(128 128 128);
      stroke: rgb(128 128 128);

      &.refresh {
        position: relative;
        stroke-width: 3;
        top: -1px;
      }

      &.go-to {
        height: 12px;
        stroke-width: 2;
        width: 12px;
      }
    }
  }
`;

export default StyledAddressBar;
