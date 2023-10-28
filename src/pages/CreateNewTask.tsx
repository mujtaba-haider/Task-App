import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const MainDiv = styled.div`
  padding: 0 50px;
`;

const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 10px;
`;

const InputField = styled.input`
  padding: 10px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 5px;
  outline: none;
  transition: border-color 0.2s;

  &:focus {
    border-color: #007bff;
  }
`;

const CreateButton = styled.button`
  background-color: lightgreen;
  height: 40px;
  color: #fff;
  font-size: 14px;
  font-weight: 700;
  padding: 10px 20px;
  margin: 20px 0 0 0;
  border: none;
  border-radius: 5px;
  cursor: pointer;
`;

const CreateNewTask: React.FC = () => {
  const [taskName, setTaskName] = useState("");
  const navigate = useNavigate();

  const handleCreateTask = () => {
    if (!taskName) {
      alert("Please enter a Task Name");
    } else {
      const newTask = {
        id: Date.now(),
        name: taskName,
      };

      const existingTasks = JSON.parse(localStorage.getItem("tasks") || "[]");

      localStorage.setItem(
        "tasks",
        JSON.stringify([...existingTasks, newTask])
      );

      setTaskName("");

      navigate("/list-tasks");
    }
  };

  return (
    <MainDiv>
      <h1>Create Task</h1>
      <InputContainer>
        <InputField
          type="text"
          placeholder="Task name"
          value={taskName}
          onChange={(e) => setTaskName(e.target.value)}
        />
        <CreateButton onClick={handleCreateTask}>Create Task</CreateButton>
      </InputContainer>
    </MainDiv>
  );
};

export default CreateNewTask;
