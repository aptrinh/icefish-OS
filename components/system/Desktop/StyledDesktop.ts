import styled from "styled-components";

const StyledDesktop = styled.main`
  background-color: transparent;
  contain: strict;
  height: 100%;
  inset: 0;
  overflow: clip;
  overscroll-behavior: none;
  position: fixed;
  width: 100vw;

  #loading-status {
    background-color: #fbf1c7;
    border: 1px solid #282828;
    border-radius: 8px;
    box-shadow: 0 0 50px 1px #282828;
    display: none;
    font-weight: 600;
    left: 50%;
    padding: 12px 15px;
    pointer-events: none;
    position: absolute;
    top: 50%;
    transform: translate(-50%, -50%);
    user-select: none;
  }

  > canvas {
    background-color: inherit;
    height: 100%;
    left: 0;
    object-fit: cover;
    position: absolute;
    top: 0;
    width: 100%;
    z-index: -1;
  }
`;

export default StyledDesktop;
