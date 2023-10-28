import React, { useState } from "react";
import styled from "styled-components";

const MainDiv = styled.div`
  padding: 0 50px;
`;

const Card = styled.div`
  display: flex;
  flex-direction: row;
  background-color: #fff;
  border: 1px solid #ccc;
  border-radius: 5px;
  padding: 0 10px;
  margin-bottom: 5px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const Checkbox = styled.input`
  width: 20px;
`;

const CardTitle = styled.h4`
  font-size: 14px;
  color: #000;
  margin-left: 30px;
`;

const DelButton = styled.button`
  background-color: red;
  height: 40px;
  color: #fff;
  font-size: 14px;
  font-weight: 700;
  padding: 10px 20px;
  margin: 0 0 20px 0;
  border: none;
  border-radius: 5px;
  cursor: pointer;
`;

const DeleteTaks: React.FC = () => {
  const [selectedTasks, setSelectedTasks] = useState<string[]>([]);

  const handleTaskSelection = (taskId: string) => {
    setSelectedTasks((prevSelectedTasks) => {
      if (prevSelectedTasks.includes(taskId)) {
        return prevSelectedTasks.filter((id) => id !== taskId);
      } else {
        return [...prevSelectedTasks, taskId];
      }
    });
  };

  const handleDeleteSelectedTasks = () => {
    const existingTasks = JSON.parse(localStorage.getItem("tasks") || "[]");

    const updatedTasks = existingTasks.filter(
      (task: any) => !selectedTasks.includes(task.id.toString())
    );
    localStorage.setItem("tasks", JSON.stringify(updatedTasks));

    setSelectedTasks([]);
  };

  const tasks: any[] = JSON.parse(localStorage.getItem("tasks") || "[]");

  return (
    <MainDiv>
      <h1>Bulk Delete</h1>
      <DelButton onClick={handleDeleteSelectedTasks}>Delete</DelButton>

      {tasks.map((task) => (
        <Card key={task.id}>
          <Checkbox
            type="checkbox"
            checked={selectedTasks.includes(task.id.toString())}
            onChange={() => handleTaskSelection(task.id.toString())}
          />
          <CardTitle>{task.name}</CardTitle>
        </Card>
      ))}
    </MainDiv>
  );
};

export default DeleteTaks;
