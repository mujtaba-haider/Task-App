import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Navbar from "./components/Navbar";
import TaskList from "./pages/TaskList";
import CreateNewTask from "./pages/CreateNewTask";
import DeleteTaks from "./pages/DeleteTaks";
import styled from "styled-components";

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  overflow: auto;
`;

function App() {
  return (
    <Container>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Navigate to="/list-tasks" />} />
          <Route path="/list-tasks" element={<TaskList />} />
          <Route path="/create-task" element={<CreateNewTask />} />
          <Route path="/bulk-delete" element={<DeleteTaks />} />
        </Routes>
      </Router>
    </Container>
  );
}

export default App;
