import React from "react";
import styled from "styled-components";

const MainDiv = styled.div`
  padding: 0 50px;
`;

const Card = styled.div`
  background-color: #fff;
  border: 1px solid #ccc;
  border-radius: 5px;
  padding: 0 15px;
  margin-bottom: 5px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const CardTitle = styled.h4`
  font-size: 14px;
  color: #000;
`;

const TaskList: React.FC = () => {
  const tasks: any[] = JSON.parse(localStorage.getItem("tasks") || "[]");

  return (
    <MainDiv>
      <h1>Task List</h1>
      {tasks.map((task) => (
        <Card key={task.id}>
          <CardTitle>{task.name}</CardTitle>
        </Card>
      ))}
    </MainDiv>
  );
};

export default TaskList;
