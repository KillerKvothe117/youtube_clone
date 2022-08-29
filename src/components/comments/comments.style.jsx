import styled from "styled-components";

export const Container = styled.div``;

export const NewComment = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

export const Avatar = styled.img`
  height: 50px;
  width: 50px;
  border-radius: 50%;
`;

export const Input = styled.input`
  border: none;
  outline: none;
  border-bottom: 1px solid ${({ theme }) => theme.soft};
  background-color: transparent;
  color: ${({ theme }) => theme.text};
  padding: 5px;
  width: 100%;
`;
