import styled, { css } from "styled-components";

export const StyledTable = styled.table(
  () => css`
    border: 2px solid #000000;
  `
);

export const StyledTableHeader = styled.th(
  () => css`
    background: #19b394;
    padding: 10px;
    font-size: 28px;
    color: #ffffff;
  `
);

export const StyledTableCell = styled.td(
    () => css`
        border: 1px solid #000000;
        padding: 10px;
        text-align: center;
    `
)