import React from "react";
import HomePage from "./Components/HomePage/HomePage";
import {ThemeProvider} from "@mui/material";
import themes from "./themes";
const App = () => {
  return (
      <ThemeProvider theme={themes}>
           <HomePage/>
      </ThemeProvider>
  );
};

export default App;
