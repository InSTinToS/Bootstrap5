import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button } from "react-bootstrap";
import "./app.scss";

function App() {
  return (
    <div className="d-flex justify-content-center align-items-center flex-column text-primary">
      <span className="my-2">Hello World</span>

      <Button className="btn btn-success shadow-none text-light">
        Hello React-Bootstrap
      </Button>
    </div>
  );
}

export default App;
