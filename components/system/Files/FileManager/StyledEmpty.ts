import styled from "styled-components";

type StyledEmptyProps = {
  $hasColumns?: boolean;
};

const StyledEmpty = styled.div<StyledEmptyProps>`
  position: absolute;
  width: 100%;

  &::before {
    color: #fbf1c7;
    content: "This folder is empty.";
    display: flex;
    font-size: 12px;
    font-weight: 200;
    justify-content: center;
    letter-spacing: 0.3px;
    mix-blend-mode: difference;
    padding-top: ${({ $hasColumns, theme }) =>
      $hasColumns
        ? theme.sizes.window.textTopPadding +
          theme.sizes.fileManager.columnHeight
        : theme.sizes.window.textTopPadding}px;
  }
`;

export default StyledEmpty;
