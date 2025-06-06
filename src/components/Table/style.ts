import styled, { css } from "styled-components";

const TableContainer = styled.div`
  width: 100%;
  background: #fff;
  border-radius: 12px;
  box-shadow: 0 2px 8px #0000000a;
  padding: 24px;
  border: 1px solid #09428F2B
`;

const TableHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 24px;
`;

const Title = styled.h2`
  font-weight: 700;
  font-size: 15px;
  line-height: 100%;
  letter-spacing: 0%;
  color: #cc6237;
  margin: 0;
`;

const Actions = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
`;

const SearchInputWrapper = styled.div`
  display: flex;
  align-items: center;
  width: 203px;
  height: 36px;
  gap: 10px;
  border-radius: 33px;
  padding: 10px 15px;
  background: #f5f5f5;
`;

const SearchInput = styled.input`
  border: none;
  outline: none;
  background: transparent;
  font-size: 14px;
  flex: 1;
`;

const InsertButton = styled.button`
  width: 124px;
  height: 36px;
  gap: 10px;
  border-radius: 33px;
  padding: 10px 15px;
  background: #cc6237;
  color: #fff;
  font-weight: 500;
  font-size: 14px;
  border: none;
  cursor: pointer;
  transition: filter 0.2s;
  &:hover {
    filter: brightness(0.95);
  }
`;

const TableStyled = styled.table`
  width: 100%;
  border-collapse: separate;
  border-spacing: 0 8px;
`;

const TableHead = styled.thead``;

const TableBody = styled.tbody``;

const TableRow = styled.tr``;

const TableCell = styled.td<{ header?: boolean }>`
  padding: 12px 8px;
  text-align: left;
  width: 261.25px;
  height: 38px;
  padding-left: 20px;
  box-sizing: border-box;
  ${({ header }) =>
    header
      ? css`
          font-family: Poppins;
          font-weight: 500;
          font-size: 13px;
          line-height: 15px;
          color: #cc623780;
          border-bottom: 1px solid #cc62371a;
        `
      : css`
          font-weight: 400;
          font-size: 12px;
          line-height: 15px;
          color: #657593;
          border-bottom: 1px solid #cc62371a;
        `}
`;

const Footer = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 8px;
  margin-top: 24px;
`;

const FooterButton = styled.button<{ next?: boolean }>`
  width: ${({ next }) => (next ? "77px" : "75px")};
  height: 35px;
  border-radius: 200px;
  padding: 10px;
  background: ${({ next }) => (next ? "#CC6237" : "#F5F5F5")};
  color: ${({ next }) => (next ? "#fff" : "#CC6237")};
  font-weight: 50;
  font-size: 14px;
  border: none;
  cursor: pointer;
  transition: filter 0.2s;
  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;

const StatusIndicator = styled.span<{ status: "Ativo" | "Inativo" }>`
  display: inline-block;
  width: 10px;
  height: 10px;
  border-radius: 50%;
  margin-right: 8px;
  background: ${({ status }) => (status === "Ativo" ? "#4DEF00" : "#F44336")};
  vertical-align: middle;
`;

const PageButton = styled.button<{ selected?: boolean }>`
  width: 35px;
  height: 35px;
  gap: 10px;
  padding: 10px;
  border-radius: 200px;
  background: ${({ selected }) => (selected ? "#CC6237" : "#F5F5F5")};
  color: ${({ selected }) => (selected ? "#fff" : "#CC6237")};
  font-weight: 700;
  font-size: 14px;
  border: none;
  cursor: pointer;
  transition: filter 0.2s;
  &:hover {
    filter: brightness(0.95);
  }
`;

export {
  TableContainer,
  TableHeader,
  Title,
  Actions,
  SearchInputWrapper,
  SearchInput,
  InsertButton,
  TableStyled,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  Footer,
  FooterButton,
  PageButton,
  StatusIndicator
};