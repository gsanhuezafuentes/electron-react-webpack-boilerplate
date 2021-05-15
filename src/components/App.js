import React from "react";
import { Provider } from "react-redux";
import store from "../redux/store";
import "../assets/css/App.css";

function App() {
  return (
    <Provider store={store}>
      <div>
        <h1>Hello, Electron!</h1>

        <p>
          I hope you enjoy using basic-electron-react-boilerplate to start your
          dev off right!
        </p>
      </div>
    </Provider>
  );
}

export default App;
