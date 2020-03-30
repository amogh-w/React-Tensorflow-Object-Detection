import React from "react";
import { Paper } from "@material-ui/core";
import Detection from "./components/Detection";

const App = () => {
  return (
    <Paper style={{ margin: "20px", padding: "20px" }}>
      <Detection />
    </Paper>
  );
};

export default App;
