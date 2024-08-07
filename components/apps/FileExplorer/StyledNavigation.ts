import styled from "styled-components";

const StyledNavigation = styled.nav`
  background-color: rgb(29, 32, 33);
  display: flex;
  height: ${({ theme }) => theme.sizes.fileExplorer.navBarHeight};

  button {
    height: 16px;
    margin: 11px 9px;
    width: 16px;

    svg {
      color: #fbf1c7;
      fill: currentColor;
      height: 16px;
      transition: color 0.35s ease;
      width: 16px;

      &:hover {
        color: rgb(69, 133, 136);
      }

      &:active {
        color: rgb(131, 165, 152);
        transition: none;
      }
    }

    &[title^="Up"] {
      margin-right: 8px;
      position: relative;
      right: -8px;
      top: -1px;
    }

    &[title="Recent locations"] {
      left: 55px;
      position: absolute;

      svg {
        stroke: currentColor;
        stroke-width: 3px;
        width: 7px;
      }
    }

    &:disabled {
      svg {
        color: rgb(168, 153, 132);

        &:hover,
        &:active {
          color: rgb(168, 153, 132);
        }
      }
    }
  }
`;

export default StyledNavigation;
