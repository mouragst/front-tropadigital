import styled from "styled-components";

const SubmenuContainer = styled.div`
  width: 123px;
  height: 125px;
  position: absolute;
  top: 1px;
  left: 2px;
  border-radius: 15px;
  background: #fff;
  border: 1px solid #0000000D;
  box-shadow: 0px 4px 4px 0px #0000000D;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  z-index: 100;
`;

const Option = styled.button<{ danger?: boolean }>`
  display: flex;
  align-items: center;
  gap: 8px;
  background: none;
  border: none;
  outline: none;
  cursor: pointer;
  font-weight: 400;
  font-size: 13px;
  line-height: 15px;
  letter-spacing: 0%;
  color: ${({ danger }) => (danger ? "#FF0000" : "#000")};
  padding: 8px 16px;
  border-radius: 8px;
  transition: background 0.2s;
  border-bottom: 1px solid #eee;
  &:last-child {
    border-bottom: none;
  }
  svg {
    width: 20px;
    height: 20px;
    flex-shrink: 0;
  }
  &:hover {
    background: #f5f5f5;
  }
`;

export {
    SubmenuContainer,
    Option,
}