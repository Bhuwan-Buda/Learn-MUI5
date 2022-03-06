import React, { Suspense, lazy } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "../Components/Dashboard/Layout";
import Homepage from "../Components/Pages/Homepage";
import Table from "../Components/Pages/Table";
import Users from "../Components/Pages/Users";
import Form from "../Components/Pages/Form";
import { ThemeProvider } from "@mui/material/styles";
import theme from "../Components/UI/Theme";

const PrivateRoutes = () => {
  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <Layout>
          <Routes>
            <Route path="/" exact element={<Homepage />} />
            <Route path="/table" exact element={<Table />} />
            <Route path="/users" exact element={<Users />} />
            <Route path="/form" exact element={<Form />} />
          </Routes>
        </Layout>
      </ThemeProvider>
    </BrowserRouter>
  );
};

export default PrivateRoutes;
