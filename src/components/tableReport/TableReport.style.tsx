import styled, { css } from "styled-components";

export const HeaderContainer = styled.div(
  () => css`
    padding: 24px;
    font-family: "Open Sans", "Helvetica Neue", Helvetica, Arial, sans-serif;
    font-size: 32px;
    font-weight: 700;
    color: #19b394;
    border-bottom: 2px solid #19b394;
  `
);

export const TableContainer = styled.div(
    () => css`
    font-family: "Open Sans", "Helvetica Neue", Helvetica, Arial, sans-serif;
    display: flex;
    justify-content: center;
    padding: 40px 16px 16px 40px;
    background:#f5f5f5;
  `
)
