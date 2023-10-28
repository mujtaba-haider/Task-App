// src/components/Header.tsx
import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const Nav = styled.nav`
  height: 60px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  background-color: #007bff;
`;

const Button = styled.button`
  height: 40px;
  background-color: #007bff;
  color: #fff;
  font-size: 16px;
  padding: 10px 20px;
  margin: 0 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background-color: rgb(99, 174, 255, 0.5);
  }

  &:active {
    background-color: rgb(99, 174, 255, 0.5);
  }

  &:focus {
    outline: none; // Remove the default focus outline
    box-shadow: 0 0 5px rgba(0, 0, 0, 0.3); // Add a custom focus style
  }
`;

const Navbar: React.FC = () => {
  const navigate = useNavigate();

  return (
    <Nav>
      <Button onClick={() => navigate("/list-tasks")}>List Tasks</Button>
      <Button onClick={() => navigate("/create-task")}>Create Task</Button>
      <Button onClick={() => navigate("/bulk-delete")}>Bulk Delete</Button>
    </Nav>
  );
};

export default Navbar;
