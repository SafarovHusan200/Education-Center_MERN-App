import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import * as React from "react";
import Header from "./components/Header";
import CreateEdu from "./pages/CreateEdu";
import { Container } from "@mui/material";

import Education from "./pages/Education";
import EditEdu from "./pages/EditEdu";
import { ToastContainer } from "react-toastify";

function App() {
  return (
    <>
      <Header />
      <Container style={{ marginTop: "4.5rem" }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="create" element={<CreateEdu />} />
          <Route path="/edu/:id" element={<Education />} />
          <Route path="/edit/:id" element={<EditEdu />} />
        </Routes>
        <ToastContainer />
      </Container>
    </>
  );
}

export default App;
