import styled from "styled-components";
import { DISBALE_AUTO_INPUT_FEATURES } from "utils/constants";

type StyledRenameBoxProps = {
  $darkMode: boolean;
  $singleLineMode: boolean;
};

const StyledRenameBox = styled.textarea.attrs<StyledRenameBoxProps>(() => ({
  enterKeyHint: "done",
  rows: 1,
  ...DISBALE_AUTO_INPUT_FEATURES,
}))`
  background-color: ${({ $darkMode }) =>
    $darkMode ? "rgb(29,32,33)" : "#fbf1C7"};
  border: ${({ $darkMode }) =>
    `1px solid ${$darkMode ? "#fbf1C7" : "rgb(102, 92, 84)"}`};
  border-radius: 0;
  color: ${({ $darkMode }) => ($darkMode ? "#fbf1C7" : "#1d2021")};
  font-family: inherit;
  font-size: 11.5px;
  left: ${({ $singleLineMode }) => ($singleLineMode ? "16px" : undefined)};
  margin-bottom: 2px;
  max-width: ${({ $singleLineMode, theme }) =>
    $singleLineMode ? undefined : `${theme.sizes.fileEntry.renameWidth}px`};
  min-height: 19px;
  min-width: 30px;
  overflow: hidden;
  padding: ${({ theme }) => `1px ${theme.sizes.fileEntry.renamePadding}px`};
  position: ${({ $singleLineMode }) =>
    $singleLineMode ? "absolute" : "relative"};
  resize: none;
  text-align: ${({ $singleLineMode }) => ($singleLineMode ? "left" : "center")};
  top: ${({ $singleLineMode }) => ($singleLineMode ? "3px" : "2px")};
  user-select: text;
  white-space: break-spaces;
  word-wrap: ${({ $singleLineMode }) =>
    $singleLineMode ? "normal" : undefined};
  z-index: 1;
`;

export default StyledRenameBox;
