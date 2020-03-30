import React from "react";
import { Paper } from "@material-ui/core";
import Detection from "./components/Detection";
import Header from "./components/Header";

const App = () => {
  return (
    <React.Fragment>
      <Header />
      <Paper style={{ margin: "20px", padding: "20px", marginTop: "80px" }}>
        <Detection />
      </Paper>
    </React.Fragment>
  );
};

export default App;
