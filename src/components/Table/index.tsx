import React from "react";
import {
  TableContainer,
  TableHeader,
  Title,
  Actions,
  SearchInputWrapper,
  SearchInput,
  InsertButton,
  TableStyled,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Footer,
  FooterButton,
  PageButton,
  StatusIndicator,
} from "./style";
import { SearchIcon, MoreOptionsIcon } from "../../assets/svgs";

type Column = {
  key: string;
  label: string;
};

type TableProps = {
  title: string;
  columns: Column[];
  data: Record<string, React.ReactNode>[];
  onInsert?: () => void;
  onSearch?: (value: string) => void;
  itemsPerPage?: number;
};

const Table: React.FC<TableProps> = ({
  title,
  columns,
  data,
  onInsert,
  onSearch,
  itemsPerPage = 10,
}) => {
  const [search, setSearch] = React.useState("");
  const [page, setPage] = React.useState(1);

  const totalPages = Math.ceil(data.length / itemsPerPage);

  const paginatedData = React.useMemo(
    () =>
      data.slice(
        (page - 1) * itemsPerPage,
        (page - 1) * itemsPerPage + itemsPerPage
      ),
    [data, page, itemsPerPage]
  );

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
    onSearch?.(e.target.value);
    setPage(1);
  };

  const handlePageChange = (newPage: number) => {
    if (newPage >= 1 && newPage <= totalPages) {
      setPage(newPage);
    }
  };

  return (
    <TableContainer>
      <TableHeader>
        <Title>{title}</Title>
        <Actions>
          <SearchInputWrapper>
            <span>
              <SearchIcon />
            </span>
            <SearchInput
              placeholder="Pesquisar"
              value={search}
              onChange={handleSearch}
            />
          </SearchInputWrapper>
          <InsertButton onClick={onInsert}>Inserir novo</InsertButton>
        </Actions>
      </TableHeader>
      <TableStyled>
        <TableHead>
          <TableRow>
            {columns.map((col) => (
              <TableCell as="th" key={col.key} header>
                {col.label}
              </TableCell>
            ))}
            <TableCell as="th" header />
          </TableRow>
        </TableHead>
        <TableBody>
          {paginatedData.map((row, idx) => (
            <TableRow key={idx}>
                {columns.map((col) => (
                <TableCell key={col.key}>
                    {col.key === "status" ? (
                    <>
                        <StatusIndicator status={row[col.key] as "Ativo" | "Inativo"} />
                        {row[col.key]}
                    </>
                    ) : (
                    row[col.key]
                    )}
                </TableCell>
                ))}
                <TableCell>
                <MoreOptionsIcon />
                </TableCell>
            </TableRow>
            ))}
        </TableBody>
      </TableStyled>
      <Footer style={{ justifyContent: "flex-end" }}>
        <FooterButton
          onClick={() => handlePageChange(page - 1)}
          disabled={page === 1}
        >
          Anterior
        </FooterButton>
        {Array.from({ length: totalPages }, (_, i) => (
          <PageButton
            key={i + 1}
            selected={page === i + 1}
            onClick={() => handlePageChange(i + 1)}
          >
            {i + 1}
          </PageButton>
        ))}
        <FooterButton
          next
          onClick={() => handlePageChange(page + 1)}
          disabled={page === totalPages}
        >
          Próxima
        </FooterButton>
      </Footer>
    </TableContainer>
  );
};

export default Table;